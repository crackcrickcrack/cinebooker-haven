import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '@/types/cinema';
import { Star, Clock } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card group">
      <div className="movie-poster">
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="text-white">
            <div className="flex items-center mb-1">
              <Star className="h-3 w-3 mr-1 fill-gold-400 text-gold-400" />
              <span className="text-xs">{movie.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span className="text-xs">{movie.duration} min</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-1">{movie.title}</h3>
        <div className="flex flex-wrap gap-1 mt-1">
          {movie.genres.slice(0, 2).map((genre, index) => (
            <span key={index} className="text-xs text-muted-foreground">
              {genre}{index < Math.min(movie.genres.length, 2) - 1 ? ',' : ''}
            </span>
          ))}
          {movie.genres.length > 2 && (
            <span className="text-xs text-muted-foreground">...</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;