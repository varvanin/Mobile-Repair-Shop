import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AccountImg from "../../img/Logo.png";
import "./Account.css";

function Account() {
  return (
    <>
      <Navbar />
      <div className="bg container-fluid">
        <div className="content min-vh-100 ">
          <div className="row justify-content-center align-items-center my-4 d-flex vh-100 ">
            <div className="col-12 col-md-4 text-center">
              <img
                src={AccountImg}
                alt=""
                className="img-fluid rounded-5 ps-3"
              />
            </div>
            <div className="col-12 col-md-8 my-4">
              <form action="" className="row g-3">
                <div class="form-floating mb-3 col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder=""
                  />
                  <label for="email">Email address</label>
                </div>

                <div class="form-floating mb-3 col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="OwnerName"
                    placeholder=""
                  />
                  <label for="OwnerName">Owner Name</label>
                </div>

                <div class="form-floating mb-3 col-md-8">
                  <input
                    type="text"
                    class="form-control"
                    id="Address"
                    placeholder=""
                  />
                  <label for="Address">Address</label>
                </div>

                <div class="form-floating mb-3 col-md-4">
                  <input
                    type="text"
                    class="form-control"
                    id="City"
                    placeholder=""
                  />
                  <label for="City" class="form-label">
                    City
                  </label>
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
    </>
  );
}

export default Account;
