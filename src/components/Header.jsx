import React, { useContext, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../Context";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-[1440px] m-auto">
      <Link
        to={"/"}
        className={`text-2xl font-semibold md:text-5xl focus:outline-accent`}
      >
        <span className="text-accent text-3xl md:text-6xl">O</span>luwaseyi
      </Link>
      <section className="flex items-center gap-3">
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:hidden ${
            theme === "dark" ? "bg-dark" : "bg-light"
          } flex-col absolute top-16 w-full text-center right-0 gap-5 text-base md:text-2xl transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <Link
            to={"#"}
            className="hover:text-accent outline-accent focus:outline-2 px-1 md:px-2"
          >
            Home
          </Link>
          <Link
            to={"#projects"}
            className="hover:text-accent outline-accent focus:outline-2 px-1 md:px-2"
          >
            Projects
          </Link>
          <Link
            to={"#"}
            className="hover:text-accent outline-accent focus:outline-2 px-1 md:px-2"
          >
            Stacks
          </Link>
        </ul>
        <ul className="sm:block hidden right-4 gap-5 text-base md:text-2xl">
          <Link
            to={"#"}
            className="hover:text-accent outline-accent focus:outline-2 px-1 md:px-2"
          >
            Home
          </Link>
          <Link
            to={"#projects"}
            className="hover:text-accent outline-accent focus:outline-2 px-1 md:px-2"
          >
            Projects
          </Link>
          <Link
            to={"#"}
            className="hover:text-accent outline-accent focus:outline-2 px-1 md:px-2"
          >
            Stacks
          </Link>
        </ul>
        <button
          className={`${
            theme === "dark"
              ? "bg-gray-600/20 text-white"
              : "bg-gray-200/50 text-dark"
          } h-8 text-dark flex justify-center items-center text-2xl cursor-pointer w-8 rounded-full focus:outline-2 focus:outline-accent font-bold`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <div onClick={() => setTheme("light")}>
              <CiLight className="cursor-pointer" />
            </div>
          ) : (
            <div onClick={() => setTheme("dark")}>
              <CiDark className="cursor-pointer" />
            </div>
          )}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-accent focus:outline-2 rounded-2xl text-2xl p-[2px] cursor-pointer sm:hidden block"
        >
          <HiOutlineMenu />
        </button>
      </section>
    </div>
  );
};

export default Header;
