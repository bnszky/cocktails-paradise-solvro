import { useQuery } from "@tanstack/react-query";

export function useGlassesQuery() {
    return useQuery({
        queryKey: ['glasses'],
        queryFn: () => 
        fetch(`https://cocktails.solvro.pl/api/v1/cocktails/glasses`).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json().then((data) => data.data).then((data) => 
                data.map((glass: any, index: number) => ({ id: index + 1, name: glass }))
            );
        }),
    });
}