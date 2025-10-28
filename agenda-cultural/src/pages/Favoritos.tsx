import { useState } from "react";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

// Mock data
const mockFavorites = [
  {
    id: "1",
    title: "Show de Rock",
    date: "20/09/2025",
    neighborhood: "Centro",
    price: "R$ 50",
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500",
  },
];

const Favoritos = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<string[]>(["1"]);

  const handleFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((fav) => fav !== id));
  };

  const handleViewDetails = (id: string) => {
    navigate(`/evento/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Meus Favoritos</h1>
        
        {mockFavorites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Você ainda não tem eventos favoritos.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockFavorites.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                isFavorite={favorites.includes(event.id)}
                onFavorite={handleFavorite}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Favoritos;