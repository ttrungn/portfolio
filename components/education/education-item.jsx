import React from "react";

function EducationItem(props) {
  return (
    <div className="group flex flex-row items-center mb-4 p-5 transition-all bg-background hover:bg-surface-200">
      {/* Image container */}
      <div className="mr-4 flex-shrink-0">
        {props.imageSrc && (
          <img
            src={props.imageSrc}
            className="w-20 h-20 object-cover rounded-full border border-gray-700 shadow-sm"
          />
        )}
      </div>
      <div className="basis-3/4">
        <div className="text-lg font-medium transition-all">
          {props.subject} ({props.degree})
        </div>
        <div className="text-sm font-medium mb-4 transition-all">
          {props.university} | {props.startDate} {checkEndDate(props)}
        </div>
        <div className="text-surface-600 mb-4">
          {props.honors.map((honor, index) => (
            <p key={index}>{honor}</p>
          ))}
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

export default EducationItem;
