import React, { useContext } from "react";
import ReactJs from "../assets/ReactJs";
import Firebase from "../assets/Firebase";
import NodeJs from "../assets/NodeJs";
import TailwindCSS from "../assets/TailwindCSS";
import Express from "../assets/Express";
import Mongo from "../assets/Mongo";
import { BiArrowToRight } from "react-icons/bi";
import { ThemeContext } from "../Context";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const stackList = [
    "React",
    "TailwindCSS",
    "Firebase",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
  ];
  const stackIcons = [
    <ReactJs />,
    <TailwindCSS />,
    <Firebase />,
    <NodeJs />,
    <Express />,
    <Mongo />,
  ];
  const myProjects = [
    {
      title: "Parascore",
      link: "https://parascore.vercel.app",
      stack: [stackList[0], stackList[1], stackList[2]],
      description:
        "A real-time football score app that fetches live match data from an API and presents it in a clean, interactive UI.",
    },
    {
      title: "Lineup-Builder",
      link: "https://line-up-builder.vercel.app",
      stack: [
        stackList[0],
        stackList[1],
        stackList[3],
        stackList[4],
        stackList[5],
      ],
      description:
        "A Line-up builder that allows anyone build their dream team and share with people.",
    },
    {
      title: "Dreyxink",
      link: "https://dreyxinx.vercel.app",
      stack: [stackList[0], stackList[1]],
      description: "An e-commerce website.",
    },
    {
      title: "Starkk",
      link: "https://starkk.vercel.app",
      stack: [stackList[0], stackList[1]],
      description: "A story website",
    },
  ];

  return (
    <div id="projects" className=" mt-5">
      <h1 className=" text-4xl font-semibold mb-4">My Projects</h1>
      <div className=" px-2">
        {myProjects.map((project, index) => (
          <div key={project.link}>
            <h1 className=" text-2xl mb-4">
              {index + 1}. {project.title}
            </h1>
            <span className=" text-[20px]">Description: </span>
            <div className=" text-[16px] mb-2">{project.description}</div>
            <a
              href={project.link}
              target="_blank"
              className=" text-white px-3 py-1 rounded-[4px] bg-accent flex w-fit items-center gap-2 mb-4"
            >
              <span>See Project</span>
              <BiArrowToRight className="" />
            </a>
            <div className="flex gap-3 mb-4 flex-wrap">
              {project?.stack.map((stack, index) => (
                <span
                  key={`${stack} ${index}`}
                  className={`${
                    theme === "dark" ? "bg-gray-600/20" : "bg-gray-200/50"
                  } flex items-center  py-1 rounded-md px-2 gap-2`}
                >
                  <div className=" ">{stack}</div>
                  <div className=" h-7 flex items-center">
                    {stackIcons[stackList.indexOf(stack)]}
                  </div>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
