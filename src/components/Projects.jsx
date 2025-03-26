import React, { useContext } from "react";
import ReactJs from "../assets/ReactJs";
import Firebase from "../assets/Firebase";
import NodeJs from "../assets/NodeJs";
import TailwindCSS from "../assets/TailwindCSS";
import Express from "../assets/Express";
import Mongo from "../assets/Mongo";
import { BiArrowToRight } from "react-icons/bi";
import { ThemeContext } from "../Context";
import { motion, useInView } from "framer-motion";
import Html from "../assets/Html";
import CSS from "../assets/CSS";
import Javascript from "../assets/Javascript";
import Typescript from "../assets/Typescript";
import ReactQuery from "../assets/ReactQuery";

export const stackList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "TailwindCSS",
  "React Query",
  "Firebase",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
];
export const stackIcons = [
  <Html />,
  <CSS />,
  <Javascript />,
  <ReactJs />,
  <Typescript />,
  <TailwindCSS />,
  <ReactQuery />,
  <Firebase />,
  <NodeJs />,
  <Express />,
  <Mongo />,
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const myProjects = [
    {
      title: "Parascore",
      link: "https://parascore.vercel.app",
      github_link: "https://github.com/Paragonnnn/Livescore_App",
      stack: [stackList[0], stackList[1], stackList[2]],
      description:
        "A real-time football score app that fetches live match data from an API and presents it in a clean, interactive UI.",
    },
    {
      title: "Lineup-Builder",
      link: "https://line-up-builder.vercel.app",
      github_link: "https://github.com/Paragonnnn/lineup-builder",
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
      github_link: "https://github.com/Paragonnnn/dreyxinx",
      stack: [stackList[0], stackList[1], stackList[2], stackList[3]],
      description: "An e-commerce website.",
    },
    {
      title: "Starkk",
      link: "https://starkk.vercel.app",
      github_link: "https://github.com/Paragonnnn/Stark",
      stack: [stackList[0], stackList[1]],
      description: "A story website",
    },
  ];

  return (
    <motion.div
      id="projects"
      className=" mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className=" text-4xl font-semibold mb-4">My Projects</h1>
      <div className=" w-[100px] rounded-r-full mt-2 h-[3px] bg-accent"></div>

      <div className=" px-2">
        {myProjects.map((project, index) => (
          <div key={project.link} className="mt-6">
            <h1 className=" text-2xl mb-4">
              {index + 1}. {project.title}
            </h1>
            <span className=" text-[20px]">Description: </span>
            <div className=" text-[16px] mb-2">{project.description}</div>
            <div className="flex gap-3">
              <a
                href={project.link}
                target="_blank"
                className={`${theme === 'dark' ? 'text-white' : 'text-dark'} px-3 py-1 rounded-[4px] outline-accent outline-1 hover:bg-accent hover:text-white transition-colors duration-200 flex w-fit items-center gap-2 mb-4`}
              >
                <span>See Project</span>
                <BiArrowToRight className="" />
              </a>
              <a
                href={project.github_link}
                target="_blank"
                className={`${theme === 'dark' ? 'text-white' : 'text-dark'} px-3 py-1 rounded-[4px] outline-1 outline-accent hover:bg-accent hover:text-white transition-colors duration-200 flex w-fit items-center gap-2 mb-4`}
              >
                <span>See Source code</span>
                <BiArrowToRight className="" />
              </a>
            </div>
            <div className="flex gap-3 mb-4 flex-wrap">
              {project?.stack.map((stack, index) => (
                <span
                  key={`${stack} ${index}`}
                  className={`${
                    theme === "dark" ? "bg-gray-500/20" : "bg-gray-300/50"
                  } flex items-center  py-[6px] rounded-md px-3 gap-2`}
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
    </motion.div>
  );
};

export default Projects;
