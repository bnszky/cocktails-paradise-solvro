import Ingredient from './Ingredient';

export default interface Drink {
    id: string;
    name: string;
    category: string;
    glass: string;
    instructions: string;
    imageUrl: string;
    alcoholic: string;
    createdAt: string;
    updatedAt: string;
    ingredients: Ingredient[];
}