import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { useCategoriesQuery } from "@/hooks/useCategoriesQuery"
import { useGlassesQuery } from "@/hooks/useGlassesQuery"
import { useIngredientsQuery } from "@/hooks/useIngredientsQuery"
import { ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import SidebarCheckWrapper from "../ui-wrapper/SidebarCheckWrapper"
import SidebarGroupWrapper from "../ui-wrapper/SidebarGroupWrapper"
import SidebarGroupWithSubWrapper from "../ui-wrapper/SidebarGroupWithSubWrapper"

interface AppSidebarProps {
  onClose: () => void;
  isAlcoholic: boolean | null;
  setIsAlcoholic: (isAlcoholic: boolean | null) => void;
  selectedCategories: Set<string>;
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
  selectedGlasses: Set<string>;
  addGlass: (glass: string) => void;
  removeGlass: (glass: string) => void;
  selectedIngredients: Set<string>;
  addIngredient: (ingredient: string) => void;
  removeIngredient: (ingredient: string) => void;
};

export default function AppSidebar({ onClose, isAlcoholic, setIsAlcoholic,
    selectedCategories, addCategory, removeCategory,
    selectedGlasses, addGlass, removeGlass,
    selectedIngredients, addIngredient, removeIngredient
 }: AppSidebarProps) {

    const isMobile = useIsMobile();
    const { data: categories, isLoading: isLoadingCategories, isError: isErrorCategories } = useCategoriesQuery();
    const { data: glasses, isLoading: isLoadingGlasses, isError: isErrorGlasses } = useGlassesQuery();
    const { data: ingredients, isLoading: isLoadingIngredients, isError: isErrorIngredients } = useIngredientsQuery();

    if(isLoadingGlasses || isLoadingCategories || isLoadingIngredients) {
        return null
    }
    if(isErrorCategories || isErrorGlasses || isErrorIngredients || !categories || !glasses || !ingredients) {
        return null
    }

  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex flex-row items-center justify-between">
        <div className="text-xl font-bold">Filter Drinks</div>
        <Button variant="primary" onClick={onClose}>Close <ChevronRight className="w-8 h-8 -mb-0.5"/></Button>
      </SidebarHeader>
      <SidebarContent className={`flex ${!isMobile && 'flex-row'}`}>
        <div>
          <SidebarCheckWrapper title="Alcoholic" isChoosen={isAlcoholic} setIsChoosen={setIsAlcoholic} isNullable={true}/>
          <SidebarGroupWrapper title="Categories" items={categories} selectedItems={selectedCategories} addItem={addCategory} removeItem={removeCategory}/>
          <SidebarGroupWrapper title="Glasses" items={glasses} selectedItems={selectedGlasses} addItem={addGlass} removeItem={removeGlass}/>
        </div>
        <SidebarGroupWithSubWrapper title="Ingredients" items={ingredients} selectedItems={selectedIngredients} addItem={addIngredient} removeItem={removeIngredient}/>
      </SidebarContent>
    </Sidebar>
  )
}
