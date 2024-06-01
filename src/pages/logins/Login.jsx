import React, { useState } from "react";
import "./Login.css";
import { supabase } from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  async function loginUser(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert("Something is wrong with your email or password");
      } else {
        alert("Logged Successfully");
        login(data);
        console.log(data);
        navigate("/home");
      }
    } catch (error) {
      console.error("Unexpected error occurred during login.", error);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 container-fluid bg-gray bg">
      <div className="col-md-7 text-center shadow-lg rounded-top border-4 p-3 bg-white border-top border-bottom border-secondary m-1">
        <form onSubmit={loginUser} className="p-5">
          <div className="mb-3">
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
              We'll never share your email with anyone else.
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
          </div>

          <button
            type="submit"
            className="btn btn-secondary ps-5 pe-5 me-3 d-inline"
          >
            Login
          </button>

          <a
            href="/PwResetInstuction"
            className="text-danger d-flex mt-2 align-items-start text-center"
          >
            Forget Password ?
          </a>

          <a
            href="/SignUp"
            className="text-success d-flex mt-2 align-items-centerjustify-content-end"
          >
            Not a Member ? Register Now !
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
