import React from "react";

export default function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className=" rotate text-5xl
        decoration-3 mb-5 text-stone-900 text-center dark:text-white bg-gradient-to-r from-blue-800 via-blue-700 to-green-600
        text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-blue-700 dark:via-blue-300 dark:to-green-400 text-gradient"
    >{children}</h1>
  );
}
