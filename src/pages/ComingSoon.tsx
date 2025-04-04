
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import MovieGrid from '@/components/movies/MovieGrid';
import { movies } from '@/data/mockData';
import { CalendarIcon } from 'lucide-react';

const ComingSoon = () => {
  // Use all the upcoming movies (movies from id 9 onward)
  const upcomingMovies = movies.slice(9);
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Coming Soon to Theaters</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our upcoming releases and be the first to book tickets for the most anticipated movies.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-8">
          <div className="bg-card rounded-lg p-4 inline-flex items-center">
            <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
            <span>Get notified when tickets become available</span>
          </div>
        </div>
        
        <MovieGrid movies={upcomingMovies} />
      </div>
    </AppLayout>
  );
};

export default ComingSoon;
