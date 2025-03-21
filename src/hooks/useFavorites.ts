import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useFavorites = (cocktailId: string) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(Cookies.get('favorites') || '{}');
    if (favorites[cocktailId]) {
      setIsFavorite(true);
    }
  }, [cocktailId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(Cookies.get('favorites') || '{}');
    if (isFavorite) {
      delete favorites[cocktailId];
    } else {
      favorites[cocktailId] = true;
    }
    Cookies.set('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, toggleFavorite };
};

export default useFavorites;
