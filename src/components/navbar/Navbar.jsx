import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../config/supabaseClient";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <nav class="navbar navbar-expand-md bg-body-tertiary " data-bs-theme="dark">
      <div class="container-lg">
        <a class="navbar-brand fw-bold brandLogo " href="/home">
          EaseRepair
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav  ">
            <li class="nav-item">
              <a
                class="nav-link fw-bold text-light nav-link-style"
                href="/home"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-bold  text-light nav-link-style"
                href="/jobs"
              >
                Jobs
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-bold  text-light nav-link-style"
                href="/parts"
              >
                Parts
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-bold  text-light nav-link-style"
                href="/suppliers"
              >
                Suppliers
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-bold  text-light nav-link-style"
                href="/account"
              >
                My Account
              </a>
            </li>
            <li class="nav-item">
              <button
                class="nav-link fw-bold  text-light nav-link-style-lg d-md-none "
                onClick={handleLogout}
              >
                Log Out
              </button>
            </li>
          </ul>
          <div>
            <a
              className="btn btn-primary d-none d-md-inline ms-4 rounded-start-pill  text-light"
              href="/jobs"
            >
              Update Jobs
            </a>
          </div>
          <div>
            <button
              className="btn btn-danger d-none d-md-inline  ms-4 rounded-3 rounded-top-3 "
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
