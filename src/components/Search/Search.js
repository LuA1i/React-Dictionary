import React from 'react'
import searchIcon from '../../assets/images/icon-search.svg'
import playSound from '../../assets/images/icon-play.svg'

const Search = ({ input, data, setInput, handleSearch, loading, error }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <div className="w-full">
      <form onSubmit={onFormSubmit} className="relative">
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

      <div className="dark:text-white flex flex-col">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (
          <div className="flex flex-row justify-between items-center pt-10 sm:pt-20">
            <h1 className="text-3xl sm:text-5xl">
              {data[0]?.word || 'Word not found'}
            </h1>
            <img
              className="w-18 sm:w-24 cursor-pointer"
              src={playSound}
              alt="Play sound"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
