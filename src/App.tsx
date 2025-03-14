import { useState } from 'react'
import {useCoctailQuery} from './hooks/useCoctailQuery'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
// import { Image } from 'lucide-react';

function App() {

  const {isLoading, isError, data} = useCoctailQuery({ id: '11000' })
  const coctail = data?.data

  if (isLoading) return 'Loading...'
  if (isError) return 'Error!'

  return (
       <Card className='w-2/4'>
        <CardHeader className='items-center justify-center text-center'>
          <CardTitle>{coctail?.name}</CardTitle>
          <CardDescription>{coctail?.category}</CardDescription>
        </CardHeader>
        <CardAction className='flex flex-col items-center justify-center'>
          <img className="rounded-xl w-2/3 mb-4" src={coctail?.imageUrl} alt={coctail?.name} />
          <div className='text-center my-3 font-thin text-sm'>{coctail?.instructions}</div>
          <Button>Read more</Button>
        </CardAction>
       </Card>
  )
}

export default App
