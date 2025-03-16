import Ingredient from '@/types/Ingredient'
import { ShoppingBasket, Martini } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger} from '../ui/hover-card'
import { Badge } from '../ui/badge'

function IngredientCard({ key, ingredient, color = "bg-accent" }: { key: number, ingredient: Ingredient, color: string }) {
  return (
    <HoverCard>
        <HoverCardTrigger asChild>
            <li key={key} className={`w-full ${color} flex flex-row justify-between items-center p-2 my-2 rounded-xl shadow-lg`}>
                <div className='flex flex-row space-x-2 justify-center items-center'>
                    {ingredient.imageUrl ? <img className='w-10 h-10 rounded-full' src={ingredient.imageUrl} alt={ingredient.name} /> :
                    ingredient.alcohol ? <Martini className='w-10 h-10 rounded-full text-primary' />
                    : <ShoppingBasket className='w-10 h-10 rounded-full text-primary' />}
                    <span className='text-sm font-semibold'>{ingredient.name}</span>
                </div>
                {ingredient.measure != undefined && <span className='text-sm font-semibold mr-4'>{ingredient.measure}</span>}
            </li>
        </HoverCardTrigger>
        <HoverCardContent>
            <div className='flex flex-col items-start justify-start p-1'>
                <div className='w-full flex flex-row justify-between items-center my-2'>
                    <h1 className='text-sm font-semibold'>{ingredient.name}</h1>
                    {ingredient.alcohol && <Badge className='text-sm rounded-2xl shadow-lg'><Martini className='w-6 h-6'/> +18 {ingredient.percentage && `(${ingredient.percentage} %)`}</Badge>}
                </div>
                {ingredient.description != null && <p className='text-sm'>
                    {ingredient.description.length > 500 ? `${ingredient.description.substring(0, 500)}...` : ingredient.description}
                </p>}
            </div>
        </HoverCardContent>
    </HoverCard>
  )
}

export default IngredientCard
