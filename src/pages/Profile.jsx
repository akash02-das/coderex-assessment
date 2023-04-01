import React from "react";
import useUser from "../hooks/useUser";

const Profile = () => {
  const { data, loading, error } = useUser();
  const posts = data && data.posts;

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    console.log(error);
  }

  return <div>Profile</div>;
};

export default Profile;
