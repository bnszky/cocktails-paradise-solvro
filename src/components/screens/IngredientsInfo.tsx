import Drink from '@/types/Drink'
import { Martini } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import Ingredient from '@/types/Ingredient'
import IngredientCard from '@/components/cards/IngredientCard'

function IngredientsInfo({drink}: {drink: Drink}) {
  return (
    <div className='w-full lg:w-1/2 p-4 flex flex-col items-start justify-start'>
        <div className='w-full flex flex-row justify-between items-center'>
            <div className='flex flex-row space-x-2 justify-center items-center'>
                <h2 className='text-3xl font-semibold'>Ingredients</h2>
                <span className='text-md -mb-2.5'>({drink.ingredients.length} items)</span>
            </div>
            {drink.alcoholic && <Badge className='text-sm rounded-2xl -mb-2 shadow-lg'><Martini className='w-6 h-6'/> +18</Badge>}
        </div>
        <div className='w-full mb-2 mt-2 border-2 border-gray-200'></div>
        <ul className='w-full'>
            {drink.ingredients.map((ingredient: Ingredient, index: number) => (
                <IngredientCard key={index} ingredient={ingredient} color={index % 2 ? "bg-accent" : "bg-secondary-foreground text-secondary"} />
            ))}
        </ul>
    </div>
  )
}

export default IngredientsInfo
