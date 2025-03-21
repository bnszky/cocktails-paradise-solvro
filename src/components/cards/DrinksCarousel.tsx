import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import CocktailCard from './CocktailCard'
import { Frown } from 'lucide-react'
import Drink from "@/types/Drink";

function DrinksCarousel({cocktails}: {cocktails: Drink[]}) {

    let mdBasis: string;
    let lgBasis: string;

    if(cocktails){
        mdBasis = cocktails.length > 1 ? 'md:basis-1/2' : 'md:basis-1/1'
        lgBasis = cocktails.length > 2 ? 'lg:basis-1/3' : cocktails.length > 1 ? 'lg:basis-1/2' : 'lg:basis-1/1'
    }

  return (
    <Carousel
        opts={{
            align: "start",
        }}
        className="lg:w-190 md:w-3/5 w-55 flex justify-center items-center my-10"
        >
        <CarouselContent>
            {cocktails && cocktails.length != 0 ? cocktails.map((cocktail) => (
            <CarouselItem key={cocktail.id} className={`${lgBasis} ${mdBasis} sm:basis-1/1 pl-2 flex justify-center`}>
                <CocktailCard cocktail={cocktail} />
            </CarouselItem>
            )) : 
            <CarouselItem className="w-60 h-60 flex flex-col items-center justify-center">
                <Frown className="w-8 h-8 mt-4 hover:text-accent my-4" />
                <div className="text-center text-xl font-semibold flex flex-row">No drinks found</div>
                <div className="text-center text-sm font-regular mt-4">We don't have these types of drinks. Devs drunk all bottles</div>
            </CarouselItem>
            }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}

export default DrinksCarousel
