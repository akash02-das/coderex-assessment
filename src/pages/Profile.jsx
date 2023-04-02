import React from "react";

import Loader from "../components/Loader/Loader";
import Posts from "../components/Posts/Posts";
import useUser from "../hooks/useUser";

const Profile = () => {
  const { data, loading, error, user } = useUser();
  const posts = data && data.posts;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="w-full min-h-screen mt-10">
      <div>
        <h2 className="text-lg sm:text-3xl text-blue-800 mb-5">
          <i className="fa-solid fa-user-tie mr-3"></i>{" "}
          {!user ? "" : `${user?.firstName} ${user?.lastName}`}
        </h2>
        <p className="text-md sm:text-xl">
          <i className="fa-solid fa-envelope mr-3"></i>{" "}
          {!user ? "" : user.email}
        </p>
        <p className="text-md sm:text-xl mt-5">
          <i className="fa-solid fa-landmark mr-3"></i>{" "}
          {!user ? "" : user.company.name}
        </p>
      </div>

      <div className="w-60 sm:w-96 border border-solid border-gray-400 my-10"></div>

      <div className="flex items-center text-lg sm:text-2xl">
        <i className="fa-solid fa-user-pen mr-3"></i>
        <h1>{!user ? "" : `${user?.firstName}'s all posts`}</h1>
      </div>

      <Posts posts={posts} />
    </div>
  );
};

export default Profile;
