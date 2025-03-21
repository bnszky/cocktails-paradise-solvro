import { Button } from '../ui/button';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Link } from 'react-router-dom';
import Drink from '@/types/Drink';
import StarButton from '../ui-wrapper/StarButton';

function CocktailCard({cocktail}: {cocktail: Drink}) {
  return (
      <Card className='w-60 h-140 pt-0 border-1 rounded-xl shadow-md relative'>
      <img className="rounded-t-xl w-full h-60 object-cover" src={cocktail?.imageUrl} alt={cocktail?.name} />
        <CardHeader className='items-center justify-between relative text-left'>
            <CardTitle className='text-md w-35'>{cocktail?.name}</CardTitle>
            <CardDescription>{cocktail?.glass}</CardDescription>
            <StarButton cocktailId={cocktail.id} />
        </CardHeader>
        <CardAction className='flex flex-col items-end justify-center'>
          <div className='text-left px-2 mb-4 font-thin text-sm h-25 overflow-hidden'>{cocktail?.instructions}</div>
          <Button asChild className="absolute bottom-3 right-3">
            <Link to={`/drink/${cocktail.id}`}>Read more</Link>
          </Button>
        </CardAction>
      </Card>
  )
}

export default CocktailCard
