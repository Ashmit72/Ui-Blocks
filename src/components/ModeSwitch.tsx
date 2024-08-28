import { useTheme } from "@/providers/ThemeProvider"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleMode = (checked: boolean): void => {
        checked ? setTheme('dark') : setTheme('light')
    }

    return (
        <div className="px-3 py-2 flex items-center space-x-2">
            <Switch id="dark-mode" checked={theme === 'dark'} onCheckedChange={(checked) => toggleMode(checked)} />
            <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
    )
}
