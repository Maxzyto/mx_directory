import React from 'react'
import SearchFormReset from './SearchFormReset';


const SearchForm = () => {
  const query = "test";
  
  
  
  
  return (
    <form action="/" scroll={false} className='search-form'>
      <input
        name='query'
        defaultValue={query}
        className='search-input'
        placeholder='Search Startups'
      />

      <div className='flex gap-2'>
        {query && <SearchFormReset />}

        <button type='submit' className='search-btn text-white'>
          S
        </button>
      </div>

    </form>
  )
}

export default SearchForm