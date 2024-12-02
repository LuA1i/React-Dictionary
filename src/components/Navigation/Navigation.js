import React, { useState } from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '../../index.css'

import logoSvg from '../../assets/images/logo.svg'
import arrowDown from '../../assets/images/icon-arrow-down.svg'
import moonSvg from '../../assets/images/icon-moon.svg'

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [font, setFont] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleToggle = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark', !darkMode)
  }

  const handleFontChange = (newFont) => {
    setFont(newFont)
    document.body.style.fontFamily = newFont === 'Mono' ? 'monospace' : 'serif'
    setDropdownOpen(false)
  }

  return (
    <div className="flex flex-row justify-between w-full h-fit pt-10">
      <div>
        <img src={logoSvg} alt="Logo" />
      </div>
      <div className="relative flex flex-row items-center dark:text-white">
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <p>{font}</p>
            <img className="h-4 w-4 pt-2 ml-1" src={arrowDown} alt="" />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-md">
              <ul className="py-1">
                <li
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleFontChange('Mono')}
                >
                  Mono
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleFontChange('Serif')}
                >
                  Serif
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="w-px h-8 bg-gray-300 mx-4"></div>
        <Toggle
          checked={darkMode}
          onChange={handleToggle}
          aria-checked={darkMode}
          icons={false}
          className="custom-toggle"
        />
        <img className="h-4 w-4 ml-2 dark:invert" src={moonSvg} alt="" />
      </div>
    </div>
  )
}

export default Navigation
