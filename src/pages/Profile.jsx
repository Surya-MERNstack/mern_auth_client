// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserError,
  deleteUserError,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
} from "../redux/user/UserSlice";

const Profile = () => {
  const [image, setImage] = useState(undefined);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [imagepercentage, setImagPercentage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [updatedSuccess, setUpdatedSuccess] = useState(false);
  useEffect(() => {
    if (image) {
      handleImageUpload(image);
    }
  }, [image]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleImageUpload = async (image) => {
    try {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + image.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImagPercentage(Math.round(progress));
        },
        () => {
          setImageError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              setFormData({ ...formData, profilePicture: downloadURL });
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        }
      );
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(
        `https://mern-auth-servers.onrender.com/user/update/${currentUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserError(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdatedSuccess(true);
    } catch (err) {
      dispatch(updateUserError(err));
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(
        `https://mern-auth-servers.onrender.com/user/delete/${currentUser._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (err) {
      dispatch(deleteUserError(err));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("https://mern-auth-servers.onrender.com/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="text-bold font-semibold text-center mt-4">Profile</h1>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <form className="text-center" onSubmit={handleSubmit}>
          <input
            type="file"
            ref={fileRef}
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            accept="image/*"
            name=""
            id=""
          />
          <img
            onClick={() => fileRef.current.click()}
            src={formData.profilePicture || currentUser.profilePicture}
            className="img-fluid rounded-circle"
            alt=""
            style={{
              maxWidth: "5rem",
              maxHeight: "5rem",
              width: "50%",
              height: "50%",
              objectFit: "fit",
              cursor: "pointer",
            }}
          />

          <p className="text-sm text-center">
            {imageError ? (
              <span className="text-danger">
                Error uploading image (file size must be less than 2 MB)
              </span>
            ) : imagepercentage > 0 && imagepercentage < 100 ? (
              <span className="text-danger">{`Uploading: ${imagepercentage}%`}</span>
            ) : imagepercentage === 100 ? (
              <span className="text-success">Image uploaded successfully</span>
            ) : (
              ""
            )}
          </p>

          <div className="mt-4">
            <input
              type="text"
              className="form-control mb-3"
              id="username"
              defaultValue={currentUser.username}
              placeholder="Enter your username"
              onChange={handleChange}
            />
            <input
              type="email"
              className="form-control mb-3"
              id="email"
              defaultValue={currentUser.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control mb-3"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            <button className="bg-success p-2 border rounded text-white font-semibold text-uppercase w-100">
              {loading ? "Loading...." : "Update"}
            </button>
          </div>
        </form>
      </div>
      <p className="text-success text-center mt-2">
        {updatedSuccess && "Updated Successfully!"}
      </p>
      <p className="text-danger text-center">
        {error && "Something went Wrong!"}
      </p>
      {/* {console.log(error)} */}
      <div className=" text-center ">
        <span
          onClick={handleDelete}
          className="text-danger -fs-1  mx-4 font-weight-bold mr-3"
          style={{ cursor: "pointer" }}
        >
          Delete Account
        </span>
        <span
          className="text-danger -fs-1  cursor-pointer mx-3 font-weight-bold"
          onClick={handleSignOut}
          style={{ cursor: "pointer" }}
        >
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Profile;
