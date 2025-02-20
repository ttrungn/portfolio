import React from "react";
import EducationItem from "./education-item";

const Education = (props) => {
  return (
    <div data-section id="education" className="mb-16">
      <h2 className="text-xl mb-8 visible font-medium tracking-widest">
        Education
      </h2>
      {props.data.map(function (object, index) {
        return (
          <EducationItem
            key={`${object.subject}+${object.startDate}`}
            subject={object.subject}
            degree={object.degree}
            university={object.university}
            href={object.href}
            startDate={object.startDate}
            endDate={object.endDate ? object.endDate : ""}
            description={object.description}
            honors={object.honors}
            imageSrc={object.imageSrc}
          />
        );
      })}
    </div>
  );
};

export default Education;
