import React from 'react';
import img from '../assets/hero.png';
import imgbg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section
      className="flex  justify-center items-center flex-col w-full"
      style={{
        backgroundImage: `url(${imgbg})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img src={img} className="w-[40%] object-cover" />
      <article>
        <h1 className="text-6xl max-w-[700px] w-full text-center font-bold py-4">
          Find <span className="text-[#BAA1FF]">Movies</span> You'll Enjoy
          Without the Hassle
        </h1>
      </article>
    </section>
  );
};

export default Hero;