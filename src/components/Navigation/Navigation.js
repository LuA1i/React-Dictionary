import React, { useState } from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '../../index.css'

import logoSvg from '../../assets/images/logo.svg'
import arrowDown from '../../assets/images/icon-arrow-down.svg'
import moonSvg from '../../assets/images/icon-moon.svg'

const Navigation = () => {
  const [darkMode, SetDarkMode] = useState(false)

  const handleToggle = () => {
    SetDarkMode(!darkMode)
    document.body.classList.toggle('dark', !darkMode)
  }
  return (
    <div className="flex flex-row justify-between w-full h-fit pt-10 ">
      <div>
        <img src={logoSvg} alt="Logo" />
      </div>
      <div className="flex flex-row items-center dark:text-white">
        <p>Mono</p>
        <img className="h-4 w-4 pt-2 ml-3 " src={arrowDown} alt="" />
        <div className="w-px h-8 bg-gray-300 mx-4"></div>
        <Toggle
          checked={darkMode}
          onChange={handleToggle}
          aria-checked={darkMode}
          icons={false}
          className="custom-toggle"
        />
        <img className="h-4 w-4 ml-2 dark:invert " src={moonSvg} alt="" />
      </div>
    </div>
  )
}

export default Navigation
