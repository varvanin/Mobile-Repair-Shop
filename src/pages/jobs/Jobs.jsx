import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import JobsImg from "../../img/Jobs.jpg";
import "./Jobs.css";
import { supabase } from "../../config/supabaseClient";
import { useAuth } from "../../components/AuthContext";

function Jobs() {
  const [formData, setFormData] = useState({
    customerName: "",
    date: "",
    contact: "",
    deviceName: "",
    fault: "",
    charge: "",
  });
  const [errors, setErrors] = useState({
    customerName: "",
    date: "",
    contact: "",
    deviceName: "",
    fault: "",
    charge: "",
  });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.customerName) {
      errors.customerName = "Customer name is required";
    }

    if (!formData.date) {
      errors.date = "Date is required";
    }

    if (!formData.contact) {
      errors.contact = "Contact number is required";
    }

    if (!formData.deviceName) {
      errors.deviceName = "Device name is required";
    }

    if (!formData.fault) {
      errors.fault = "Device fault is required";
    }

    if (!formData.charge) {
      errors.charge = "Charge for the repair is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("Repairs")
        .insert([{ ...formData, repairId: user.user.id }]);

      if (error) {
        throw error;
      }

      setFormData({
        customerName: "",
        date: "",
        contact: "",
        deviceName: "",
        fault: "",
        charge: "",
      });

      console.log("Data inserted successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-lg">
        <div className="row justify-content-center align-items-center my-4 shadow-lg p-3 rounded-5">
          <div className="col-12 col-md-5 text-center">
            <img
              src={JobsImg}
              alt=""
              className="img-fluid rounded-5 d-block"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}
            />
          </div>
          <div className="col-12 col-md-7 text-center my-4">
            <div className="display-4">Add Your Jobs</div>
            <div className="lead text-muted">
              Add all of your jobs and manage them easily with us
            </div>
            <form
              action=""
              className="row g-3 my-2 ms-4"
              onSubmit={handleSubmit}
            >
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="customerName"
                  placeholder=""
                  value={formData.customerName}
                  onChange={handleInputChange}
                />
                <label htmlFor="customerName">Customer Name</label>
                {errors.customerName && (
                  <div className="invalid-feedback">{errors.customerName}</div>
                )}
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  placeholder=""
                  value={formData.date}
                  onChange={handleInputChange}
                />
                <label htmlFor="date">Date</label>
                {errors.date && (
                  <div className="invalid-feedback">{errors.date}</div>
                )}
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
                <label htmlFor="contact">Contact Number</label>
                {errors.contact && (
                  <div className="invalid-feedback">{errors.contact}</div>
                )}
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="deviceName"
                  placeholder=""
                  value={formData.deviceName}
                  onChange={handleInputChange}
                />
                <label htmlFor="deviceName">Device Name</label>
                {errors.deviceName && (
                  <div className="invalid-feedback">{errors.deviceName}</div>
                )}
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="fault"
                  placeholder=""
                  value={formData.fault}
                  onChange={handleInputChange}
                />
                <label htmlFor="fault">Fault</label>
                {errors.fault && (
                  <div className="invalid-feedback">{errors.fault}</div>
                )}
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="charge"
                  placeholder=""
                  value={formData.charge}
                  onChange={handleInputChange}
                />
                <label htmlFor="charge">Charge</label>
                {errors.charge && (
                  <div className="invalid-feedback">{errors.charge}</div>
                )}
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary ps-3 pe-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center align-items-center my-4">
          <div className="col-12 text-center table-responsive">
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Contact Number</th>
                  <th scope="col">Device Name</th>
                  <th scope="col">Fault</th>
                  <th scope="col">Charge</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>{/* Populate with data from state */}</tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Jobs;
