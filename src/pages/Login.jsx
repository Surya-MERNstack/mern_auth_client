// import React from "react";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";

// function Login() {
//   return (
//     <div  className="p-3 my-5 fluid">
//       <MDBRow>
//         <MDBCol xs="12" md="6">
//           <img
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//             className="img-fluid"
//             alt="Phone image"
//           />
//         </MDBCol>

//         <MDBCol xs="12" md="6">
//           <MDBRow>
//             <MDBCol xs="12">
//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Email address"
//                 id="formControlLgEmail"
//                 type="email"
//                 size="lg"
//                 floating
//               />
//             </MDBCol>
//             <MDBCol xs="12">
//               <MDBInput
//                 wrapperClass="mb-4"
//                 label="Password"
//                 id="formControlLgPassword"
//                 type="password"
//                 size="lg"
//                 floating
//               />
//             </MDBCol>

//             <MDBCol xs="auto">
//               <div className="d-flex justify-content-between mx-4 mb-4">
//                 <MDBCheckbox
//                   name="flexCheck"
//                   value=""
//                   id="flexCheckDefault"
//                   label="Remember me"
//                 />
//                 <a href="!#" className="text-decoration-none">
//                   Forgot password?
//                 </a>
//               </div>
//             </MDBCol>

//             <MDBCol xs="12">
//               <MDBBtn
//                 className="w-100"
//                 size="lg"
//                 style={{
//                   height: "3rem",
//                   border: "none",
//                 }}
//               >
//                 Sign in
//               </MDBBtn>
//             </MDBCol>

//             <MDBCol xs="12">
//               <div className="divider d-flex align-items-center my-4">
//                 <p className="text-center fw-bold mx-3 mb-0">OR</p>
//               </div>
//             </MDBCol>

//             <MDBCol xs="12">
//               <MDBBtn
//                 className="mb-4 "
//                 size="xl"
//                 style={{

//                   backgroundColor: "rgb(115, 82, 199,0)",
//                   textAlign: "center",
//                   border: "none",
//                   borderRadius : "100%",
//                 }}
//               >
//                 {/* <MDBIcon fab icon="facebook-f" className="mx-2" /> */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="50"
//                   height="50"
//                   viewBox="0 0 48 48"
//                 >
//                   <path
//                     fill="#FFC107"
//                     d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//                   ></path>
//                   <path
//                     fill="#FF3D00"
//                     d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//                   ></path>
//                   <path
//                     fill="#4CAF50"
//                     d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//                   ></path>
//                   <path
//                     fill="#1976D2"
//                     d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//                   ></path>
//                 </svg>
//               </MDBBtn>
//             </MDBCol>

//             <MDBCol xs="12">
//               {/* <MDBBtn
//                 className="mb-4 w-100 rounded"
//                 size="lg"
//                 style={{
//                   height: "3rem",
//                   border: "none",
//                   backgroundColor: "#55acee",
//                 }}
//               >
//                 <MDBIcon fab icon="twitter" className="mx-2" />
//                 Continue with Twitter
//               </MDBBtn> */}
//             </MDBCol>
//           </MDBRow>
//         </MDBCol>
//       </MDBRow>
//     </div>
//   );
// }

// export default Login;

// import React from "react";
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div className="p-3 my-5 fluid">
//       <div className="row">
//         <div className="col-xs-12 col-md-6">
//           <img
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//             className="img-fluid"
//             alt="Phone image"
//           />
//         </div>

//         <div className="col-xs-12 col-md-6">
//           <div className="row">
//             <div className="col-xs-12">
//               <div className="mb-4">
//                 <label htmlFor="formControlLgEmail" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   className="form-control form-control-lg"
//                   id="formControlLgEmail"
//                   type="email"
//                 />
//               </div>
//             </div>
//             <div className="col-xs-12">
//               <div className="mb-4">
//                 <label htmlFor="formControlLgPassword" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   className="form-control form-control-lg"
//                   id="formControlLgPassword"
//                   type="password"
//                 />
//               </div>
//             </div>

//             <div className="col-auto">
//               <div className="d-flex justify-content-between mx-4 mb-4">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input "
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//                 <a href="!#" className="text-decoration-none mx-1">
//                    Forgot password?
//                 </a>
//               </div>
//             </div>

//             <div className="col-xs-12">
//               <button className="btn btn-primary w-100" type="button">
//                 Sign in
//               </button>
//             </div>

//             <div className="col-xs-12">
//               <div className="divider d-flex text-center w-100 align-items-center my-4">
//                 <p className="text-center fw-bold mx-3 mb-0">Don't  have an account</p><Link to="/register">Register</Link>
//               </div>
//             </div>
//                  <div className="col-xs-12">
//                   </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// eslint-disable-next-line no-unused-vars

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi"; // Import eye icons from a React Icons library
import "./Login.css";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailFocused(false);
    }
  };


  

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordFocused(false);
    }
  };

  return (
    <div className="p-3 my-5 fluid">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </div>

        <div className="col-xs-12 col-md-6 mt-4">
          <div className="fw-semibold">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                fontFamily: "NoirPro, Arial",
              }}
            >
              Sign In
            </h2>
          </div>
          <div className="row mt-4" style={{ fontSize: "1.3rem" }}>
            <div className="col-xs-12">
              <div className={`mb-4 mt-4 ${emailFocused ? "focused" : ""}`}>
                <label htmlFor="formControlLgEmail" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formControlLgEmail"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                  required
                />
              </div>
            </div>
            <div className="col-xs-12">
              <div className={`mb-4 ${passwordFocused ? "focused" : ""}`}>
                <label htmlFor="formControlLgPassword" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formControlLgPassword"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  required
                />
                <button
                  className="bg-white fw-4 eye -left-2"
                  type="button"
                  style={{ border: "none", outline: "none" }}
                  onClick={handlePasswordVisibility}
                >
                  {showPassword ? <BiHide /> : <BiShow />}
                </button>
              </div>
            </div>
            <div className="col-xs-12 d-flex justify-content-center mt-4">
              <button
                className="w-50 p-2 fw-semibold text-white rounded"
                style={{
                  fontSize: "1.4rem",
                  fontFamily: "NoirPro, Arial",
                  background: "#7352C7",
                  border: "none",
                }}
                type="button"
              >
                SIGN IN
              </button>
            </div>
            <div className="col-xs-12">
              <div className="col-xs-12 d-flex justify-content-center mt-4" style={{fontSize : "1.1rem"}}>
                <p className="fw-semibold">
                  Dont have an account <Link to="/register">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
