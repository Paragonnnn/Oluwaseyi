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
      }   mx-auto transition-colors duration-300 min-h-screen`}
    >
      <header
        className={`${
          theme === "dark"
            ? "border-line/20 bg-dark"
            : "border-line/100 bg-light"
        } flex justify-center py-5 md:py-7 md:px-5 px-4 border-b  border-opacity-10 sticky top-0 transition-colors duration-300`}
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
            ? "border-line/20 bg-dark"
            : "border-line/100 bg-light"
        } py-5 md:py-7 md:px-5 px-4 text-center border-t  border-opacity-10`}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
