import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
//import useFirbase from "../../hooks/useFirebase";

const auth = getAuth(app);

const Products = () => {
  const [user] = useAuthState(auth);
  //my custom hook
  //const { user } = useFirbase();
  return (
    <div>
      <p>Current User: {user ? user.displayName : "voooooooot"}</p>
    </div>
  );
};

export default Products;
