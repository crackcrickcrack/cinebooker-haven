
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import { getMovieById, getShowtimesByMovieId, getTheaterById } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Star, Clock, CalendarIcon, PlayCircle, User, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ShowtimeSelector from '@/components/booking/ShowtimeSelector';
import { Showtime } from '@/types/cinema';
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Get movie details
  const movie = getMovieById(id || '');
  
  if (!movie) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
          <Link to="/movies">
            <Button>Back to Movies</Button>
          </Link>
        </div>
      </AppLayout>
    );
  }
  
  // Get showtimes for this movie
  const showtimes = getShowtimesByMovieId(movie.id);
  
  // Get theaters that show this movie
  const theaterIds = [...new Set(showtimes.map(st => st.theaterId))];
  const theaters = theaterIds.map(tid => getTheaterById(tid)).filter(Boolean);
  
  const handleSelectShowtime = (showtime: Showtime) => {
    navigate(`/booking/${showtime.id}`);
  };

  return (
    <AppLayout>
      {/* Hero Section with Backdrop */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40 z-10"></div>
        <div 
          className="relative w-full h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdropUrl})` }}
        >
          <div className="absolute inset-0 bg-black/30 z-0"></div>
        </div>
      </div>
      
      {/* Movie Details */}
      <div className="container mx-auto px-4 relative z-20 -mt-72">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Movie Poster */}
          <div className="md:col-span-3 mb-8">
            <div className="overflow-hidden rounded-lg shadow-2xl border border-white/10">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="flex justify-center mt-4">
              <Button variant="outline" className="w-full">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Trailer
              </Button>
            </div>
          </div>
          
          {/* Movie Info */}
          <div className="md:col-span-9">
            <div className="flex flex-wrap gap-2 mb-3">
              {movie.genres.map((genre, index) => (
                <Badge key={index} className="bg-primary/70 text-white hover:bg-primary">
                  {genre}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {movie.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-1 fill-gold-400 text-gold-400" />
                <span>{movie.rating.toFixed(1)}/10</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1 text-muted-foreground" />
                <span>{movie.duration} min</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-1 text-muted-foreground" />
                <span>{movie.releaseDate}</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
              <p className="text-muted-foreground">
                {movie.synopsis}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">Director</h2>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{movie.director}</span>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Cast</h2>
                <div className="flex flex-col space-y-1">
                  {movie.cast.map((actor, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{actor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Showtimes Section */}
        <div className="my-12">
          <ShowtimeSelector 
            showtimes={showtimes} 
            theaters={theaters} 
            onSelectShowtime={handleSelectShowtime} 
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default MovieDetails;
