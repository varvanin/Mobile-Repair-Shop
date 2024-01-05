import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AccountImg from "../../img/Account.jpg";
import "./Account.css";

function Account() {
  return (
    <div className="bg">
      <Navbar />
      <div className="container-fluid content min-vh-100 ">
        <div className="row justify-content-center align-items-center my-4 d-flex vh-100 ">
          <div className="col-12 col-md-4">
            <img src={AccountImg} alt="" className="img-fluid rounded-4" />
          </div>
          <div className="col-12 col-md-8 my-4">
            <form action="" className="row g-3">
              <div class="col-md-6">
                <label for="Email" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="Email" />
              </div>

              <div class="col-12">
                <label for="Address" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Address"
                  placeholder="1234 Main St"
                />
              </div>

              <div class="col-md-6">
                <label for="OwnerName" class="form-label">
                  Owner Name
                </label>
                <input type="text" class="form-control" id="OwnerName" />
              </div>
              <div class="col-md-4">
                <label for="City" class="form-label">
                  City
                </label>
                <input type="text" class="form-control" id="City" />
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
                <button type="submit" class="btn btn-secondary ms-2">
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
