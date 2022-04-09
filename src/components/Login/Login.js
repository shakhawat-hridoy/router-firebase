import { getAuth } from "firebase/auth";
import React from "react";
//my custom hook
//import useFirbase from "../../hooks/useFirebase";

//imported from react firebase hooks(github)(google search)
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  //my custom hook
  // const { signInWithGoogle } = useFirbase();
  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={handleSignInWithGoogle}>Google SignIn</button>
      </div>
      <form>
        <input type="email" name="" placeholder="Enter Email" />
        <br />
        <input type="password" name="" placeholder="Enter Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
