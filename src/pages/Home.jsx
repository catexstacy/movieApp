import React from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <main className="min-h-[100vh] w-full text-white pb-[4rem] bg-[#030014]">
      <Hero />
      <Search />
      <Movies />
    </main>
  );
};

export default Home;
