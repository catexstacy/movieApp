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
    <form className="flex items-center m-w-[500px] my-[2rem] justify-between">
      <input
        type="text"
        className="py-[1rem] px-[1rem] outline-0 border-0 w-full max-w-[800px] bg-[#0D0A20] rounded-lg mx"
        placeholder="search movies..."
        ref={search}
        onChange={updateSearch}
      />
      <button  className='bg-blue rounded-lg'>Search</button>
    </form>
  );
};

export default Search;