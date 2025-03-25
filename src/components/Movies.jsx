import React from 'react';
import MovieCard from './MovieCard';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../libs/fetch';

function Movies() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies'],
    queryFn: () =>
      fetchData(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc',
      ),
  });

  return (
    <section className="mt-[1.5rem] flex justify-center items-center">
      <section className="w-full max-w-[1200px]">
        <h4 className="text-3xl font-bold">All Movies</h4>
        {isLoading ? (
          <>
            <div className="my-[3rem] text-center ">loading.....</div>
          </>
        ) : (
          <>
            <article className="my-[1rem] w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
              {data?.results?.map((movie) => {
                return (
                  <MovieCard
                    poster={movie?.poster_path}
                    language={movie?.original_language}
                    rating={Number(movie?.vote_average || 0).toFixed(1)}
                    release_year={movie?.release_date.toString().split('-')[0]}
                    title={movie?.original_title}
                    key={movie?.id}
                  />
                );
              })}
            </article>
          </>
        )}
      </section>
    </section>
  );
}

export default Movies;