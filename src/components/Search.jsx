import { useQuery } from "@tanstack/react-query";
import React, { useState, useRef, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import MovieCard from "./MovieCard";
import { fetchData } from "../libs/fetch";

const Search = () => {
  const [query, setQuery] = useState("");
  const search = useRef();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["movies", query],
    queryFn: async () => {
      if (!query) return { results: [] }; //helps avoid making empty requests
      return await fetchData(
        `https://api.themoviedb.org/3/search/movie?query=${query.toLowerCase()}`
      );
    },
    enabled: false, // stops query from autofetching on load
  });

  useEffect(() => {
    if (query) refetch();
  }, [query, refetch]);

  function updateSearch() {
    setQuery(search.current.value);
  }

  return (
    <section className="flex flex-col items-center w-full my-4">
      <form
        className="flex items-center m-w-[500px] mx-[10rem] justify-center p-4 mb-3 h-auto "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative w-full">
          <input
            type="text"
            className="py-[1rem] px-[3rem] outline-0 border-0 w-full bg-[#0D0A20] rounded-lg flex"
            placeholder="search movies..."
            ref={search}
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <SearchIcon size={20} />
          </span>
        </div>
        <button
          type="button"
          className="bg-amber-500 rounded-lg w-[70px] h-[3rem] ml-2 duration-300 hover:bg-amber-600 active:bg-amber-700"
          onClick={updateSearch}
        >
          Search
        </button>
      </form>
      //add a loading indicator and error message
      {isLoading && <p className="text-white mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">Something went wrong!</p>}
      //display search results as cards
      {data?.results?.length > 0 ? (
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.results.map((movie) => (
            <li key={movie.id} className="text-white">
              <MovieCard
                poster={movie.poster_path} // Ensure correct property is passed
                title={movie.title}
                rating={movie.vote_average}
                language={movie.original_language}
                release_year={movie.release_date?.split("-")[0]} // Extract year
              />
            </li>
          ))}
        </ul>
      ) : (
        !isLoading &&
        query && <p className="text-gray-400 mt-2">Movie not available</p>
      )}
    </section>
  );
};

export default Search;
