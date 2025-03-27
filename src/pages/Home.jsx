import React from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    <main className="max-h-[90vh] w-full text-white pb-[4rem] bg-[#030014]">
      <Hero />
      <Search />
      <Movies />
    </main>
    </>
  );
};

export default Home;
