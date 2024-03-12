import React, { useState } from "react";

function UpdateModal({ supplier, onUpdate }) {
  const [updatedSupplier, setUpdatedSupplier] = useState({ ...supplier });

  const handleChange = (e) => {
    setUpdatedSupplier({ ...updatedSupplier, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedSupplier);
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
                  className="form-control"
                  id="supplierName"
                  placeholder=""
                  value={updatedSupplier.supplierName}
                  onChange={handleChange}
                />
                <label htmlFor="supplierName">Supplier Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  placeholder=""
                  value={updatedSupplier.contact}
                  onChange={handleChange}
                />
                <label htmlFor="contact">Contact</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder=""
                  value={updatedSupplier.address}
                  onChange={handleChange}
                />
                <label htmlFor="address">Address</label>
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
