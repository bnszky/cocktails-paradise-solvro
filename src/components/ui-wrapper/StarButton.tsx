import { Star } from 'lucide-react';
import useFavorites from '@/hooks/useFavorites';
import { useTheme } from '@/context/ThemeProvider';
import { toast } from 'sonner';

function StarButton({cocktailId, className, isPopUpWindow = false}: {cocktailId: string, className?: string, isPopUpWindow?: boolean}) {
    const { isFavorite, toggleFavorite } = useFavorites(cocktailId);
    const { isDarkTheme } = useTheme();
    return (
        <Star 
            className={className} 
            fill={isFavorite ? 'orange' : 'white'} 
            color={isFavorite ? 'orange' : (isDarkTheme ? 'gray' : 'orange')} 
            onClick={() => {
                toast(isFavorite ? 'This cocktail has been removed from your favorites'
                    : 'This cocktail has been added to your favorites')
                toggleFavorite()
            }} 
        />
    )
}

export default StarButton
