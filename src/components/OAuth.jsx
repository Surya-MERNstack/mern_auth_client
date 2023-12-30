// eslint-disable-next-line no-unused-vars
import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/UserSlice";
import {useNavigate} from 'react-router-dom';
const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("https://mern-auth-servers.onrender.com/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
     navigate('/')
    } catch (err) {
      console.log("could not login with google!!!", err);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogle}
        className="btn btn-danger mt-3 w-100 font-bold text-uppercase"
      >
        Continue with Goggle
      </button>{" "}
    </div>
  );
};

export default OAuth;
