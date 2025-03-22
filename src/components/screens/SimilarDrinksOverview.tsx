import DrinksCarousel from '../cards/DrinksCarousel'
import { useCocktailsQuery } from '../../hooks/useCocktailsQuery'
import Drink from '@/types/Drink';

function SimilarDrinksOverview({category, currentId}: {category: string, currentId: string}) {

    const { isLoading: isLoadingCoctails, isError: isErrorCoctails, data } = useCocktailsQuery([category]);

    if(isLoadingCoctails) {
        return <div>Loading...</div>
    }

    if(isErrorCoctails || !data) {
        return <div>Error</div>
    }
    const { drinks: cocktails } = data;

    const filteredCoctails = cocktails?.filter((cocktail: Drink) => cocktail.id !== currentId);

    return (
    <div className="w-full flex flex-col items-center justify-center text-center p-5">
    <h1 className="text-3xl font-bold mt-10 my-4">Find more similar drinks!</h1>
    <p>Every day we fill our website with new instructions. Explore millions of them! Let us know what do you think about this web app and share your feedback!</p>
    <DrinksCarousel cocktails={filteredCoctails} />
    </div>
    );
}

export default SimilarDrinksOverview
