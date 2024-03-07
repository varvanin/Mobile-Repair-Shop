import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AccountImg from "../../img/Logo.png";
import "./Account.css";
import { useAuth } from "../../components/AuthContext";
function Account() {
  const { user } = useAuth();
  console.log(user.user.id);

  return (
    <div>
      <Navbar />
      <div className="bg1">
        <div className="container-fluid align-items-center d-flex min-vh-100 ps-3 pe-3 ">
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-12 col-md-4 text-center">
              <img
                src={AccountImg}
                alt=""
                className="img-fluid rounded-5 p-3 "
              />
            </div>
            <div className="col-12 col-md-8 my-4">
              <form action="" className="row g-3">
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder=""
                    value={user.user.email}
                    readOnly
                  />
                  <label htmlFor="email">Email Address</label>
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
                    id="contact"
                    placeholder=""
                  />
                  <label htmlFor="contact" className="form-label">
                    Contact
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
    </div>
  );
}

export default Account;
