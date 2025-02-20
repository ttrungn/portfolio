import React from "react";
import TechStackItem from "./techstack-item";
import "devicon/devicon.min.css";

const TechStack = (props) => {
  return (
    <div data-section id="techstack" className="mb-16">
      <h2 className="text-xl mb-8 visible font-medium tracking-widest">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-4">
        {props.data.map(function (object, index) {
          return (
            <TechStackItem
              key={`${object.position}+${object.startDate}`}
              icon={object.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
