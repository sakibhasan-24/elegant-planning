import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import About from "../components/Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
export default router;
