import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
  return (
    <div className="lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto">
      <div className="">
        <h1 className="text-5xl subpixel-antialiased tracking-wide">
          {props.data.name}
        </h1>
        <h2 className="text-surface-600 pt-2 text-base font-normal tracking-wider">
          {props.data.headline}
        </h2>
        <div className="flex justify-center mt-6">
          {props.data.avatar && (
            <img
              src={props.data.avatar}
              alt="Avatar"
              className="w-64 h-64 rounded-full object-cover shadow-xl"
            />
          )}
        </div>
      </div>
      <Navigation></Navigation>
      <Socials data={props.data.socials}></Socials>
    </div>
  );
};

export default Header;
