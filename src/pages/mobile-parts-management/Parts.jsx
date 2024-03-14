import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AccessoriesImg from "../../img/mobile-phone-accessories.webp";
import { useAuth } from "../../components/AuthContext";
import { supabase } from "../../config/supabaseClient";

function Parts() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    partName: "",
    quantity: "",
    price: "",
  });

  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  useEffect(() => {
    fetchParts();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear previous errors when user starts typing
    setErrors({ ...errors, [id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("Parts")
        .insert([{ ...formData, shopId: user.user.id }]);
      if (error) {
        throw error;
      }

      console.log("Data inserted successfully:");
      setFormData({
        partName: "",
        quantity: "",
        price: "",
      });
      fetchParts();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchParts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Parts")
        .select("id, partName, price, quantity")
        .eq("shopId", user.user.id);

      if (error) {
        throw error;
      }

      console.log("Fetched parts:", data);
      setParts(data);
    } catch (error) {
      console.log("Error fetching parts:", error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.partName.trim()) {
      errors.partName = "Part Name is required";
    }

    if (!formData.quantity.trim()) {
      errors.quantity = "Quantity is required";
    } else if (!/^\d+$/.test(formData.quantity.trim())) {
      errors.quantity = "Quantity must be a number";
    }

    if (!formData.price.trim()) {
      errors.price = "Price is required";
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.price.trim())) {
      errors.price =
        "Price must be a valid number with up to two decimal places";
    }

    return errors;
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("Parts").delete().eq("id", id);
      if (error) {
        throw error;
      }
      console.log("Supplier deleted successfully");
      fetchParts();
    } catch (error) {
      console.error("Error deleting supplier:", error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("Parts")
        .update(formData)
        .eq("id", selectedPart.id);
      if (error) {
        throw error;
      }

      console.log("Data updated successfully:");
      setSelectedPart(null);
      setFormData({
        partName: "",
        quantity: "",
        price: "",
      });
      fetchParts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedPart) {
      setFormData({
        partName: selectedPart.partName,
        quantity: selectedPart.quantity,
        price: selectedPart.price,
      });
    }
  }, [selectedPart]);

  return (
    <>
      <Navbar />
      <div className="container-lg ">
        <div className="row justify-content-center align-items-center my-4 shadow-lg rounded">
          <div className="col-12 col-md-5 text-center my-5">
            <img
              src={AccessoriesImg}
              alt=""
              className="img-fluid rounded-5 d-block"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}
            />
          </div>
          <div className="row col-12 col-md-7 text-center my-5">
            <div className="display-6">
              Access And Manage Your Mobile Parts/Accessories
            </div>
            <div className="lead text-muted">
              Store your Repair parts/accessories in EaseRepair and Manage them
              with no stress
            </div>
            {selectedPart && (
              <form onSubmit={handleUpdate} className="row g-2 my-2 ms-4">
                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.partName ? "is-invalid" : ""
                    }`}
                    id="partName"
                    placeholder=""
                    onChange={handleInputChange}
                    value={formData.partName}
                  />
                  <label htmlFor="partName">Part Name</label>
                  {errors.partName && (
                    <div className="invalid-feedback">{errors.partName}</div>
                  )}
                </div>
                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.quantity ? "is-invalid" : ""
                    }`}
                    id="quantity"
                    placeholder=""
                    onChange={handleInputChange}
                    value={formData.quantity}
                  />
                  <label htmlFor="quantity">Quantity</label>
                  {errors.quantity && (
                    <div className="invalid-feedback">{errors.quantity}</div>
                  )}
                </div>
                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.price ? "is-invalid" : ""
                    }`}
                    id="price"
                    placeholder=""
                    onChange={handleInputChange}
                    value={formData.price}
                  />
                  <label htmlFor="price">Price</label>
                  {errors.price && (
                    <div className="invalid-feedback">{errors.price}</div>
                  )}
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary ps-3 pe-3">
                    Update
                  </button>
                </div>
              </form>
            )}

            {!selectedPart && (
              <form className="row g-2 my-2 ms-4" onSubmit={handleSubmit}>
                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.partName ? "is-invalid" : ""
                    }`}
                    id="partName"
                    placeholder=""
                    onChange={handleInputChange}
                    value={formData.partName}
                  />
                  <label htmlFor="partName">Part Name</label>
                  {errors.partName && (
                    <div className="invalid-feedback">{errors.partName}</div>
                  )}
                </div>
                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.quantity ? "is-invalid" : ""
                    }`}
                    id="quantity"
                    placeholder=""
                    onChange={handleInputChange}
                    value={formData.quantity}
                  />
                  <label htmlFor="quantity">Quantity</label>
                  {errors.quantity && (
                    <div className="invalid-feedback">{errors.quantity}</div>
                  )}
                </div>
                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.price ? "is-invalid" : ""
                    }`}
                    id="price"
                    placeholder=""
                    onChange={handleInputChange}
                    value={formData.price}
                  />
                  <label htmlFor="price">Price</label>
                  {errors.price && (
                    <div className="invalid-feedback">{errors.price}</div>
                  )}
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary ps-3 pe-3">
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="row justify-content-center align-items-center my-4">
          <div className="col-12 table-responsive">
            {loading ? (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <table className="table table-dark table-hover">
                <thead>
                  <tr>
                    <th scope="col">Part Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {parts.map((part, index) => (
                    <tr key={index}>
                      <td>{part.partName}</td>
                      <td>{part.price}</td>
                      <td>{part.quantity}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(part.id)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary mx-2"
                          onClick={() => setSelectedPart(part)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Parts;
