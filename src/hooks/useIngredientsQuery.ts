import { useQuery } from "@tanstack/react-query";
import Ingredient from "@/types/Ingredient";

export function useIngredientsQuery() {
    return useQuery({
        queryKey: ['ingredients'],
        queryFn: () => 
        fetch(`https://cocktails.solvro.pl/api/v1/ingredients?page=1&perPage=1000`).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json().then((data) => data.data).then((data) => {

                let ingredients: { [key: string]: Ingredient[] } = {};

                for(const ingredient of data) {
                    const type = ingredient.type || 'Other';
                    if(!ingredients[type]){
                        ingredients[type] = [];
                    }
                    ingredients[type].push(ingredient);
                }

                console.log(ingredients);
                return ingredients;
            });
        }),
    });
}