import DrinksCarousel from '../cards/DrinksCarousel'
import { useCoctailsQuery } from '../../hooks/useCoctailsQuery'

function SimilarDrinksOverview({category, currentId}: {category: string, currentId: string}) {

    const { isLoading: isLoadingCoctails, isError: isErrorCoctails, data: coctails } = useCoctailsQuery(category);

    const filteredCoctails = coctails?.filter(coctail => coctail.id !== currentId);

    return (
    <div className="w-full flex flex-col items-center justify-center text-center p-5">
    <h1 className="text-3xl font-bold mt-10 my-4">Czy jesteś gotów poznać nasze produkty?</h1>
    <p>Spójrz na nasze wspaniałe produkty, odkrywaj różne rodzaje drinków</p>
    <DrinksCarousel cocktails={filteredCoctails} />
    </div>
    );
}

export default SimilarDrinksOverview
