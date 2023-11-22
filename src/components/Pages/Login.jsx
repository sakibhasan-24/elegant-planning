import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-full mx-0 md:max-w-2xl lg:max-w-2xl md:mx-auto">
      <h1 className="text-center font-semibold text-gray-500 text-2xl my-6">
        Please Login
      </h1>
      <form className="shadow-2xl my-6 rounded-lg">
        <div className="flex flex-col gap-6 items-center justify-center ">
          <input
            className="w-full md:w-3/4 px-6 py-3 border-2 border-green-300 rounded-lg focus:border-blue-950"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
          <input
            className="w-full md:w-3/4 px-6 py-3 border-2 border-green-300 rounded-lg focus:border-blue-950"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="px-8 py-2 border-0 rounded-lg font-bold text-white bg-green-600 text-center mx-16 lg:mx-64 md:mx-64 my-6"
        />

        <button
          className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-md mx-auto my-4"
          type="button"
        >
          <FaGoogle className=" font-bold text-xl" />
          Sign In With Google
        </button>
        <p className="text-center font-bold">
          didn't register?
          <Link className="font-xl text-blue-800" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
