import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
