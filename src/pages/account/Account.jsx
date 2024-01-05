import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AccountImg from "../../img/Logo.png";
import "./Account.css";

function Account() {
  return (
    <div className="bg container-fluid d-flex flex-column min-vh-100">
      <Navbar />
      <div className="content flex-grow-1">
        <div className="row justify-content-center align-items-center my-4">
          <div className="col-12 col-md-4 text-center">
            <img src={AccountImg} alt="" className="img-fluid rounded-5 ps-3" />
          </div>
          <div className="col-12 col-md-8 my-4">
            <form action="" className="row g-3">
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder=""
                />
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="OwnerName"
                  placeholder=""
                />
                <label htmlFor="OwnerName">Owner Name</label>
              </div>

              <div className="form-floating mb-3 col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  placeholder=""
                />
                <label htmlFor="Address">Address</label>
              </div>

              <div className="form-floating mb-3 col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="City"
                  placeholder=""
                />
                <label htmlFor="City" className="form-label">
                  City
                </label>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button type="submit" className="btn btn-secondary ms-2">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
