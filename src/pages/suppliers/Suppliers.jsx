import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SupplierManagementImg from "../../img/SupplierManagement.jpg";
import { useAuth } from "../../components/AuthContext";
import { supabase } from "../../config/supabaseClient";
import UpdateModal from "../../components/UpdateModal";

function Suppliers() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    supplierName: "",
    contact: "",
    address: "",
  });
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("Supplier")
        .insert([{ ...formData, shopId: user.user.id }]);
      if (error) {
        throw error;
      }
      console.log("Data inserted successfully:", data);
      setFormData({
        supplierName: "",
        contact: "",
        address: "",
      });
      fetchSuppliers(); // Refresh the supplier list after insertion
    } catch (error) {
      console.error("Error inserting data:", error.message);
    }
  };

  const fetchSuppliers = async () => {
    try {
      setLoading(true); // Set loading to true while fetching
      const { data, error } = await supabase
        .from("Supplier")
        .select("id, supplierName, contact, address")
        .eq("shopId", user.user.id);
      if (error) {
        throw error;
      }
      setSuppliers(data);
    } catch (error) {
      console.error("Error fetching suppliers:", error.message);
    } finally {
      setLoading(false); // Set loading to false when done fetching
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("Supplier").delete().eq("id", id);
      if (error) {
        throw error;
      }
      console.log("Supplier deleted successfully");
      fetchSuppliers(); // Refresh the supplier list after deletion
    } catch (error) {
      console.error("Error deleting supplier:", error.message);
    }
  };

  const handleUpdate = async (updatedSupplier) => {
    try {
      const { data, error } = await supabase
        .from("Supplier")
        .update(updatedSupplier)
        .eq("id", updatedSupplier.id);
      if (error) {
        throw error;
      }
      alert("Data updated successfully:", data);
      fetchSuppliers(); // Refresh the supplier list after update
      setLoading(false);
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-lg">
        <div className="row justity-content-center align-items-center my-4 shadow-lg ">
          <div className="col-12 col-md-5 text-center my-3 p-4">
            <img
              src={SupplierManagementImg}
              alt=""
              className="img-fluid rounded-5 d-block"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}
            />
          </div>
          <div className="col-12 col-md-7 text-center my-3 p-4">
            <div className="display-6">Store All Your Suppliers and Manage</div>
            <div className="lead text-muted">
              Now with RepairEase you can easily Manage your supplier chain with
              just a few clicks!
            </div>
            <form onSubmit={handleSubmit} className="my-4">
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="supplierName"
                  value={formData.supplierName}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                />
                <label htmlFor="supplierName" className="form-label">
                  Supplier Name
                </label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                />
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                />
                <label htmlFor="address" className="form-label">
                  Address
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Add Supplier
              </button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center align-items-center my-4">
          <div className="col-12 table-responsive">
            {loading ? ( // Display loading indicator if loading is true
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <table className="table table-dark table-hover">
                <thead>
                  <tr>
                    <th scope="col">Supplier Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Address</th>
                    <th scope="col">Actions</th> {/* New column for actions */}
                  </tr>
                </thead>
                <tbody>
                  {suppliers.map((supplier, index) => (
                    <tr key={index}>
                      <td>{supplier.supplierName}</td>
                      <td>{supplier.contact}</td>
                      <td>{supplier.address}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(supplier.id)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary mx-2"
                          data-bs-toggle="modal"
                          data-bs-target={`#updateModal${supplier.id}`}
                        >
                          Update
                        </button>
                        <UpdateModal
                          supplier={supplier}
                          onUpdate={handleUpdate}
                        />
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

export default Suppliers;
