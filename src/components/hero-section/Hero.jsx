import React from "react";
import RepairImg from "../../img/Repair.jpg";

function Hero() {
  return (
    <section>
      <div className="container-md my-4">
        <div className="row justify-content-center align-items-center shadow-lg">
          <div className="col-md-7 text-center">
            <h1 className="text-center align-items-center">
              <div className="display-1 p-1">Ease Your Repairs with us</div>
              <div className="lead text-muted p-2">
                Upload Your Repair Jobs and Easily Manage Them With Us !
              </div>
              <div className="lead text-muted p-1">
                Repair Status Notifications | Stock Management | Supplier
                Management
              </div>
            </h1>
            <div className="p-3">
              <button className="btn btn-primary text-center btn-lg ">
                Start Now
              </button>
            </div>
          </div>
          <div className="col-md-5 d-sm-inline d-md-block text-center my-5 p-5">
            <img src={RepairImg} alt="" className="img-fluid rounded-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
