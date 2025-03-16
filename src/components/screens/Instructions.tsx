import Drink from '@/types/Drink'
import React from 'react'
import {Button} from '@/components/ui/Button'
import { Star } from 'lucide-react'

function Instructions({drink}: {drink: Drink}) {
  return (
    <div className='w-full lg:w-1/2 p-4 flex flex-col items-start justify-start'>
        <div className='w-full flex flex-row justify-center items-center'>
            <img className="rounded-3xl w-120 h-120 object-cover" src={drink.imageUrl} alt={drink.name} />
        </div>
        <h1 className='text-3xl font-semibold mt-4'>Instructions</h1>
        <div className='w-full mb-2 mt-2 border-2 border-gray-200'></div>
        <p className='text-lg'>{drink.instructions}</p>
        <Button className='mt-4' variant={"outline"}><Star className='w-6 h-6'/>Add to favorites</Button>
    </div>
  )
}

export default Instructions
