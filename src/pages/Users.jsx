import React from "react";
import { useNavigate } from "react-router-dom";

import useUsers from "../hooks/useUsers";

const Users = () => {
  const { data, loading, error } = useUsers();
  const users = data && data.users;
  const navigate = useNavigate();

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

  return (
    <div className="w-full h-auto mt-20">
      <h1 className="text-3xl mb-2">All Users List</h1>

      <div
        className="overflow-auto rounded-lg shadow"
        style={{ height: "75vh" }}
      >
        <table className="w-full">
          <thead className="bg-gray-800 border-b-2 border-gray-200 sticky top-0">
            <tr>
              <th className="p-5 text-sm font-semibold tracking-wide text-left text-white">
                No.
              </th>
              <th className="p-5 text-sm font-semibold tracking-wide text-left text-white">
                Name
              </th>
              <th className="p-5 text-sm font-semibold tracking-wide text-left text-white">
                Email
              </th>
              <th className="p-5 text-sm font-semibold tracking-wide text-left text-white">
                Company
              </th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user) => {
              const {
                id,
                firstName,
                lastName,
                email,
                company: { name },
              } = user;

              return (
                <tr
                  onClick={() => {
                    navigate(`/users/${id}/posts`);
                  }}
                  key={id}
                  className="bg-gray-50 hover:bg-gray-200"
                >
                  <td className="p-5 text-sm text-gray-700 whitespace-nowrap">
                    {id}
                  </td>
                  <td className="p-5 text-sm text-gray-700 whitespace-nowrap hover:underline cursor-pointer hover:text-indigo-600">{`${firstName} ${lastName}`}</td>
                  <td className="p-5 text-sm text-gray-700 whitespace-nowrap">
                    {email}
                  </td>
                  <td className="p-5 text-sm text-gray-700 whitespace-nowrap">
                    {name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
