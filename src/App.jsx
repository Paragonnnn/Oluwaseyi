import { useContext, useState, useEffect } from "react";
import Header from "./components/Header";
import { ThemeContextProvider } from "./Context";
import { ThemeContext } from "./Context";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  // useEffect(() => {
  //   theme === "dark"
  //     ? (document.querySelector("body").style.backgroundColor = "#222222")
  //     : (document.querySelector("body").style.backgroundColor = "#f8f8f8");
  // }, [theme]);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark text-light" : " bg-light text-dark"
      }   mx-auto transition-colors duration-100 min-h-screen`}
    >
      <header
        className={`${
          theme === "dark"
            ? "border-dark-line bg-dark"
            : "border-line bg-light"
        } flex justify-center py-5 md:py-7 md:px-5 px-4 border-b sticky top-0`}
      >
        <Header />
      </header>
      <main className={`max-w-[1440px] mx-auto py-7 md:px-5 px-4`}>
        <Hero />
        <About />
        <Projects />
      </main>
      <footer
        className={`${
          theme === "dark"
            ? "border-dark-line"
            : "border-line"
        } py-5 md:py-7 md:px-5 px-4 text-center border-t`}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
