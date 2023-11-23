import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import About from "../components/Pages/About";
import HomeComponents from "../components/Pages/HomeComponents";
import ServiceDetails from "../components/Pages/ServiceDetails";
import Protected from "./Protected";
import Profile from "../components/Pages/Profile";
import ErrorPage from "../components/Pages/ErrorPage";
import Premium from "../components/Pages/Premium";

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

      {
        path: "/About",
        element: (
          <Protected>
            <About />
          </Protected>
        ),
      },
      {
        path: "/premium",
        element: (
          <Protected>
            <Premium />
          </Protected>
        ),
      },

      {
        path: "/services/:category/:id",
        loader: async () => await fetch("services.json"),
        element: (
          <Protected>
            <ServiceDetails />
          </Protected>
        ),
      },

      { path: "/register", element: <Register /> },

      {
        path: "/profile",
        element: (
          <Protected>
            <Profile />
          </Protected>
        ),
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },

  //
]);
export default router;
