import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '@/context/ThemeProvider'

function WavesNavbarShape() {

    const location = useLocation()
    const { isDarkTheme } = useTheme()

  return (
    <div className="h-10 w-full overflow-hidden bg-primary-foreground">
      <svg
          className="absolute bottom-0 w-full h-12"
          viewBox="0 0 500 10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
      >
          <path
          fill={`${location.pathname === '/' ? 'black' : isDarkTheme ? 'black' : 'white'}`}
          fillOpacity="1"
          d="M0,5 C80,0 200,10 300,5 C400,0 500,10 500,5 L500,10 L0,10 Z"
          ></path>
      </svg>
    </div>
  )
}

export default WavesNavbarShape
