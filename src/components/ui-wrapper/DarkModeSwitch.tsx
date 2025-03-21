import { useTheme } from '@/context/ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'

function DarkModeSwitch() {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <>
            <Switch 
                id="theme-mode" 
                checked={isDarkTheme}
                onCheckedChange={toggleTheme}
            />
            <Label htmlFor="theme-mode">
                {isDarkTheme ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Label>
        </>
    )
}

export default DarkModeSwitch
