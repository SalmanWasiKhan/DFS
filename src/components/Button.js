import React from "react";

function Button({ title, onClick, className, inverted }) {
  return (
    <button
      onClick={onClick}
      className={`${className} px-6 py-2 shadow-md transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ease-in-out ${
        inverted ? "bg-primary text-gray-50" : "bg-gray-50 text-primary"
      } font-semibold rounded-4xl`}
    >
      {title}
    </button>
  );
}

export default Button;
