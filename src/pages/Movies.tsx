
import React, { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import MovieGrid from '@/components/movies/MovieGrid';
import { movies } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchIcon, FilterIcon } from 'lucide-react';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState('all');
  
  // Filter movies based on search and genre (simple implementation for demo)
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (genre === 'all' || movie.genres.includes(genre))
  );
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">All Movies</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            
            <div className="w-full md:w-48">
              <Select value={genre} onValueChange={setGenre}>
                <SelectTrigger>
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="Action">Action</SelectItem>
                  <SelectItem value="Drama">Drama</SelectItem>
                  <SelectItem value="Comedy">Comedy</SelectItem>
                  <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
                  <SelectItem value="Horror">Horror</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="outline" size="icon" className="md:hidden">
              <FilterIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <MovieGrid movies={filteredMovies} />
      </div>
    </AppLayout>
  );
};

export default Movies;
