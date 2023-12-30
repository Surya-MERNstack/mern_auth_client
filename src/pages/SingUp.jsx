// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
// import axios from "axios";
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const response = await fetch("https://mern-auth-servers.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
      }
      navigate("/sign-in");
      setFormData(null);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-center fs-2 fw-bold mt-3">Sign Up</h1>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className=" p-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  
                  placeholder="Enter your username"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-info mt-2 w-100 text-uppercase"
              >
                {loading ? "Loading...." : "Sign up"}
              </button>
              <OAuth />

              <div>
                <p>
                  Have an account{" "}
                  <Link to="/sign-in" className="text-decoration-none text-sm">
                    Sign In
                  </Link>
                </p>
                <p className="text-danger">
                  {error && "something went wrong!!!"}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
