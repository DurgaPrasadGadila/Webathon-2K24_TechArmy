import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        className="container rounded-start mt-5 p-5 rounded-end "
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <h1 className="text-black text-center">
          Fitness Tracker And Goal Setter
        </h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check email notifications
            </label>
          </div>
          <button type="submit" class="btn btn-success m-2">
            <Link to="/home" className="text-decoration-none text-white">
              Submit
            </Link>
          </button>
          <button class="btn btn-success m-2">
            <Link to="/signup" className="text-decoration-none text-white">
              Sign up
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
