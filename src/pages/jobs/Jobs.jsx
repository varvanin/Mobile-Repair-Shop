import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import JobsImg from "../../img/Jobs.jpg";
import "./Jobs.css";

function Jobs() {
  return (
    <>
      <Navbar />
      <div className="container-lg ">
        <div className="row justify-content-center align-items-center my-4 shadow-lg p-3 rounded-5">
          <div className="col-12 col-md-5 text-center">
            <img
              src={JobsImg}
              alt=""
              className="img-fluid rounded-5 d-block "
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}
            />
          </div>
          <div className="col-12 col-md-7 text-center my-4">
            <div className="display-4">Add Your Jobs</div>
            <div className="lead text-muted">
              Add all of your jobs and manage them easily with us
            </div>
            <form action="" className="row g-3 my-2 ms-4">
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="customerName"
                  placeholder=""
                />
                <label htmlFor="customerName">Customer Name</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  placeholder=""
                />
                <label htmlFor="date">Date</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  placeholder=""
                />
                <label htmlFor="contact">Contact Number</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="device"
                  placeholder=""
                />
                <label htmlFor="device">Device Name</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="fault"
                  placeholder=""
                />
                <label htmlFor="fault">Fault</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="charge"
                  placeholder=""
                />
                <label htmlFor="charge">Charge</label>
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
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>2024/01/20</td>
                  <td>771907866</td>
                  <td>Xiomi Mi 8</td>
                  <td>Display Error</td>
                  <td>8000</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="statusDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Select Status
                      </button>
                      <div
                        className="dropdown-menu bg-secondary rounded-2"
                        aria-labelledby="statusDropdown"
                      >
                        <div class="dropdown-item-text text-light btn btn-secondary">
                          In Progress
                        </div>
                        <div class="dropdown-item-text text-light btn btn-secondary">
                          Completed
                        </div>
                        <sdiv class="dropdown-item-text text-light btn btn-secondary">
                          Pending
                        </sdiv>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Julia</td>
                  <td>2024/01/24</td>
                  <td>72251761</td>
                  <td>Apple Iphone 11</td>
                  <td>Camera Replace</td>
                  <td>18000</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="statusDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Select Status
                      </button>
                      <div
                        className="dropdown-menu bg-secondary rounded-2"
                        aria-labelledby="statusDropdown"
                      >
                        <div class="dropdown-item-text text-light btn btn-secondary">
                          In Progress
                        </div>
                        <div class="dropdown-item-text text-light btn btn-secondary">
                          Completed
                        </div>
                        <sdiv class="dropdown-item-text text-light btn btn-secondary">
                          Pending
                        </sdiv>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Elize</td>
                  <td>2024/01/29</td>
                  <td>740455456</td>
                  <td>Poco M3</td>
                  <td>Charging Port</td>
                  <td>4500</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="statusDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Select Status
                      </button>
                      <div
                        className="dropdown-menu bg-secondary rounded-2"
                        aria-labelledby="statusDropdown"
                      >
                        <div class="dropdown-item-text text-light btn btn-secondary">
                          In Progress
                        </div>
                        <div class="dropdown-item-text text-light btn btn-secondary">
                          Completed
                        </div>
                        <sdiv class="dropdown-item-text text-light btn btn-secondary">
                          Pending
                        </sdiv>
                      </div>
                    </div>
                  </td>
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

export default Jobs;
