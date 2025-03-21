import CategoryBadge from '../ui-wrapper/CategoryBadge'
import DrinksCarousel from '../cards/DrinksCarousel'
import { useCategoriesQuery } from '../../hooks/useCategoriesQuery'
import { useCocktailsQuery } from '../../hooks/useCocktailsQuery'
import { useEffect, useState } from 'react'

function DrinksOverview() {

    const { data: categories } = useCategoriesQuery();
    const [activeCategory, setActiveCategory] = useState<string>("Cocktail");

    const { data } = useCocktailsQuery([activeCategory]);

    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        if (data) {
            setCocktails(data.drinks);
        }
    }, [data]);

    const handleCategoryClick = (name: string) => {
        setActiveCategory(name);
    };

    return (
    <div className="w-full flex flex-col items-center justify-center text-center p-5">
    <h1 className="text-3xl font-bold mt-10 my-4">Are you ready to discover our products?</h1>
    <p>Every day we fill our website with new instructions. Explore millions of them! Let us know what do you think about this web app and share your feedback!</p>
    <div className="flex flex-wrap justify-center items-center mt-4 lg:w-1/2 md:w-2/3">
        {categories != null && categories.map((category: {id: string, name: string}) => (
        <CategoryBadge
            key={category.id}
            name={category.name}
            onClick={() => handleCategoryClick(category.name)}
            isActive={activeCategory === category.name}
        />
        ))}
    </div>
        <DrinksCarousel cocktails={cocktails} />
    </div>
  )
}

export default DrinksOverview
