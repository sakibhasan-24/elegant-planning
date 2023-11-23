import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner";
import { Navigate, useLocation } from "react-router-dom";

export default function Protected({ children }) {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
}
