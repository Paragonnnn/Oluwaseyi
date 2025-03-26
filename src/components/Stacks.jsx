import React, { useContext } from "react";
import { stackList, stackIcons } from "./Projects";
import { ThemeContext } from "../Context";
import { motion } from "framer-motion";

const Stacks = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-10"
    >
      <h2 className=" text-3xl font-bold">My Stack</h2>
      <div className=" w-[100px] rounded-r-full mt-2 h-[3px] bg-accent"></div>
      <div className="flex gap-4 flex-wrap mt-4 justify-between md:justify-start  md:w-2xl lg:w-4xl xl:w-6xl m-auto">
        {stackList.map((stack, index) => (
          <div
            key={index}
            className={`${
              theme === "dark" ? "bg-gray-500/20" : "bg-gray-200/50"
            } flex flex-col items-center gap-2 mt-4 py-1 w-full sm:w-[200px] rounded-2xl`}
          >
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              {stackIcons[index]}
            </div>
            <div className="text-center max-w-[150px] overflow-hidden truncate">
              <span className="text-base sm:text-xl">{stack}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Stacks;
