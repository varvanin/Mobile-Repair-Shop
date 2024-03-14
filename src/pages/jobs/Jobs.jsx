import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import JobsImg from "../../img/Jobs.jpg";
import "./Jobs.css";
import { supabase } from "../../config/supabaseClient";
import { useAuth } from "../../components/AuthContext";
import { useEffect } from "react";

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
  const [selectedJob, setSelectedJob] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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
      fetchJobs();
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("Repairs")
        .select(
          "id, customerName, date, deviceName,fault,charge,status,contact"
        )
        .eq("repairId", user.user.id);

      if (error) {
        throw error;
      }

      console.log(data);

      setJobs(data);
    } catch (error) {
      console.log("Error fetching Jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (jobId, newStatus) => {
    try {
      const { data, error } = await supabase
        .from("Repairs")
        .update({ status: newStatus })
        .eq("id", jobId)
        .single();

      if (error) {
        throw error;
      }

      // Assuming you want to update the jobs state after successful update
      const updatedJobs = jobs.map((job) => {
        if (job.id === jobId) {
          return { ...job, status: newStatus };
        }
        return job;
      });
      setJobs(updatedJobs);

      console.log("Status updated successfully");
    } catch (error) {
      console.error("Error updating status:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("Repairs").delete().eq("id", id);
      if (error) {
        throw error;
      }
      console.log("Job deleted successfully");
      fetchJobs();
    } catch (error) {
      console.error("Error deleting Job:", error.message);
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
        .from("Repairs")
        .update(formData)
        .eq("id", selectedJob.id);
      if (error) {
        throw error;
      }

      console.log("Data updated successfully:");
      setSelectedJob(null);
      setFormData({
        customerName: "",
        date: "",
        contact: "",
        deviceName: "",
        fault: "",
        charge: "",
      });
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedJob) {
      setFormData({
        customerName: selectedJob.customerName,
        date: selectedJob.date,
        contact: selectedJob.contact,
        deviceName: selectedJob.deviceName,
        fault: selectedJob.fault,
        charge: selectedJob.charge,
      });
    }
  }, [selectedJob]);

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
            {selectedJob && (
              <form
                action=""
                className="row g-3 my-2 ms-4"
                onSubmit={handleUpdate}
              >
                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.customerName && "is-invalid"
                    }`}
                    id="customerName"
                    placeholder=""
                    value={formData.customerName}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="customerName">Customer Name</label>
                  {errors.customerName && (
                    <div className="invalid-feedback">
                      {errors.customerName}
                    </div>
                  )}
                </div>

                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="date"
                    className={`form-control ${errors.date && "is-invalid"}`}
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
                    className={`form-control ${errors.contact && "is-invalid"}`}
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
                    className={`form-control ${
                      errors.deviceName && "is-invalid"
                    }`}
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
                    className={`form-control ${errors.fault && "is-invalid"}`}
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
                    className={`form-control ${errors.charge && "is-invalid"}`}
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
                    Update
                  </button>
                </div>
              </form>
            )}
            {!selectedJob && (
              <form
                action=""
                className="row g-3 my-2 ms-4"
                onSubmit={handleSubmit}
              >
                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.customerName && "is-invalid"
                    }`}
                    id="customerName"
                    placeholder=""
                    value={formData.customerName}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="customerName">Customer Name</label>
                  {errors.customerName && (
                    <div className="invalid-feedback">
                      {errors.customerName}
                    </div>
                  )}
                </div>

                <div className="form-floating mb-3 col-md-10">
                  <input
                    type="date"
                    className={`form-control ${errors.date && "is-invalid"}`}
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
                    className={`form-control ${errors.contact && "is-invalid"}`}
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
                    className={`form-control ${
                      errors.deviceName && "is-invalid"
                    }`}
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
                    className={`form-control ${errors.fault && "is-invalid"}`}
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
                    className={`form-control ${errors.charge && "is-invalid"}`}
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
            )}
          </div>
        </div>
        <div className="row justify-content-center align-items-center my-4">
          <div className="col-12 text-center table-responsive">
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
                    <th scope="col">Customer Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Device Name</th>
                    <th scope="col">Fault</th>
                    <th scope="col">Charge</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr key={index}>
                      <td>{job.customerName}</td>
                      <td>{job.date}</td>
                      <td>{job.contact}</td>
                      <td>{job.deviceName}</td>
                      <td>{job.fault}</td>
                      <td>{job.charge}</td>
                      <td>
                        <select
                          className="form-select"
                          value={job.status}
                          onChange={(e) =>
                            handleStatusUpdate(job.id, e.target.value)
                          }
                        >
                          <option value="Pending">Pending</option>
                          <option value="Started">Started</option>
                          <option value="Completed">Completed</option>
                          <option value="Failed">Failed</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(job.id)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary mx-2"
                          onClick={() => setSelectedJob(job)}
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

export default Jobs;
