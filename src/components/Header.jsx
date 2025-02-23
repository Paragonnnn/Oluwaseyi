import React, { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../Context";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className=" flex justify-between items-center w-[1440px] m-auto">
      <Link to={"/"} className={`text-2xl font-semibold md:text-5xl focus:outline-accent`}>
        <span className=" text-accent text-3xl md:text-6xl">O</span>luwaseyi
      </Link>
      <section className="flex items-center gap-3">
        <ul className="flex gap-5 text-base md:text-2xl">
          <Link to={"#"} className=" hover:text-accent outline-accent focus:outline-2 px-1 md:px-2">
            Home
          </Link>
          <Link to={"#projects"} className=" hover:text-accent outline-accent focus:outline-2 px-1 md:px-2">
            Projects
          </Link>
          <Link to={"#"} className=" hover:text-accent outline-accent focus:outline-2 px-1 md:px-2">
            Stacks
          </Link>
        </ul>
        <button
          className={`${
            theme === "dark" ? "bg-gray-600/20 text-white" : "bg-gray-200/50 text-dark"
          } h-8 text-dark flex justify-center items-center text-2xl cursor-pointer w-8 rounded-full focus:outline-2 focus:outline-accent font-bold`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <div onClick={() => setTheme("light")}>
              <CiLight className="cursor-pointer" />
            </div>
          ) : (
            <div onClick={() => setTheme("dark")}>
              <CiDark className=" cursor-pointer" />
            </div>
          )}
        </button>
      </section>
    </div>
  );
};

export default Header;
