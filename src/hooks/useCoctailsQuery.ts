import { useQuery } from "@tanstack/react-query";

export function useCoctailsQuery(category: string) {
    return useQuery({
        queryKey: ['cocktails', category],
        queryFn: () => fetch(`https://cocktails.solvro.pl/api/v1/cocktails?category=${category}&page=1&perPage=15`).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            console.log("Category: ", category) 
            return res.json().then((data) => data.data)
        }),
    });
}