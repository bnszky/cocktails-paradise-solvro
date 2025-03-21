import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "../ui/sidebar"

import { Checkbox } from "../ui/checkbox"

interface SidebarCheckWrapperProps {
    title: string;
    isChoosen: boolean | null;
    setIsChoosen: (value: boolean | null) => void;
    isNullable?: boolean;
}

function SidebarCheckWrapper({title, isChoosen, setIsChoosen, isNullable = false} : SidebarCheckWrapperProps) {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>{title}</SidebarGroupLabel>
        <SidebarGroupContent>
            { isNullable &&
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                    <Checkbox id={`${title}-any`} onCheckedChange={
                        () => setIsChoosen(null)
                    } checked={isChoosen === null}/>
                    Any
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            }
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                    <Checkbox id={`${title}-yes`} onCheckedChange={
                        () => setIsChoosen(true)
                    } checked={isChoosen === true}/>
                    Yes
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                    <Checkbox id={`${title}-no`} onCheckedChange={
                        () => setIsChoosen(false)
                    } checked={isChoosen === false}/>
                    No
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarCheckWrapper
