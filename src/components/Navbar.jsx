import React from 'react';
import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo-dark.png';
import dayImg from '../assets/day.png';
import nightImg from '../assets/night.png';
import searchW from '../assets/search-w.png';
import searchB from '../assets/search-b.png';





function Navbar() {
  return (
    <>
    <section className="m-0 box-border p-4 font-serif flex justify-between items-center bg-gray-900 text-white"> 
    <nav className="flex justify-between text-center px-6 py-4">
         <img src={logoDark} alt="" className='w-[100px] h-auto' />
         <ul className=' mx-[2rem] flex space-x-6 text-lg'>
          <li className='cursor-pointer hover:text-yellow-400'>Home</li>
          <li className='cursor-pointer hover:text-gray-400'>Movies</li>
          <li className='cursor-pointer hover:text-gray-400'>Trending</li>
          <li className='cursor-pointer hover:text-gray-400' >Kids Shows</li>
          <li className='cursor-pointer hover:text-gray-400'>About</li>
         </ul>
      </nav>
      <div className="flex justify-between px-[3rem] align-middle">
        <input type="text" className=" bg-blue-400 rounded-lg px-4 py-2" placeholder='search' />
        <img src={searchB} alt="" className="w-6 h-auto cursor-pointer" />
  
      </div>
      <div className="">
      <img src={nightImg} alt="" className="w-6 h-auto cursor-pointer" />
      </div>
    </section>
    </>
  )
}

export default Navbar
