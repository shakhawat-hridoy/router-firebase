import React from "react";
import { Link } from "react-router-dom";
import useFirbase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirbase();
  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/order">Order</Link>
        <Link to="/register">Register</Link>
        <span style={{ marginRight: "10px", color: "green" }}>
          {user?.displayName && user?.displayName}
        </span>
        {user?.uid ? (
          <button onClick={handleSignOut}>Signout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
