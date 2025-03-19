import { useQuery } from "@tanstack/react-query";

export function useCocktailsQuery(categories: string[] = [], glasses: string[] = [], ingredients: string[] = [], isAlcoholic: null | boolean = null, instruction: string, page: number = 1) {
    const queryString = [
        ...categories.map(category => `category=${category}`),
        ...glasses.map(glass => `glass=${glass}`),
        ...ingredients.map(ingredient => `ingredientId=${ingredient}`),
        isAlcoholic != null && `alcoholic=${isAlcoholic}`,
        instruction && `instructions=${encodeURIComponent(`%${instruction}%`)}`
    ].filter(Boolean).join('&');

    console.log("Query string: ", queryString)
    return useQuery({
        queryKey: ['cocktails', ...categories, ...glasses, ...ingredients, isAlcoholic, instruction, page],
        queryFn: () => fetch(`https://cocktails.solvro.pl/api/v1/cocktails?${queryString}&page=${page}&perPage=15`).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            } 
            return res.json().then((data) => {
                return {
                    drinks: data.data,
                    total: data.meta.total,
                    currentPage: data.meta.currentPage,
                    perPage: data.meta.perPage,
                    lastPage: data.meta.lastPage,
                }
            })
        }),
    });
}