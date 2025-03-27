import React from 'react';
import svg from '../assets/star.svg';

function MovieCard({ poster, title, rating, language, release_year }) {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-[#0F0D23] display-grid">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt=""
        className="w-[100%] object-cover "
      />
      <h4 className="mt-[1rem] font-semibold">{title}</h4>
      <article className="flex mt-[.3rem] items-center gap-3">
        <div className="flex gap-1 items-center">
          <img src={svg} alt="" className="w-[15px] object-cover" />
          <h5 className="font-semibold">{rating}</h5>
        </div>
        <div className="w-[3px] h-[3px] bg-[#9CA4AB] rounded-full"></div>
        <div>
          <h5 className="font-semibold text-[#9CA4AB] capitalize">
            {language}
          </h5>
        </div>
        <div className="w-[3px] h-[3px] bg-[#9CA4AB] rounded-full"></div>
        <div>
          <h5 className="font-semibold text-[#9CA4AB]">{release_year}</h5>
        </div>
      </article>
    </div>
  );
}

export default MovieCard;