import React from "react";

function VolunteeringItem(props) {
  return (
    <div className="group flex flex-row items-center mb-4 p-5 transition-all bg-background hover:bg-surface-200">
      <div className="mr-4 flex-shrink-0">
        {props.logo && (
          <img
            src={props.logo}
            className="w-20 h-20 object-cover rounded-full border border-gray-700 shadow-sm"
          />
        )}
      </div>
      <div className="basis-3/4 flex flex-col">
        <div className="text-lg font-medium transition-all">
          {props.event} at {props.position}
        </div>
        <div className="text-sm mb-4 flex flex-row items-center">
          <span>{props.organisation}</span>
        </div>
        <div className="text-sm text-surface-600 font-medium mb-4 transition-all">
          {props.startDate} {checkEndDate(props)}
        </div>
        <div className="text-surface-600">{props.description}</div>
      </div>
    </div>
  );
}

function checkEndDate(props) {
  if (!props.endDate) {
    return "";
  } else {
    return "- " + props.endDate;
  }
}

export default VolunteeringItem;
