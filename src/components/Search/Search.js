import React from 'react'
import searchIcon from '../../assets/images/icon-search.svg'

const Search = ({ input, data, setInput, handleSearch, loading, error }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <div className="w-full">
      <form onSubmit={onFormSubmit} className="relative mt-10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mt-14 dark:bg-gray-800 dark:text-white rounded-lg pl-2 py-3 w-full focus:outline-none focus:border-customPurple focus:ring-2 focus:ring-customPurple focus:shadow-sm focus:shadow-customPurple"
          type="text"
          placeholder="Search"
        />
        <img
          onClick={handleSearch}
          className="absolute right-3 top-20 transform -translate-y-1/2 h-5 w-5 cursor-pointer"
          src={searchIcon}
          alt="Search"
        />
      </form>
    </div>
  )
}

export default Search
