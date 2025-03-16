import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCocktailQuery } from '../hooks/useCocktailQuery'
import { LoaderCircle, Martini, Star } from 'lucide-react';
import {Drink as DrinkType} from '../types/Drink';
import SimilarDrinksOverview from '@/components/screens/SimilarDrinksOverview';
import Instructions from '@/components/screens/Instructions';
import IngredientsInfo from '@/components/screens/IngredientsInfo';

export default function Drink() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { data: drink, isLoading, isError } = useCocktailQuery<{ drink: DrinkType }>({ id });

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <LoaderCircle size={64} className="animate-spin text-primary" />
        </div>
    }

    if (isError) {
        navigate('/about');
        return null;
    }

    return (
        <>
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-5/6 md:w-2/3 flex flex-col">
                <div className='w-full flex justify-between items-end'>
                    <div className='flex flex-row'>
                        <h1 className="text-3xl lg:text-6xl font-bold my-4 sm:ml-8 text-left w-full">{drink.name}</h1>
                        <Star className='w-8 h-8 lg:w-16 lg:h-16 mt-5 ml-2'/>
                    </div>
                    <p className='text-right w-full text-xl lg:text-3xl text-primary font-semibold sm:mr-4 mb-4'>{drink.category}</p>
                </div>
                <div className='w-full flex flex-row flex-wrap'>
                    <Instructions drink={drink}/>
                    <IngredientsInfo drink={drink}/>
                </div>
            </div>
        </div>
        <SimilarDrinksOverview category={drink.category} currentId={drink.id}/>
        </>
    )
}
