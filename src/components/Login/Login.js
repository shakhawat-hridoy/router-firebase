import React from "react";
import useFirbase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirbase();
  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google SignIn</button>
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
