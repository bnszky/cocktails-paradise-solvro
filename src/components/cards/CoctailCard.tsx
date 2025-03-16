import React from 'react'
import { Button } from '../ui/button';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

function CoctailCard({coctail}: {coctail: any}) {
  return (
      <Card className='w-60 h-140 pt-0 border-1 rounded-xl shadow-md relative'>
      <img className="rounded-t-xl w-full h-60 object-cover" src={coctail?.imageUrl} alt={coctail?.name} />
        <CardHeader className='items-center justify-between relative text-left'>
            <CardTitle className='text-md w-35'>{coctail?.name}</CardTitle>
            <CardDescription>{coctail?.glass}</CardDescription>
            <Star className="cursor-pointer absolute right-5" />
        </CardHeader>
        <CardAction className='flex flex-col items-end justify-center'>
          <div className='text-left px-2 mb-4 font-thin text-sm h-25 overflow-hidden'>{coctail?.instructions}</div>
          <Button asChild className="absolute bottom-3 right-3">
            <Link to={`/drink/${coctail.id}`}>Read more</Link>
          </Button>
        </CardAction>
      </Card>
  )
}

export default CoctailCard
