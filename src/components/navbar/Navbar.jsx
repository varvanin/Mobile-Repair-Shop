import React from "react";
import "./Navbar.css";

function Navbar() {
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
              <a class="nav-link fw-bold  text-light nav-link-style" href="#">
                Part
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold  text-light nav-link-style" href="#">
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
              <a
                class="nav-link fw-bold  text-light nav-link-style-lg d-md-none "
                href="/"
              >
                Log Out
              </a>
            </li>
          </ul>
          <div>
            <a className="btn btn-primary d-none d-md-inline ms-4 rounded-start-pill ">
              Update Jobs
            </a>
          </div>
          <div>
            <a
              className="btn btn-danger d-none d-md-inline  ms-4 rounded-3 rounded-top-3 "
              href="/"
            >
              Log out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
