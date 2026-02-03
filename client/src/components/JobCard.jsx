import { useState } from "react";

function JobCard(props) {
  return (

    <div className="bg-white shadow-md rounded p-3">
        {(props.info).map((data) => (
          <div
            key={data.id}
            // grid-cols-[70%_25%_5%] : Portion of every element in the div
            // shadow-md hover:shadow-[0_0_6px_1px_rgba(59,130,246,0.3)] : Sets a shadow on  mouse hove [(x)_(y)_(size)_(spread)_rgba(r,g,b,opacity)]
            className="grid grid-cols-[70%_25%_5%] bg-white border border-gray-200 rounded-md my-2 p-2 hover:shadow-[0_0_6px_1px_rgba(59,130,246,0.3)]"
          >
            <div className="mx-2">
              <strong>{data.company_name}</strong> | {data.position}
            </div>
            <div className="mx-2 text-center px-3 py-0.5 text-blue-500 font-semibold bg-blue-100 rounded-md">
              {data.status}
            </div>
            <div className="mx-2 text-center">❌</div>
          </div>
        ))}
      </div>
  );
}

export default JobCard;
