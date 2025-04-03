import React, { useState } from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      {/* Pass theme & toggleTheme as props */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="max-h-[90vh] w-full text-white pb-[4rem] bg-[#030014]">
        <Hero />
        <Search />
        <Movies />
      </main>
    </div>
  );
};

export default Home;
