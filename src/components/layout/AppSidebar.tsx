import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { useCategoriesQuery } from "@/hooks/useCategoriesQuery"
import { useGlassesQuery } from "@/hooks/useGlassesQuery"
import { useIngredientsQuery } from "@/hooks/useIngredientsQuery"
import { Checkbox } from "../ui/checkbox";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "../ui/button"
import { Switch } from "../ui/switch"
import { Label } from "@radix-ui/react-label"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AppSidebar({ onClose, isAlcoholic, setIsAlcoholic,
    selectedCategories, addCategory, removeCategory,
    selectedGlasses, addGlass, removeGlass,
    selectedIngredients, addIngredient, removeIngredient
 }: { onClose: () => void, isAlcoholic: boolean | null, setIsAlcoholic: (isAlcoholic: boolean | null) => void,
    selectedCategories: Set<string>, addCategory: (category: string) => void, removeCategory: (category: string) => void,
    selectedGlasses: Set<string>, addGlass: (glass: string) => void, removeGlass: (glass: string) => void,
    selectedIngredients: Set<string>, addIngredient: (ingredient: string) => void, removeIngredient: (ingredient: string) => void
 }) {

    const isMobile = useIsMobile();
    const { data: categories, isLoading: isLoadingCategories, isError: isErrorCategories } = useCategoriesQuery();
    const { data: glasses, isLoading: isLoadingGlasses, isError: isErrorGlasses } = useGlassesQuery();
    const { data: ingredients, isLoading: isLoadingIngredients, isError: isErrorIngredients } = useIngredientsQuery();

    if(isLoadingGlasses || isLoadingCategories || isLoadingIngredients) {
        return <div>Loading...</div>
    }
    if(isErrorCategories || isErrorGlasses || isErrorIngredients || !categories || !glasses || !ingredients) {
        return <div>Error</div>
    }

    console.log("Selected ingredients", selectedIngredients);

  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex flex-row items-center justify-between">
        <div className="text-xl font-bold">Filter Drinks</div>
        <Button variant="primary" onClick={onClose}>Close <ChevronRight className="w-8 h-8 -mb-0.5"/></Button>
      </SidebarHeader>
      <SidebarContent className={`flex ${!isMobile && 'flex-row'}`}>
        <div>
        <SidebarGroup>
            <SidebarGroupLabel>Alcohol</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                        <Checkbox id={`alcohol-any`} onCheckedChange={
                            () => setIsAlcoholic(null)
                        } checked={isAlcoholic === null}/>
                        Any
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                        <Checkbox id={`alcohol-yes`} onCheckedChange={
                            () => setIsAlcoholic(true)
                        } checked={isAlcoholic === true}/>
                        Yes
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                        <Checkbox id={`alcohol-no`} onCheckedChange={
                            () => setIsAlcoholic(false)
                        } checked={isAlcoholic === false}/>
                        No
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton>
                        <Checkbox id={`category-${category.name}`} onCheckedChange={
                            () => !selectedCategories.has(category.name) ? addCategory(category.name) : removeCategory(category.name)
                        } checked={selectedCategories.has(category.name)}/>
                        {category.name}
                    </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Glasses</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {glasses.map((glass) => (
                <SidebarMenuItem key={glass.id}>
                    <SidebarMenuButton>
                        <Checkbox id={`glass-${glass.name}`} onCheckedChange={
                            () => !selectedGlasses.has(glass.name) ? addGlass(glass.name) : removeGlass(glass.name)
                        } checked={selectedGlasses.has(glass.name)
                        }/>
                        {glass.name}
                    </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Ingredients</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.keys(ingredients).map((ingredientTypeName) => {
                const checkedCount = ingredients[ingredientTypeName].filter(ingredient => selectedIngredients.has(ingredient.id.toString())).length;
                const isChecked = checkedCount > 0;
                return (
                  <Collapsible key={ingredientTypeName} className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild className="cursor-pointer">
                        <SidebarMenuButton className={`flex flex-row items-center justify-between ${isChecked ? 'text-primary' : ''}`}>
                          <div>{ingredientTypeName} {`${isChecked ? ('(' + checkedCount + ')') : ''}`}</div>
                          <ChevronDown className="w-6 h-6 mr-2"/>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        {ingredients[ingredientTypeName].map((ingredient) => (
                          <SidebarMenuSub key={ingredient.id}>
                            <SidebarMenuSubItem className="flex items-center space-x-2 space-y-1 h-5">
                              <Checkbox id={`ingredient-${ingredient.name}`} onCheckedChange={
                                () => !selectedIngredients.has(ingredient.id.toString()) ? addIngredient(ingredient.id.toString()) : removeIngredient(ingredient.id.toString())
                              } checked={selectedIngredients.has(ingredient.id.toString())}/>
                              <div className="text-sm">{ingredient.name}</div>
                              {ingredient.imageUrl && <img src={ingredient.imageUrl} alt={ingredient.name} className="w-4 h-4 object-contain"/>}
                            </SidebarMenuSubItem>
                          </SidebarMenuSub>
                        ))}
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
