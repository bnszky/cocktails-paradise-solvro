import { useSidebar } from "@/components/ui/sidebar";
import { useCocktailsQuery } from "@/hooks/useCocktailsQuery";
import { LoaderCircle, Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import Drink from "@/types/Drink";
import CocktailCard from "@/components/cards/CocktailCard";
import PaginationCocktails from "@/components/layout/PaginationCocktails";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AppSidebar from "@/components/layout/AppSidebar";
import { useEffect } from "react";
import { Frown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const { open, openMobile, setOpen, setOpenMobile } = useSidebar();
  const [isAlcoholic, setIsAlcoholic] = useState<null | boolean>(null);
  const [glassesSet, setGlassesSet] = useState<Set<string>>(new Set());
  const [ingredientsSet, setIngredientsSet] = useState<Set<string>>(new Set());
  const [categoriesSet, setCategoriesSet] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const [instruction, setInstruction] = useState('');
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const addGlass = (glass: string) => {
    setGlassesSet(prev => new Set(prev).add(glass));
  };

  const removeGlass = (glass: string) => {
    setGlassesSet(prev => {
      const newSet = new Set(prev);
      newSet.delete(glass);
      return newSet;
    });
  };

  const addIngredient = (ingredient: string) => {
    setIngredientsSet(prev => new Set(prev).add(ingredient));
  };

  const removeIngredient = (ingredient: string) => {
    setIngredientsSet(prev => {
      const newSet = new Set(prev);
      newSet.delete(ingredient);
      return newSet;
    });
  };

  const addCategory = (category: string) => {
    setCategoriesSet(prev => new Set(prev).add(category));
  };

  const removeCategory = (category: string) => {
    setCategoriesSet(prev => {
      const newSet = new Set(prev);
      newSet.delete(category);
      return newSet;
    });
  };

  const query = useQuery();

  useEffect(() => {
    const categories = query.get('categories')?.split(',') || [];
    setCategoriesSet(new Set(categories));
    const glasses = query.get('glasses')?.split(',') || [];
    setGlassesSet(new Set(glasses));
    const ingredients = query.get('ingredients')?.split(',').map(decodeURIComponent) || [];
    setIngredientsSet(new Set(ingredients));
    console.log("ingredients:", ingredients);
    const isAlcoholic = query.get('isAlcoholic') === 'null' || query.get('isAlcoholic') === null ? null : query.get('isAlcoholic') === 'true';
    setIsAlcoholic(isAlcoholic);
    setInstruction(query.get('instruction') || '');
    setPage(parseInt(query.get('page') || '1'));
  }, []);

  useEffect(() => {
    setPage(1);
  }, [categoriesSet, glassesSet, ingredientsSet, isAlcoholic]);

  useEffect(() => {
    const categories = Array.from(categoriesSet).join(',');
    const glasses = Array.from(glassesSet).join(',');
    const ingredients = Array.from(ingredientsSet).map(encodeURIComponent).join(',');
    const searchParams = new URLSearchParams({
      categories,
      glasses,
      ingredients,
      isAlcoholic: isAlcoholic === null ? 'null' : isAlcoholic.toString(),
      instruction,
      page: page.toString()
    });
    navigate(`/search?${searchParams.toString()}`, { replace: true });
  }, [categoriesSet, glassesSet, ingredientsSet, isAlcoholic, page]);

  const { data, isLoading, isError } = useCocktailsQuery(
    Array.from(categoriesSet),
    Array.from(glassesSet),
    Array.from(ingredientsSet),
    isAlcoholic,
    instruction,
    page,
  );

  const { drinks, total, lastPage } = data || {};

  return <>
      <AppSidebar onClose={() => {
        setOpen(false);
        setOpenMobile(false);
      }}
      isAlcoholic={isAlcoholic} setIsAlcoholic={setIsAlcoholic}
      selectedCategories={categoriesSet} addCategory={addCategory} removeCategory={removeCategory}
      selectedGlasses={glassesSet} addGlass={addGlass} removeGlass={removeGlass}
      selectedIngredients={ingredientsSet} addIngredient={addIngredient} removeIngredient={removeIngredient}
      />
      <main>
      <div style={{marginLeft: !isMobile && open ? '32rem' : '0'}} className="transition-all duration-500 ease-in-out">
        <div className="w-full p-8">
            <div className="flex flex-col items-start space-y-4 w-2/3">
              <h1 className="text-3xl font-bold">Search Results {`${(total && total > 0) ? '(' + total + ')' : ''}`}</h1>
              <div className="flex flex-row items-center justify-between w-90">
                <SearchIcon className="w-8 h-8 text-primary" />
                <Input 
                placeholder="Cocktail with mint and strawberry..." 
                className="mx-4"
                value={instruction}
                onChange={e => setInstruction(e.target.value)} />
              </div>
              <div className="flex flex-row space-x-2">
                {!open && !openMobile ? <Button variant="destructive" className="w-30" onClick={() => {
                  setOpen(true);
                  setOpenMobile(true);
                }}><SlidersHorizontal/>Filter</Button> : <div className="h-9"/>}
              </div>
            </div>
        </div>
        <div className="w-full flex flex-wrap justify-center space-x-4 space-y-6 px-10">
          {isLoading ?
          <div className="w-60 h-60 flex flex-col items-center justify-center"> 
            <LoaderCircle size={64} className="animate-spin text-primary" />
          </div>
          : isError || drinks === null || drinks.length === 0 ? 
            <div className="w-60 h-60 flex flex-col items-center justify-center">
                <Frown className="w-8 h-8 mt-4 hover:text-accent my-4" />
                <div className="text-center text-xl font-semibold flex flex-row">No drinks found</div>
                <div className="text-center text-sm font-regular mt-4">We don't have these types of drinks. Devs drunk all bottles</div>
            </div>
          : drinks.map((drink: Drink) => (
            <CocktailCard 
              key={drink.id} 
              cocktail={drink} 
            />
          ))}
        </div>
        {!isLoading && !isError && <PaginationCocktails currentPage={page} lastPage={lastPage} setPage={setPage}/>}
      </div>
      </main>
  </>
}

export default Search;
