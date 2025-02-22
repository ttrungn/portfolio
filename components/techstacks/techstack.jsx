import React from "react";
import TechStackItem from "./techstack-item";
import "devicon/devicon.min.css";

const TechStack = (props) => {
  return (
    <div data-section id="techstack" className="mb-16">
      <h2 className="text-xl mb-8 visible font-medium tracking-widest">
        Tech Stack
      </h2>
      <div className="mb-4">
        <h6 className="visible font-medium tracking-widest mb-2">Primary</h6>
        <div className="flex flex-wrap gap-4">
          {props.data.primary.map(function (object, index) {
            return <TechStackItem key={index} icon={object.icon} />;
          })}
        </div>
      </div>
      <div>
        <h6 className="visible font-medium tracking-widest mb-2">Additional</h6>
        <div className="flex flex-wrap gap-4">
          {props.data.additional.map(function (object, index) {
            return <TechStackItem key={index} icon={object.icon} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
