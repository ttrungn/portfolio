import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
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
      <div className="basis-3/4">
        <div className="text-lg font-medium transition-all">
          {props.company}
        </div>
        <div className="text-sm mb-2 font-medium transition-all">
          {props.title}
        </div>
        <div className="mb-2 text-surface-600">
          {props.startDate} - {props.endDate}
        </div>
        <div className="text-surface-600 mb-4">{props.description}</div>
        <div className="flex flex-row">
          {props.skills
            ? props.skills.map(function (object, index) {
                return (
                  <div
                    key={object}
                    className="bg-surface-400 py-1 px-3 rounded-full text-xs mr-2"
                  >
                    {object}
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
