import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "../ui/sidebar"
import { Checkbox } from "../ui/checkbox"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"

interface SidebarGroupWithSubWrapperProps {
    title: string;
    items: Record<string, any[]>;
    selectedItems: Set<string>;
    addItem: (name: string) => void;
    removeItem: (name: string) => void;
}

function SidebarGroupWithSubWrapper({title, items, selectedItems, addItem, removeItem} : SidebarGroupWithSubWrapperProps) {
  return (
    <SidebarGroup>
    <SidebarGroupLabel>{title}</SidebarGroupLabel>
    <SidebarGroupContent>
        <SidebarMenu>
        {Object.keys(items).map((itemTypeName) => {
            const checkedCount = items[itemTypeName].filter((item: any) => selectedItems.has(item.id.toString())).length;
            const isChecked = checkedCount > 0;
            return (
            <Collapsible key={itemTypeName} className="group/collapsible">
                <SidebarMenuItem>
                <CollapsibleTrigger asChild className="cursor-pointer">
                    <SidebarMenuButton className={`flex flex-row items-center justify-between ${isChecked ? 'text-primary' : ''}`}>
                    <div>{itemTypeName} {`${isChecked ? ('(' + checkedCount + ')') : ''}`}</div>
                    <ChevronDown className="w-6 h-6 mr-2"/>
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {items[itemTypeName].map((item: any) => (
                    <SidebarMenuSub key={item.id}>
                        <SidebarMenuSubItem className="flex items-center space-x-2 space-y-1 h-5">
                        <Checkbox id={`item-${item.name}`} onCheckedChange={
                            () => !selectedItems.has(item.id.toString()) ? addItem(item.id.toString()) : removeItem(item.id.toString())
                        } checked={selectedItems.has(item.id.toString())}/>
                        <div className="text-sm">{item.name}</div>
                        {item.imageUrl && <img src={item.imageUrl} alt={item.name} className="w-4 h-4 object-contain"/>}
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
  )
}

export default SidebarGroupWithSubWrapper
