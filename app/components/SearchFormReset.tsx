/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { use } from 'react'

const SearchFormReset = () => {

  const reset = () => {
    const form = document.querySelector(selector, ".search-form");
    HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <link href="/" className="search-btn text-white">
          X
      </link>
    </button>
  );
}


export default SearchFormReset