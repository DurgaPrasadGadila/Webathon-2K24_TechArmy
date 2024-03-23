import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    healthIssues: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement form validation here (optional)
    // You can use libraries like Yup or write your own validation logic

    // Send data to your backend API for user registration
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful registration (e.g., redirect to login page)
        console.log("Registration successful:", data);
      })
      .catch((error) => {
        // Handle registration errors (e.g., display error messages)
        console.error("Registration error:", error);
      });
  };

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <div className="signup-form" style={{ backgroundColor: "#F8F8F8" }}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel" // Use "tel" for phone number input
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
            {/* Add more gender options as needed */}
          </select>

          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />

          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />

          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />

          <label htmlFor="healthIssues">Health Issues (optional):</label>
          <textarea
            id="healthIssues"
            name="healthIssues"
            value={formData.healthIssues}
            onChange={handleChange}
          />

          <button class="btn btn-success m-2">
            <Link to="/home" className="text-decoration-none text-white">
              Sign up
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
