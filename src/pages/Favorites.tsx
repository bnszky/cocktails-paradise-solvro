import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

function Favorites() {
  // This is a placeholder. In a real app, you'd fetch favorites from state/storage
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="w-full max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Your Favorite Cocktails</CardTitle>
        </CardHeader>
        <CardContent>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Map through favorites here */}
              <p>Your saved cocktails will appear here</p>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="mb-4">You haven't saved any favorite cocktails yet.</p>
              <Button asChild>
                <Link to="/">Explore Cocktails</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Favorites;
