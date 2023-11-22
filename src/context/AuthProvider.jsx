import React, { createContext, useEffect, useState } from "react";
import app from "../components/Firebase/Firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  //   create a user based on google sign in

  const createUserOnGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    setLoading(true);

    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const clearMemory = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("no user We have");
      }
      setUser(currentUser);
      setLoading(false);
    });
    return () => clearMemory();
  }, []);
  const AuthValue = { user, loading, createUserOnGoogle, logOut };
  return (
    <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
  );
}
