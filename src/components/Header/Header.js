import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
//my custom hook
//import useFirbase from "../../hooks/useFirebase";
import "./Header.css";

const auth = getAuth(app);

const Header = () => {
  //my custom hook
  //const { user, handleSignOut } = useFirbase();

  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Order</Link>
        <Link to="/register">Register</Link>
        <span style={{ marginRight: "10px", color: "green" }}>
          {user?.displayName && user?.displayName}
        </span>
        {user?.uid ? (
          // <button onClick={handleSignOut}}>Signout</button>
          <button onClick={() => signOut(auth)}>Signout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
