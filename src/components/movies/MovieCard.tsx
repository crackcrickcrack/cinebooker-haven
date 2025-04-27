import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '@/types/cinema';
import { Star, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border/50 bg-card transition-all hover:shadow-md">
      <Link to={`/movies/${movie.id}`} className="block">
        <div className="aspect-[2/3] overflow-hidden">
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-3">
          <h3 className="font-medium line-clamp-1">{movie.title}</h3>

          <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center">
              <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span>
                {typeof movie.rating === 'number' ? movie.rating.toFixed(1) : 'N/A'}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" aria-hidden="true" />
              <span>
                {movie.duration ? `${movie.duration} min` : 'Unknown'}
              </span>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            {(movie.genres ?? []).slice(0, 2).map((genre, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {genre}
              </Badge>
            ))}
            {movie.genres && movie.genres.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{movie.genres.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
