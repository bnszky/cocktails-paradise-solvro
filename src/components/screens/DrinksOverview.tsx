import CategoryBadge from '../ui-wrapper/CategoryBadge'
import DrinksCarousel from '../cards/DrinksCarousel'
import { useCategoriesQuery } from '../../hooks/useCategoriesQuery'
import { useCocktailsQuery } from '../../hooks/useCocktailsQuery'
import { useEffect, useState } from 'react'

function DrinksOverview() {

    const { isLoading: isLoadingCategories, isError: isErrorCategories, data: categories } = useCategoriesQuery();
    const [activeCategory, setActiveCategory] = useState<string>("Cocktail");

    const { isLoading: isLoadingCoctails, isError: isErrorCoctails, data } = useCocktailsQuery([activeCategory]);

    if(isLoadingCoctails) {
        return <div>Loading...</div>
    }
    if(isErrorCoctails || !data) {
        return <div>Error</div>
    }

    const { drinks: coctails } = data;

    const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
    };

    return (
    <div className="w-full flex flex-col items-center justify-center text-center p-5">
    <h1 className="text-3xl font-bold mt-10 my-4">Czy jesteś gotów poznać nasze produkty?</h1>
    <p>Spójrz na nasze wspaniałe produkty, odkrywaj różne rodzaje drinków</p>
    <div className="flex flex-wrap justify-center items-center mt-4 lg:w-1/2 md:w-2/3">
        {categories != null && categories.map((category) => (
        <CategoryBadge
            key={category.id}
            name={category.name}
            onClick={() => handleCategoryClick(category.name)}
            isActive={activeCategory === category.name}
        />
        ))}
    </div>
        <DrinksCarousel cocktails={coctails} />
    </div>
  )
}

export default DrinksOverview
