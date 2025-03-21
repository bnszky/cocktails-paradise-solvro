import { Star } from 'lucide-react';
import useFavorites from '@/hooks/useFavorites';
import { useTheme } from '@/context/ThemeProvider';
import { toast } from 'sonner';
import { Toaster } from '../ui/sonner';

function StarButton({cocktailId}: {cocktailId: string}) {
    const { isFavorite, toggleFavorite } = useFavorites(cocktailId);
    const { isDarkTheme } = useTheme();
    return (
        <>
        <Star 
            className="cursor-pointer absolute right-5" 
            fill={isFavorite ? 'orange' : 'white'} 
            color={isFavorite ? 'orange' : (isDarkTheme ? 'gray' : 'orange')} 
            onClick={() => {
                toast(isFavorite ? 'This cocktail has been removed from your favorites'
                    : 'This cocktail has been added to your favorites')
                toggleFavorite()
            }} 
        />
        <Toaster toastOptions={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', border: '1px solid #EC5800' } }}/>
        </>
    )
}

export default StarButton
