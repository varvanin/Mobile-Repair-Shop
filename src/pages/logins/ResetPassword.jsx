import React, { useState } from "react";
import "./Login.css";
import { supabase } from "../../config/supabaseClient";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ResetPassword() {
    try {
      const { error } = await supabase.auth.updateUser({
        email: email,
        password: password,
      });
      if (error) {
        alert(error);
      } else {
        alert("Your password is changed");
      }
    } catch (erro) {
      console.error(erro);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ResetPassword();
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
              Type your account's email address
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={handlePasswordChange}
            />
            <div id="emailHelp" className="form-text">
              Type your new password
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-secondary ps-5 pe-5 me-3 d-inline  "
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
