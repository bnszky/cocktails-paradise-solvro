import React from 'react'
import { Button } from '../ui/button';
import { images } from '@/constants/images';

function Intro() {
  return (
    <div className="w-full h-screen flex">
      <div className="flex flex-col lg:flex-row w-full justify-center items-center bg-black text-white">
        <div className="w-full lg:w-1/2 justify-center items-start px-20 my-4 flex flex-col text-left text-2xl lg:text-4xl space-y-4">
          <h1>Otwórz oczy razem z <span className="text-primary font-semibold">Cocktail Paradise</span></h1>
          <h2>I odkryj swój raj pośród</h2>
          <h3><span className="text-primary font-semibold">MILIONA</span> ofert</h3>
          <Button size="lg" className="text-lg my-10 font-semibold">Zamów teraz</Button>
        </div>
        <div className="relative w-full lg:w-1/2 bg-black h-full justify-center items-center flex overflow-hidden">
          <img src={images.background1} alt="juice" className="absolute shadow-xl h-180 w-full lg:shadow-white lg:h-240 -bottom-50 -right-10 rounded p-4 object-contain" />
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default Intro
