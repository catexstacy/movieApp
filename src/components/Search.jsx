import { useQuery } from '@tanstack/react-query';
import React, { useState, useRef } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const search = useRef();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['movies'],
    queryFn: () =>
      fetchData(
        `https://api.themoviedb.org/3/search/movie?query=${query.toLowerCase()}`,
      ),
  });

  async function updateSearch() {
    setQuery(search.current.value);
    refetch();
  }

  return (
    <form className="flex justify-center items-center w-full my-[2rem]">
      <input
        type="text"
        className="py-[1rem] px-[1.5rem] outline-0 border-0 w-full max-w-[800px] bg-[#0D0A20] rounded-lg"
        placeholder="search movies..."
        ref={search}
        onChange={updateSearch}
      />
    </form>
  );
};

export default Search;