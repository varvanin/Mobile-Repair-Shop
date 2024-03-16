import React, { useState } from "react";

function UpdateModal({ supplier, onUpdate }) {
  const [updatedSupplier, setUpdatedSupplier] = useState({ ...supplier });
  const [formErrors, setFormErrors] = useState({
    supplierName: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    setUpdatedSupplier({ ...updatedSupplier, [e.target.id]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.id]: "" }); // Clear any existing errors when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onUpdate(updatedSupplier);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      supplierName: "",
      contact: "",
      address: "",
    };

    if (!updatedSupplier.supplierName.trim()) {
      errors.supplierName = "Supplier Name is required";
      isValid = false;
    }

    if (!updatedSupplier.contact.trim()) {
      errors.contact = "Contact is required";
      isValid = false;
    } else if (!/^\d{9}$/.test(updatedSupplier.contact.trim())) {
      errors.contact = "Contact must be a 09-digit number";
      isValid = false;
    }

    if (!updatedSupplier.address.trim()) {
      errors.address = "Address is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <div
      className="modal fade"
      id={`updateModal${supplier.id}`}
      tabIndex="-1"
      aria-labelledby={`updateModalLabel${supplier.id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`updateModalLabel${supplier.id}`}>
              Update Supplier
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    formErrors.supplierName ? "is-invalid" : ""
                  }`}
                  id="supplierName"
                  placeholder=""
                  value={updatedSupplier.supplierName}
                  onChange={handleChange}
                />
                <label htmlFor="supplierName">Supplier Name</label>
                <div className="invalid-feedback">
                  {formErrors.supplierName}
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    formErrors.contact ? "is-invalid" : ""
                  }`}
                  id="contact"
                  placeholder=""
                  value={updatedSupplier.contact}
                  onChange={handleChange}
                />
                <label htmlFor="contact">Contact</label>
                <div className="invalid-feedback">{formErrors.contact}</div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    formErrors.address ? "is-invalid" : ""
                  }`}
                  id="address"
                  placeholder=""
                  value={updatedSupplier.address}
                  onChange={handleChange}
                />
                <label htmlFor="address">Address</label>
                <div className="invalid-feedback">{formErrors.address}</div>
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
