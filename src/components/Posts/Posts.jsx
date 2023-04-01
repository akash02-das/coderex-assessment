import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="my-8">
      {posts?.map((post) => (
        <div
          key={post.id}
          className="block max-w-5xl rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 my-5"
        >
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {post.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
