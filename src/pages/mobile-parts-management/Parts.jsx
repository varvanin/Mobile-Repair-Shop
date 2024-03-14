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

  useEffect(() => {
    fetchParts();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      console.log("Fetched parts:", data); // Log fetched data
      setParts(data);
    } catch (error) {
      console.log("Error fetching parts:", error); // Log any errors
    } finally {
      setLoading(false);
    }
  };

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
            <form
              action=""
              className="row g-2 my-2 ms-4"
              onSubmit={handleSubmit}
            >
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="partName"
                  placeholder=""
                  onChange={handleInputChange}
                  value={formData.partName}
                />
                <label htmlFor="partName">Part Name</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  placeholder=""
                  onChange={handleInputChange}
                  value={formData.quantity}
                />
                <label htmlFor="quantity">Quantity</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder=""
                  onChange={handleInputChange}
                  value={formData.price}
                />
                <label htmlFor="price">Price</label>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary ps-3 pe-3">
                  Save
                </button>
              </div>
            </form>
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
