import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-200 hover:bg-gray-400  px-5 py-2 m-4 rounded">
        {name}
      </button>
    </div>
  );
};

export default Button;
