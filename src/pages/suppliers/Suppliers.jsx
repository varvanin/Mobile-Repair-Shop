import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SupplierManagementImg from "../../img/SupplierManagement.jpg";

function Suppliers() {
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
            <div className="display-6">
              Store All You'r Suppliers and Manage
            </div>
            <div className="lead text-muted">
              Now with RepairEase you can easily Manage your you'r supplier
              chain with just few clicks !
            </div>
            <form action="" className="row g-2 my-2 ms-4">
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="supplierName"
                  placeholder=""
                />
                <label htmlFor="supplierName">Supplier Name</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  placeholder=""
                />
                <label htmlFor="contact">Contact</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder=""
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
                <tr>
                  <td>Mark</td>
                  <td>771908671</td>
                  <td>Galle 02 Road</td>
                </tr>
                <tr>
                  <td>Elize</td>
                  <td>771902411</td>
                  <td>Matara</td>
                </tr>
                <tr>
                  <td>Julia</td>
                  <td>722511765</td>
                  <td>Colombo</td>
                </tr>
                <tr>
                  <td>Adam</td>
                  <td>740455455</td>
                  <td>Kandy</td>
                </tr>
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
