import React from "react";

function FormField({ type, placeholder, className }) {
  return (
    <div className={`${className} w-1/2 px-3 py-1`}>
      <input
        type={type}
        className={`px-5 py-3 border w-full border-gray-400 focus:outline-none rounded-4xl`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormField;
