import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from '../ui/sidebar'
import { Checkbox } from '../ui/checkbox'

interface SidebarGroupWrapperProps {
    title: string;
    items: {id: string, name: string}[];
    selectedItems: Set<string>;
    addItem: (name: string) => void;
    removeItem: (name: string) => void;
}

function SidebarGroupWrapper({title, items, selectedItems, addItem, removeItem} : SidebarGroupWrapperProps) {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>{title}</SidebarGroupLabel>
        <SidebarGroupContent>
        <SidebarMenu>
            {items.map((item) => (
            <SidebarMenuItem key={item.id}>
                <SidebarMenuButton>
                    <Checkbox id={`category-${item.name}`} onCheckedChange={
                        () => !selectedItems.has(item.name) ? addItem(item.name) : removeItem(item.name)
                    } checked={selectedItems.has(item.name)}/>
                    {item.name}
                </SidebarMenuButton>
            </SidebarMenuItem>
            ))}
        </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarGroupWrapper
