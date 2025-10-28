import { Heart, Edit, Share2, Trash2, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  neighborhood: string;
  price: string;
  imageUrl?: string;
  isFavorite?: boolean;
  onFavorite?: (id: string) => void;
  onEdit?: (id: string) => void;
  onShare?: (id: string) => void;
  onDelete?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

const EventCard = ({
  id,
  title,
  date,
  neighborhood,
  price,
  imageUrl,
  isFavorite = false,
  onFavorite,
  onEdit,
  onShare,
  onDelete,
  onViewDetails,
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">Data: {date}</p>
        <p className="text-sm text-muted-foreground">Bairro: {neighborhood}</p>
        <p className="text-sm font-semibold text-foreground mt-1">
          Preço: {price}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
        {onViewDetails && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => onViewDetails(id)}
          >
            <Eye className="w-4 h-4 mr-1" />
            Detalhes
          </Button>
        )}
        {onEdit && (
          <Button size="sm" variant="outline" onClick={() => onEdit(id)}>
            <Edit className="w-4 h-4 mr-1" />
            Editar
          </Button>
        )}
        {onFavorite && (
          <Button
            size="sm"
            variant={isFavorite ? "default" : "outline"}
            onClick={() => onFavorite(id)}
          >
            <Heart
              className={`w-4 h-4 mr-1 ${isFavorite ? "fill-current" : ""}`}
            />
            Favoritar
          </Button>
        )}
        {onShare && (
          <Button size="sm" variant="outline" onClick={() => onShare(id)}>
            <Share2 className="w-4 h-4 mr-1" />
            Compartilhar
          </Button>
        )}
        {onDelete && (
          <Button
            size="sm"
            variant="destructive"
            onClick={() => onDelete(id)}
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Excluir
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default EventCard;