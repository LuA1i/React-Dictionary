import React from 'react'
import playSound from '../../assets/images/icon-play.svg'

const InfoDisplay = ({ data, loading, error }) => {
  if (loading) return <p>Loading...</p>
  if (!data)
    return <p className="dark:text-white">Enter A Word To See Its Definition</p>
  return (
    <div className="dark:text-white">
      {data && (
        <div className="dark:text-white flex flex-row justify-between items-center pt-10 sm:pt-20 duration-500">
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
      <div className="flex flex-col justify-start h-full w-fit">
        {data && (
          <p className="text-customPurple">
            {data[0]?.phonetics[0]?.text || 'Phonetics Unavailable'}
          </p>
        )}
      </div>
      <div className="flex flex-col justify-start h-full w-full pt-10">
        {data && (
          <div className="flex items-center">
            <p className="font-bold">{data[0]?.meanings[0]?.partOfSpeech}</p>
            <div className="ml-4 w-full h-px bg-gray-500"></div>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-start h-full w-fit pt-10">
        {data && (
          <div>
            <p className="text-left">Meaning</p>
            <ul className="list-disc text-sm md:lg:text-md lg:text-lg marker:text-customPurple text-left pl-5 ml-5 mt-2">
              {data[0]?.meanings[0]?.definitions
                .slice(0, 3)
                .map((definition, index) => (
                  <li key={index}>
                    {definition.definition || 'Defintion Unavailable'}
                  </li>
                ))}
            </ul>
            <p className="text-left pt-10 text-gray-500">
              <em>Synonyms</em>{' '}
              <span className="text-customPurple font-semibold ml-4">
                {data[0]?.meanings[0]?.synonyms || 'No synonyms'}
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-start h-full w-full pt-10">
        {data && (
          <div className="flex items-center">
            <p className="font-bold">{data[0]?.meanings[1]?.partOfSpeech}</p>
            <div className="ml-4 w-full h-px bg-gray-500"></div>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-start h-full w-fit pt-10">
        {data && (
          <div>
            <p className="text-left">Meaning</p>
            <ul className="list-disc text-sm md:lg:text-md lg:text-lg marker:text-customPurple text-left pl-5 ml-5 mt-2">
              <li>{data[0]?.meanings[1]?.definitions[0]?.definition}</li>
              <li className="list-none text-gray-400">
                "{data[0]?.meanings[1]?.definitions[0]?.example || 'None'}"
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default InfoDisplay
