import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MovieCard from '@/components/movies/MovieCard';
import { usePageViewMetrics } from '@/hooks/usePageViewMetrics';
import { Movie } from '@/types/cinema';

// Sample upcoming movies data
const upcomingMovies: Movie[] = [
  {
    id: "upcoming-1",
    title: "Dune: Part Two",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    rating: 8.7,
    duration: 166,
    releaseDate: "2024-03-01",
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"]
  },
  {
    id: "upcoming-2",
    title: "Furiosa: A Mad Max Saga",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNmFlMjcwODgtZGE4MC00MDUxLWJiN2MtNDVlYjg1NTkyZTRkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BNmFlMjcwODgtZGE4MC00MDUxLWJiN2MtNDVlYjg1NTkyZTRkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    synopsis: "The origin story of renegade warrior Furiosa before she teamed up with Mad Max in 'Fury Road'.",
    rating: 8.5,
    duration: 150,
    releaseDate: "2024-05-24",
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "George Miller",
    cast: ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke"]
  },
  {
    id: "upcoming-3",
    title: "Gladiator II",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTA5ODEyNTc5._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTA5ODEyNTc5._V1_.jpg",
    synopsis: "A sequel to the 2000 film Gladiator, following a new character in ancient Rome.",
    rating: 8.3,
    duration: 155,
    releaseDate: "2024-11-22",
    genres: ["Action", "Drama", "History"],
    director: "Ridley Scott",
    cast: ["Paul Mescal", "Denzel Washington", "Pedro Pascal"]
  },
  {
    id: "upcoming-4",
    title: "Deadpool & Wolverine",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDdjODAwOTEtOWU4Yi00ZTY1LWIyZWYtN2JjMjNjOTllZWYzXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BMDdjODAwOTEtOWU4Yi00ZTY1LWIyZWYtN2JjMjNjOTllZWYzXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg",
    synopsis: "Wolverine joins forces with the loudmouthed mercenary Deadpool for an adventure across the multiverse.",
    rating: 8.9,
    duration: 127,
    releaseDate: "2024-07-26",
    genres: ["Action", "Adventure", "Comedy"],
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin"]
  },
  {
    id: "upcoming-5",
    title: "Joker: Folie à Deux",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODUyODM1OGEtNGQ4Yi00ZDkxLWI3NzQtNjMwNjY3OWM5NjQ1XkEyXkFqcGdeQXVyNjczMzgwMDg@._V1_.jpg",
    backdropUrl: "https://m.media-amazon.com/images/M/MV5BODUyODM1OGEtNGQ4Yi00ZDkxLWI3NzQtNjMwNjY3OWM5NjQ1XkEyXkFqcGdeQXVyNjczMzgwMDg@._V1_.jpg",
    synopsis: "Arthur Fleck, institutionalized at Arkham, continues his journey as the Joker and meets his partner in madness, Harley Quinn.",
    rating: 8.2,
    duration: 138,
    releaseDate: "2024-10-04",
    genres: ["Crime", "Drama", "Musical"],
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz"]
  }
];

const ComingSoon: React.FC = () => {
  usePageViewMetrics();
  const [movies] = useState<Movie[]>(upcomingMovies);

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Coming Soon</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ComingSoon;
