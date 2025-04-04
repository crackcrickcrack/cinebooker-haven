
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import FeaturedMovie from '@/components/movies/FeaturedMovie';
import MovieGrid from '@/components/movies/MovieGrid';
import { Button } from '@/components/ui/button';
import { movies } from '@/data/mockData';
import { CalendarIcon, MapPinIcon, StarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // For the hero section, we'll use the first movie
  const featuredMovie = movies[0];
  
  // Divide the movies into "Now Playing" and "Coming Soon"
  const nowPlaying = movies.slice(1, 9); // More movies for Now Playing
  const comingSoon = movies.slice(9); // More movies for Coming Soon
  
  return (
    <AppLayout>
      <FeaturedMovie movie={featuredMovie} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl font-bold">Now Playing</h2>
          <Link to="/movies">
            <Button variant="link">View All Movies</Button>
          </Link>
        </div>
        
        <MovieGrid movies={nowPlaying} />
        
        {/* Promotional Section */}
        <div className="my-16 bg-card rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Premium Experience</h3>
              <p className="text-muted-foreground mb-6">
                Elevate your cinema experience with our premium offerings. Immersive sound, crystal-clear visuals, and ultimate comfort.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <StarIcon className="h-5 w-5 text-gold-500 mr-2" />
                  <span>Luxury recliner seats</span>
                </li>
                <li className="flex items-center">
                  <StarIcon className="h-5 w-5 text-gold-500 mr-2" />
                  <span>Dolby Atmos sound system</span>
                </li>
                <li className="flex items-center">
                  <StarIcon className="h-5 w-5 text-gold-500 mr-2" />
                  <span>4K laser projection</span>
                </li>
              </ul>
              <Button>Explore Premium</Button>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070')] bg-cover bg-center h-64 md:h-auto"></div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <Link to="/coming-soon">
            <Button variant="link">View All</Button>
          </Link>
        </div>
        
        <MovieGrid movies={comingSoon} />
        
        {/* CTA Section */}
        <div className="my-16 text-center">
          <h2 className="text-3xl font-bold mb-4">The Ultimate Cinema Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Book your tickets now and immerse yourself in the magic of cinema. With the latest blockbusters and timeless classics, there's something for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Book Tickets
            </Button>
            <Button size="lg" variant="outline">
              <MapPinIcon className="mr-2 h-5 w-5" />
              Find Theaters
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
