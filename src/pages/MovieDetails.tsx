import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Movie } from '@/types/cinema';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Star, PlayCircle, CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { usePageViewMetrics } from '@/hooks/usePageViewMetrics';

// Sample movie data
const sampleMovies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    rating: 8.8,
    duration: 148,
    releaseDate: "2010-07-16",
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg",
    synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    rating: 9.3,
    duration: 142,
    releaseDate: "1994-10-14",
    genres: ["Drama"],
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
  },
  {
    id: "3",
    title: "The Dark Knight",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    rating: 9.0,
    duration: 152,
    releaseDate: "2008-07-18",
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
  },
  {
    id: "4",
    title: "Pulp Fiction",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: 8.9,
    duration: 154,
    releaseDate: "1994-10-14",
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
  },
  {
    id: "5",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BMTM5MTYyNTcxNl5BMl5BanBnXkFtZTcwOTg2Njc4Ng@@._V1_.jpg",
    synopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    rating: 8.8,
    duration: 178,
    releaseDate: "2001-12-19",
    genres: ["Action", "Adventure", "Drama"],
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"]
  }
];

const MovieDetails: React.FC = () => {
  usePageViewMetrics();
  const { id } = useParams<{ id: string }>();
  const [selectedDate, setSelectedDate] = useState<string>("2023-10-25");
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  
  useEffect(() => {
    // Find the movie by ID
    const foundMovie = sampleMovies.find(m => m.id === id);
    
    if (foundMovie) {
      setCurrentMovie(foundMovie);
    } else {
      // Fallback to the first movie if ID not found
      setCurrentMovie(sampleMovies[0]);
    }
  }, [id]);
  
  // If movie is not loaded yet, show loading state
  if (!currentMovie) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-muted/30 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-64 bg-muted/30 rounded mb-4"></div>
            <div className="h-4 bg-muted/30 rounded w-2/3 mx-auto mb-2"></div>
            <div className="h-4 bg-muted/30 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  // Sample showtimes
  const showtimes = [
    { time: "10:30 AM", theater: "CineBooker IMAX", screen: "Screen 1", available: true },
    { time: "1:15 PM", theater: "CineBooker IMAX", screen: "Screen 3", available: true },
    { time: "4:00 PM", theater: "CineBooker Multiplex", screen: "Screen 5", available: true },
    { time: "7:30 PM", theater: "CineBooker IMAX", screen: "Screen 1", available: true },
    { time: "10:45 PM", theater: "CineBooker Premiere", screen: "Screen 2", available: false }
  ];
  
  // Sample dates for the date picker
  const dates = [
    { date: "2023-10-25", day: "Today" },
    { date: "2023-10-26", day: "Thu" },
    { date: "2023-10-27", day: "Fri" },
    { date: "2023-10-28", day: "Sat" },
    { date: "2023-10-29", day: "Sun" }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section with Backdrop */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
          <div 
            className="relative w-full h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${currentMovie.backdropUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 z-0"></div>
            
            <div className="container mx-auto px-4 h-full flex items-end pb-16 relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full">
                <div className="md:col-span-3 hidden md:block">
                  <div className="overflow-hidden rounded-lg shadow-2xl border border-white/10">
                    <img 
                      src={currentMovie.posterUrl} 
                      alt={currentMovie.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-9">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {currentMovie.genres.map((genre, index) => (
                      <Badge key={index} className="bg-primary/70 text-white hover:bg-primary">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {currentMovie.title}
                  </h1>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 mr-1 fill-gold-400 text-gold-400" />
                      <span className="text-white">{currentMovie.rating.toFixed(1)}/10</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-1 text-white" />
                      <span className="text-white">{currentMovie.duration} min</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-1 text-white" />
                      <span className="text-white">{currentMovie.releaseDate}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/90 mb-6 max-w-3xl">
                    {currentMovie.synopsis}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                      <Link to={`/movies/${id}/booking`}>Book Tickets</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Movie Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
              <p className="text-muted-foreground mb-8">
                {currentMovie.synopsis}
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Cast & Crew</h2>
              <div className="mb-8">
                <p className="mb-2"><span className="font-medium">Director:</span> {currentMovie.director}</p>
                <p><span className="font-medium">Cast:</span> {currentMovie.cast.join(', ')}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Showtimes</h2>
              
              {/* Date Picker */}
              <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
                {dates.map((date) => (
                  <Button
                    key={date.date}
                    variant={selectedDate === date.date ? "default" : "outline"}
                    className="flex flex-col items-center px-4 py-2"
                    onClick={() => setSelectedDate(date.date)}
                  >
                    <CalendarDays className="h-4 w-4 mb-1" />
                    <span>{date.day}</span>
                  </Button>
                ))}
              </div>
              
              {/* Showtimes */}
              <div className="space-y-4">
                {showtimes.map((showtime, index) => (
                  <div 
                    key={index} 
                    className={`p-4 border rounded-md ${showtime.available ? 'border-border' : 'border-border/30 opacity-50'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{showtime.time}</span>
                      <Badge variant="outline">{showtime.screen}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{showtime.theater}</p>
                    <Button 
                      variant="default" 
                      className="w-full" 
                      disabled={!showtime.available}
                      asChild
                    >
                      <Link to={showtime.available ? `/movies/${id}/booking` : '#'}>
                        {showtime.available ? 'Book Now' : 'Sold Out'}
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MovieDetails;