import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
//import useFirbase from "../../hooks/useFirebase";

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);
  //const { user } = useFirbase();
  return (
    <div>
      <h2>home</h2>
      <p>Current user is: {user ? user.displayName : "Nobody"}</p>
    </div>
  );
};

export default Home;
