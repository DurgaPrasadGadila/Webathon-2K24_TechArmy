import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class=" mx-3 navbar-brand" href="/home">
          Fitness Tracking
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/stopwatch">
                Stopwatch
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/home">
                Progress
              </a>
            </li>
            <li
              class="nav-item btn btn-primary btn-sm p-0"
              style={{ marginLeft: "1000px" }}
            >
              <a class="nav-link fw-semibold text-white" href="/">
                Sign out
              </a>
            </li>
            <li class="nav-item dropdown">
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
