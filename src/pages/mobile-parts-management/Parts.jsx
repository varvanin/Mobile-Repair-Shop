import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AccessoriesImg from "../../img/mobile-phone-accessories.webp";

function Parts() {
  return (
    <>
      <Navbar />
      <div className="container-lg ">
        <div className="row justify-content-center align-items-center my-4 shadow-lg rounded">
          <div className="col-12 col-md-5 text-center my-5">
            <img
              src={AccessoriesImg}
              alt=""
              className="img-fluid rounded-5 d-block"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}
            />
          </div>
          <div className="row col-12 col-md-7 text-center my-5">
            <div className="display-6">
              Access And Manage Your Mobile Parts/Accessories
            </div>
            <div className="lead text-muted">
              Store your Repair parts/accessories in EaseRepair and Manage them
              with no stress
            </div>
            <form action="" className="row g-2 my-2 ms-4">
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder=""
                />
                <label htmlFor="aame">Part Name</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  placeholder=""
                />
                <label htmlFor="quantity">Quantity</label>
              </div>
              <div className="form-floating mb-3 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder=""
                />
                <label htmlFor="price">Price</label>
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
                  <th scope="col">Part Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Poco M3 display</td>
                  <td>14500</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Poco M3 Pro display</td>
                  <td>14800</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Mi 10 charger</td>
                  <td>7600</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Samsung S10 Display</td>
                  <td>15600</td>
                  <td>5</td>
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

export default Parts;
