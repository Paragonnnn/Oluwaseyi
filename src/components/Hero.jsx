import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className={`flex gap-5 md:gap-8 items-center`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="h-44 md:h-64 md:w-52 w-36 rounded-2xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/drxjxycnn/image/upload/v1741739235/stories/1fb35a4580915fe57521687bfdc306901741739236497.jpg"
          alt=""
          className="h-44 md:h-64"
        />
      </div>
      <div className="flex flex-col py-5 max-w-[200px] h-44 md:h-64 justify-between">
        <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold">Paragon.</h1>
        <div className="text-base md:text-2xl">
          <div>Oluwaloseyi</div>
          <div>Ogo boy</div>
        </div>
        <div>
          <ul className="flex gap-5 text-2xl md:text-4xl items-center">
            <li>
              <Link
                to="https://github.com/Paragonnnn"
                target="_blank"
                className="outline-accent hover:text-accent focus:outline-2 cursor-pointer"
              >
                <FiGithub className="text-xl sm:text-2xl"/>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/oluwaseyi-abdullahi-hassan-972878216"
                target="_blank"
                className="outline-accent hover:text-accent focus:outline-2 cursor-pointer"
              >
                <FiLinkedin className="text-xl sm:text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                to="https://x.com/oluwaseyi__7"
                target="_blank"
                className="outline-accent hover:text-accent focus:outline-2"
              >
                <FiTwitter className="text-xl text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
