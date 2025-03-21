import React from 'react'
import { Button } from '../ui/button';
import { images } from '@/constants/images';
import { Instagram } from "lucide-react";

function AboutUs() {
  return (
    <div className="w-full h-200 md:h-screen flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full text-left flex flex-col lg:w-1/2 p-10 space-y-4">
        <h1 className="text-primary text-3xl font-bold">About Us</h1>
        <p className="text-lg text-accent-foreground">
          Ut felis ex, iaculis sed massa id, condimentum suscipit justo. Nulla facilisi. Donec ultrices arcu at dictum posuere. Vivamus iaculis ante vel massa interdum, nec ultricies tellus dignissim. Donec leo lacus, aliquet sed fringilla id, sagittis non massa. Ut iaculis bibendum ullamcorper. Cras eget sapien nulla. Quisque enim augue, semper euismod suscipit id, commodo eget dolor. Nunc sodales, leo at viverra pulvinar, mi libero lacinia diam, eu varius erat urna nec felis. Nunc non blandit mauris, quis feugiat urna. Curabitur in turpis vehicula, ornare massa ac,
        </p>
        <Button size="sm" variant={"outline"} className="rounded-full text-lg my-2 py-4 font-semibold w-48">
          <Instagram className="mr-2 text-primary font-bold" /> Follow
        </Button>
      </div>
      <div className="w-full lg:w-1/2 relative h-full flex overflow-hidden">
        <div className="h-40 lg:h-80 w-120 lg:w-200 bg-primary rounded-3xl absolute bottom-30 -right-10 lg:bottom-50 lg:left-10"/>
        <img src={images.drink1} alt="juice" className="absolute shadow-lg h-60 w-35 lg:h-80 lg:w-55 bottom-10 right-5 lg:bottom-10 lg:right-10 rounded-xl object-cover" />
        <img src={images.drink4} alt="juice" className="absolute shadow-lg h-60 w-35 lg:h-55 lg:w-55 bottom-20 right-45 lg:bottom-95 lg:right-10 rounded-xl object-cover" />
        <img src={images.drink2} alt="juice" className="absolute shadow-lg h-32 w-32 lg:h-55 lg:w-55 bottom-10 right-85 lg:bottom-10 lg:right-70 rounded-xl object-cover" />
        <img src={images.drink3} alt="juice" className="absolute shadow-lg h-60 w-40 lg:h-80 lg:w-55 bottom-10 right-120 lg:bottom-70 lg:right-70 rounded-xl object-cover hidden lg:block" />
      </div>
    </div>
  )
}

export default AboutUs
