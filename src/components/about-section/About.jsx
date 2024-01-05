import React from "react";
import AboutImg from "../../img/About.jpg";
import Accordion from "./Accordion";

function About() {
  return (
    <div className="container-md my-5">
      <div className="row justify-centent-center text-center align-items-center shadow-lg">
        <div className="text-center display-4 my-2">Why Choose Us ?</div>
        <div className="lead text-muted mb-4">
          Choose us for a reason not for the passsion
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img src={AboutImg} className="img-fluid rounded-5" alt="About us" />
        </div>
        <div className="col-md-6 text-center">
          <div className="accordion" id="accordionExample">
            <Accordion
              index={1}
              head="Free For Every Shop Owner"
              body="Just by register with use you can use whole features of our EaseRepair to ease your day today workload"
            />
            <Accordion
              index={2}
              head="User Friendly UI"
              body="Even you are a person with less experience with using a web like this you can continue with our easy and good looking UI"
            />
            <Accordion
              index={3}
              head="No More Headache Calls From Annoying Customers"
              body="By using SMS notifications for repair job status you can prevent annoyoing calls from some freak customers with just a one small sms"
            />
            <Accordion
              index={4}
              head="Manage Your Accessories With One Place"
              body="Avoid missing accessories here and there just manage all of them using our EaseRepair and make your life a better one"
            />
            <Accordion
              index={5}
              head="Avoid Missing Suppliers from you"
              body="No more missing contact details of your suppliers, store your suppliers details with EaseRepair and Manage "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
