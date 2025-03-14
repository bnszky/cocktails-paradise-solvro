import { useQuery } from "@tanstack/react-query";

export function useCoctailQuery({id} : {id: string}) {
    return useQuery({
        queryKey: ['coctail', id],
        queryFn: () => 
        fetch(`https://cocktails.solvro.pl/api/v1/cocktails/${id}`).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }),
    });
}