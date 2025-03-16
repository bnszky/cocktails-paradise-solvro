import { useQuery } from "@tanstack/react-query";

export function useCategoriesQuery() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => 
        fetch(`https://cocktails.solvro.pl/api/v1/cocktails/categories`).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json().then((data) => data.data).then((data) => 
                data.map((category: any, index: number) => ({ id: index + 1, name: category }))
            );
        }),
    });
}