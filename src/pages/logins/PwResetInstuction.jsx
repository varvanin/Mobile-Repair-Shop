import React, { useState } from "react";
import "./Login.css";
import { supabase } from "../../config/supabaseClient";
import toast from "react-hot-toast";

function PwResetInstuction() {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function resetPw() {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        toast.error("Please Type a Valid Email Address", error);
      } else {
        toast.success("Check your inbox for password reset instruction");
      }
    } catch (error) {
      console.error(
        "There is a some kind of error on password reset process. Please wait a moment until we fix it ",
        error
      );
      toast.error(
        "There is a some kind of error on password reset process. Please wait a moment until we fix it "
      );
    } finally {
      setLoading(false);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPw();
  };

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
              value={email}
              onChange={handleEmailChange}
            />
            <div id="emailHelp" className="form-text">
              Give us your email to send password instruction
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-secondary ps-5 pe-5 me-3 d-inline  "
          >
            {isLoading ? "Sending..." : "Send Instructions"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PwResetInstuction;
