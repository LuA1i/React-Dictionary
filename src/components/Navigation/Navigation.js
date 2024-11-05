import React from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import '../../index.css'

import logoSvg from '../../assets/images/logo.svg'
import arrowDown from '../../assets/images/icon-arrow-down.svg'
import moonSvg from '../../assets/images/icon-moon.svg'

const Navigation = () => {
  return (
    <div className="flex flex-row justify-between w-screen h-fit pt-10">
      <div>
        <img src={logoSvg} alt="Logo" />
      </div>
      <div className="flex flex-row ">
        <p>Mono</p>
        <img className="h-4 w-4 pt-2 ml-3" src={arrowDown} alt="" />
        <div className="w-px h-8 bg-gray-300 mx-4"></div>
        <Toggle className="custom-toggle" />
        <img className="h-4 w-4 mt-1 ml-3" src={moonSvg} alt="" />
      </div>
    </div>
  )
}

export default Navigation
