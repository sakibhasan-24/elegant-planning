import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { FaUserAlt } from "react-icons/fa";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  // const image if not found

  const handleLogOut = () => {
    logOut()
      .then((user) => {
        if (user) toast.success(user.displayName + "logOut");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  // console.log("nav", user);
  const handleMoveRoute = (route) => {
    if (location.pathname === route) return true;
  };
  return (
    <nav className="flex flex-col lg:flex-row md:flex-row  items-center justify-between py-2  ">
      <div className="mx-6 font-extrabold">
        <Link
          className={`font-navText text-2xl ${
            handleMoveRoute("/") && "text-3xl"
          }`}
          to="/"
        >
          elegant<span className="text-orange-600 text-4xl">P</span>lanning
        </Link>
      </div>
      <div className="space-x-2 flex-wrap  md:space-x-6 flex w-full   justify-evenly  items-center mt-6  md:mt-0 md:justify-end mx-4 font-bold">
        <Link
          className={`hover:bg-yellow-950 hover:rounded-md hover:text-white hover:px-4 hover:py-1 transition-all duration-300`}
          to="/About"
        >
          About
        </Link>
        {/* condition based on Login */}
        {user ? (
          <>
            <Link
              className={`hover:bg-yellow-950 hover:rounded-md hover:text-white hover:px-4 hover:py-1 transition-all duration-300 ${
                handleMoveRoute("/profile") &&
                "bg-purple-900 px-2 font-extrabold"
              }`}
              to="/profile"
            >
              Profile
            </Link>
            <Link
              className={`  ${
                handleMoveRoute("/profile") &&
                "bg-purple-900 px-2 font-extrabold"
              }`}
              to="/profile"
            >
              {user?.photoURL ? (
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={user.photoURL}
                  alt="photo"
                />
              ) : (
                <FaUserAlt />
              )}
            </Link>
            <button onClick={handleLogOut}>
              <Link
                className={`hover:bg-yellow-950 hover:rounded-md hover:text-white hover:px-4 hover:py-1 transition-all duration-300 ${
                  handleMoveRoute("/login") &&
                  "bg-purple-900 px-2 font-extrabold"
                }`}
                to="/login"
              >
                Logout
              </Link>
            </button>
          </>
        ) : (
          <>
            <Link
              className={`hover:bg-yellow-950 hover:rounded-md hover:text-white hover:px-4 hover:py-1 transition-all duration-300 ${
                handleMoveRoute("/login") && "bg-purple-900 px-2 font-extrabold"
              }`}
              to="/login"
            >
              Login
            </Link>
            <Link
              className={`hover:bg-yellow-950 hover:rounded-md hover:text-white hover:px-4 hover:py-1 transition-all duration-300 ${
                handleMoveRoute("/register") &&
                "bg-purple-900 px-2 font-extrabold"
              }`}
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
