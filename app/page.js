import React from "react";
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Volunteering from "@/components/volunteering/volunteering";
import Projects from "@/components/projects/projects";
import Credits from "@/components/credits";
import { promises as fs } from "fs";
import TechStack from "@/components/techstacks/techstack";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/public/translations/en.json",
    "utf-8"
  );
  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-6 lg:px-24">
      <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header data={data.general}></Header>
        <div className="lg:pl-[50%]">
          <About data={data.general}></About>
          <TechStack data={data.techstack}></TechStack>
          <Education data={data.education}></Education>
          <Experiences data={data.experiences}></Experiences>
          <Volunteering data={data.volunteering}></Volunteering>
          <Projects data={data.projects}></Projects>
          <Credits data={data.general}></Credits>
        </div>
      </div>
    </main>
  );
}
