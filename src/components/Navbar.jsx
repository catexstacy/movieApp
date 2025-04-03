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
    <section className="m-0 box-border px-8 font-serif flex justify-between items-center bg-gray-300 text-black"> 
    <nav className="flex justify-between text-center px-6 py-4">
         <img src={logoDark} alt="" className='w-10 h-auto' />
         <ul className=' mb-[20px] flex space-x-6 text-lg text-center px-[20px] justify-between'>
          <li className='cursor-pointer hover:text-yellow-400'>Home</li>
          <li className='cursor-pointer hover:text-gray-400'>Movies</li>
          <li className='cursor-pointer hover:text-gray-400'>Trending</li>
          <li className='cursor-pointer hover:text-gray-400' >Kids Shows</li>
          <li className='cursor-pointer hover:text-gray-400'>About</li>
         </ul>
      </nav>
      <div className="flex justify-between items-center px-[10px]">
        <input type="text" className=" bg-blue-400 rounded-lg px-4 py-2 border-0 outline-0 text-lg" placeholder='search' />
        <img src={searchB} alt="" className="w-10 h-auto cursor-pointer p-2" />
  
      </div>
      <div className="">
      <img src={nightImg} alt="" className="w-10 h-auto cursor-pointer" />
      </div>
    </section>
    </>
  )
}

export default Navbar
