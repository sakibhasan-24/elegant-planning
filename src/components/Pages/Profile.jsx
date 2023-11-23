import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Spinner from "../Spinner";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Profile() {
  const { user, loading, updateUserProfile } = useContext(AuthContext);
  //   console.log(user?.displayName);

  const navigate = useNavigate();
  if (loading) {
    return <Spinner />;
  }
  const handleProfile = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const displayName = formData.get("name");
    const photoUrl = formData.get("photoURL");
    updateUserProfile(displayName, photoUrl)
      .then((data) => {
        toast.success("update Done   ");
        navigate("/");
      })
      .catch((e) => toast.error("something went Wrong!"));
  };
  return (
    <section className="max-w-xl mx-auto my-10 ">
      <h1 className="text-center">{user?.displayName} Profile</h1>
      <div className="border-4 border-green-500  text-center space-y-4 py-6 relative">
        <div className="absolute -top-12 -left-6 shadow-2xl rounded-full">
          <img
            src={user?.photoURL}
            className="rounded-full w-[80px] h-[80px] shadow-2xl"
            alt=""
          />
        </div>
        <h1 className="text-lg font-bold text-gray-700">
          {user?.displayName || "Please update your Profile"}
        </h1>
        <h1>{user?.email}</h1>
        <p>Hey i'm {user.displayName || "Please update your Profile"} .</p>
        <div className="flex items-center gap-2 justify-start">
          <p className="bg-green-900 px-4 py-2 rounded-md mx-2">
            👍 consultation wedding
          </p>
          <p className="bg-purple-900 px-4 py-2 rounded-md mx-2">
            🎉 entertainment
          </p>
        </div>
        <button>
          <Link className=" bg-blue-600  rounded-lg px-4 py-2 my-6" to="/">
            select More
          </Link>
        </button>
      </div>
      <form
        onSubmit={handleProfile}
        className="max-w-xl mx-auto shadow-lg px-4 my-6 flex flex-col gap-4 items-center"
      >
        <input
          className="w-full px-4 py-2 border-2 border-yellow-600 rounded-lg"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          className="w-full px-4 py-2 border-2 border-yellow-600 rounded-lg"
          type="text"
          name="photoURL"
          id="photoURL"
          placeholder="PhotoUrl"
        />
        <input
          type="submit"
          value="Update Profile"
          className="bg-green-600 font-bold my-6 px-4 py-2 rounded-md cursor-pointer"
        />
      </form>
    </section>
  );
}
