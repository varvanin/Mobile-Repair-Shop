import React from "react";
import "./Login.css";

function PwResetInstuction() {
  return (
    <div className=" d-flex justify-content-center align-items-center vh-100 container-fluid bg-gray bg ">
      <div className="col-md-7 text-center shadow-lg rounded-top border-4 p-3 bg-white border-top border-bottom border-secondary  m-1">
        <form className="p-5">
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Give us your email to send password instruction
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-secondary ps-5 pe-5 me-3 d-inline  "
          >
            Send instruction
          </button>
        </form>
      </div>
    </div>
  );
}

export default PwResetInstuction;
