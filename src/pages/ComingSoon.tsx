import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Movie } from '@/types/cinema';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Star, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { usePageViewMetrics } from '@/hooks/usePageViewMetrics';
import { comingSoonMovies } from '@/data/mockData';

const ComingSoon: React.FC = () => {
  usePageViewMetrics();

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Coming Soon</h1>
        
        <div className="space-y-8">
          {comingSoonMovies.map((movie) => (
            <div key={movie.id} className="bg-card rounded-lg overflow-hidden border border-border/50">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 lg:w-1/5">
                  <img 
                    src={movie.posterUrl} 
                    alt={movie.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {movie.genres.map((genre, index) => (
                      <Badge key={index} variant="outline">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-2">{movie.title}</h2>
                  
                  <div className="flex flex-wrap items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Release Date: {movie.releaseDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{movie.duration} min</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                      <span>{movie.rating.toFixed(1)}/10</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {movie.synopsis}
                  </p>
                  
                  <div className="mb-4">
                    <p><span className="font-medium">Director:</span> {movie.director}</p>
                    <p><span className="font-medium">Cast:</span> {movie.cast.join(', ')}</p>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      variant="default"
                      onClick={() => movie.trailerUrl && window.open(movie.trailerUrl, '_blank')}
                    >
                      Watch Trailer
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Bell className="mr-2 h-4 w-4" />
                      Get Notified
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ComingSoon;