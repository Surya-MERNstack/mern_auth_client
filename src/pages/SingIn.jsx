// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

const SingIn = () => {
  const [formData, setFormData] = useState({});
 const {loading, error} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart);
      const response = await fetch("https://mern-auth-servers.onrender.com/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const data = await response.json();
      console.log("from sign in",data);
      if (data.success === false) {
        dispatch(signInFailure(data))
        return;
      } else navigate("/");
      dispatch(signInSuccess(data));

    } catch (err) {
      dispatch(signInFailure(err))
    }
  };

  return (
    <div>
      <h1 className="text-center fs-2 fw-bold mt-3">Sign In</h1>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className=" p-4">
              {/* <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    required
                    placeholder="Enter your username"
                    onChange={handleChange}
                  />
                </div> */}
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
                {loading ? "Loading...." : "Sign In"}
              </button>
              <OAuth/>
              
              <div>
                <p>
                  Dont Have an account{" "}
                  <Link to="/sign-up" className="text-decoration-none text-sm">
                    Sign Up
                  </Link>
                </p>
                <p className="text-danger">
                  {error ? error.message || "something went wrong!!!" : ""}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
