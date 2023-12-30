// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">
          <h2 className="text-white">Header</h2>
          <ul className="list-unstyled mb-0 d-flex gap-3">
            <li>
              <Link to="/" className="text-decoration-none text-white ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-decoration-none text-white ">
                About
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-decoration-none text-white ">
                {currentUser ? (
                  <img
                    src={currentUser.profilePicture}
                    className="img-fluid rounded-circle"
                    style={{ maxWidth: "35px", maxHeight: "35px" }}
                    alt="User Profile"
                  />
                ) : (
                  "Sing In"
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
