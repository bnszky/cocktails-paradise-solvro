import { useQuery } from "@tanstack/react-query";

export function useCocktailQuery({id} : {id: string}) {

    return useQuery({
        queryKey: ['cocktail', id],
        queryFn: async () => {
            const res = await fetch(`https://cocktails.solvro.pl/api/v1/cocktails/${id}`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            return data.data;
        },
    });
}