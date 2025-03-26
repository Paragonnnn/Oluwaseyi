import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="text-xl sm:text-2xl leading-12 mt-10 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className=" text-3xl font-bold">About Me</h2>
      <div className=" w-[100px] rounded-r-full mt-2 h-[3px] bg-accent"></div>
      <p>
        I’m a frontend developer with a strong passion for creating interactive
        and user-friendly web applications. With experience in HTML, CSS,
        JavaScript, React, TailwindCSS, and more, I focus on building seamless
        digital experiences. When I'm not coding, I love exploring new web
        trends, contributing to open-source projects, and continuously learning
        to improve my craft.
      </p>
    </motion.section>
  );
};

export default About;
