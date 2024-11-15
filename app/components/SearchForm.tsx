import React from 'react'
import SearchFormReset from './SearchFormReset';


const SearchForm = () => {
  const query = "test";
  
  
  
  
  return (
    <form action="/" onScroll={false} className='search-form'>
      <input
        name='query'
        defaultValue={query}
        className='search-input'
        placeholder='Search Startups'
      />

      <div className='flex gap-2'>
        {query && <SearchFormReset />}
      </div>

    </form>
  )
}

export default SearchForm