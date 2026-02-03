import { useState } from "react";

function Input(props) {
  return (
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for={props.for}
      >
        {props.label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        placeholder={props.label}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  );
}

export default Input;
