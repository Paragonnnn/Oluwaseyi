import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={`flex gap-5 md:gap-8 items-center`}>
      <div className="h-44 md:h-64 md:w-52 rounded-2xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/drxjxycnn/image/upload/v1741739235/stories/1fb35a4580915fe57521687bfdc306901741739236497.jpg"
          alt=""
          className="h-44 md:h-64"
        />
      </div>
      <div className="flex flex-col py-5 max-w-[200px] h-44 md:h-64 justify-between">
        <h1 className="text-4xl md:text-7xl font-bold">Paragon.</h1>
        <div className="text-base md:text-2xl">
          <div>Oluwaloseyi</div>
          <div>Ogo boy</div>
        </div>
        <div>
          <ul className="flex gap-5 text-2xl md:text-4xl">
            <li>
              <Link
                to="https://github.com/Paragonnnn"
                target="_blank"
                className="outline-accent hover:text-accent focus:outline-2 cursor-pointer"
              >
                <FiGithub />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/oluwaseyi-abdullahi-hassan-972878216"
                target="_blank"
                className="outline-accent hover:text-accent focus:outline-2 cursor-pointer"
              >
                <FiLinkedin />
              </Link>
            </li>
            <li>
              <Link
                to="https://x.com/oluwaseyi__7"
                target="_blank"
                className="outline-accent hover:text-accent focus:outline-2"
              >
                <FiTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
