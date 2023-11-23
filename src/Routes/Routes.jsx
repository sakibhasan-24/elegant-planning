import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import About from "../components/Pages/About";

import HomeComponents from "../components/Pages/HomeComponents";
import ServiceDetails from "../components/Pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),

    children: [
      { path: "/", element: <HomeComponents /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      {
        path: "/services/:category/:id",
        loader: async () => await fetch("services.json"),
        element: <ServiceDetails />,
      },
      { path: "/register", element: <Register /> },
    ],
  },
  //
]);
export default router;
