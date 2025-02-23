import React from "react";
import Image from "next/image";

const Socials = (props) => {
  return (
    <div className="flex flex-col flex-row items-center">
      <div className="flex flex-row mb-4">
        <a
          href={`mailto:${props.data.email}`}
          className="mr-10 transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-2 px-8 rounded flex flex-row justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <span className="pl-2">Get in touch</span>
        </a>
        <a
          target="_blank"
          href={props.data.resume}
          className="mr-10 transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-2 px-8 rounded flex flex-row justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-user"
          >
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M15 18a3 3 0 1 0-6 0" />
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
            <circle cx="12" cy="13" r="2" />
          </svg>
          <span className="pl-2">View My Resume</span>
        </a>
      </div>
      <div className="flex flex-row">
        <a
          href={props.data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-10 flex flex-row content-center justify-center"
        >
          <Image
            src="/logos/github-mark-white.png"
            alt="GitHub Logo"
            width={20}
            height={20}
            className="object-contain object-top mr-2"
          />
          <div className="">GitHub</div>
        </a>
        <a
          href={props.data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row content-center justify-center"
        >
          <Image
            src="/logos/linkedin-mark-white.png"
            alt="LinkedIn Logo"
            width={20}
            height={20}
            className="object-contain object-top mr-2"
          />
          <div className="">LinkedIn</div>
        </a>
      </div>
    </div>
  );
};

export default Socials;
