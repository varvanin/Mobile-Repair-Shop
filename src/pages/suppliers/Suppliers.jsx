import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SupplierManagementImg from "../../img/SupplierManagement.jpg";
import { useAuth } from "../../components/AuthContext";
import { supabase } from "../../config/supabaseClient";

function Suppliers() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    supplierName: "",
    contact: "",
    address: "",
  });
  const [suppliers, setSuppliers] = useState([]);

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
      const { data, error } = await supabase
        .from("Supplier")
        .select("supplierName, contact, address")
        .eq("shopId", user.user.id);
      if (error) {
        throw error;
      }
      setSuppliers(data);
    } catch (error) {
      console.error("Error fetching suppliers:", error.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
            <form onSubmit={handleSubmit} className="row g-2 my-2 ms-4">
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="supplierName"
                  placeholder=""
                  value={formData.supplierName}
                  onChange={handleInputChange}
                />
                <label htmlFor="supplierName">Supplier Name</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  placeholder=""
                  value={formData.contact}
                  onChange={handleInputChange}
                />
                <label htmlFor="contact">Contact</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder=""
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <label htmlFor="address">Address</label>
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
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier, index) => (
                  <tr key={index}>
                    <td>{supplier.supplierName}</td>
                    <td>{supplier.contact}</td>
                    <td>{supplier.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Suppliers;
