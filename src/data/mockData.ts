import { Movie } from '@/types/cinema';

// Real original movies data
export const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Ken Watanabe"],
    genres: ["Action", "Sci-Fi", "Thriller"],
    duration: 148,
    rating: 8.8,
    releaseDate: "2010-07-16",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
    synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    genres: ["Drama"],
    duration: 142,
    rating: 9.3,
    releaseDate: "1994-10-14",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco"
  },
  {
    id: "3",
    title: "The Dark Knight",
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Gary Oldman"],
    genres: ["Action", "Crime", "Drama"],
    duration: 152,
    rating: 9.0,
    releaseDate: "2008-07-18",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: "4",
    title: "Pulp Fiction",
    synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    genres: ["Crime", "Drama"],
    duration: 154,
    rating: 8.9,
    releaseDate: "1994-10-14",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  },
  {
    id: "5",
    title: "The Godfather",
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    genres: ["Crime", "Drama"],
    duration: 175,
    rating: 9.2,
    releaseDate: "1972-03-24",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=sY1S34973zA"
  },
  {
    id: "6",
    title: "Fight Club",
    synopsis: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    genres: ["Drama"],
    duration: 139,
    rating: 8.8,
    releaseDate: "1999-10-15",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=SUXWAEX2jlg"
  },
  {
    id: "7",
    title: "Forrest Gump",
    synopsis: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    genres: ["Drama", "Romance"],
    duration: 142,
    rating: 8.8,
    releaseDate: "1994-07-06",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=bLvqoHBptjg"
  },
  {
    id: "8",
    title: "The Matrix",
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    genres: ["Action", "Sci-Fi"],
    duration: 136,
    rating: 8.7,
    releaseDate: "1999-03-31",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    id: "9",
    title: "Goodfellas",
    synopsis: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Lorraine Bracco"],
    genres: ["Biography", "Crime", "Drama"],
    duration: 146,
    rating: 8.7,
    releaseDate: "1990-09-21",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=qo5jJpHtI1Y"
  },
  {
    id: "10",
    title: "Interstellar",
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    genres: ["Adventure", "Drama", "Sci-Fi"],
    duration: 169,
    rating: 8.6,
    releaseDate: "2014-11-07",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    id: "11",
    title: "The Silence of the Lambs",
    synopsis: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine"],
    genres: ["Crime", "Drama", "Thriller"],
    duration: 118,
    rating: 8.6,
    releaseDate: "1991-02-14",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=W6Mm8Sbe__o"
  },
  {
    id: "12",
    title: "Schindler's List",
    synopsis: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    genres: ["Biography", "Drama", "History"],
    duration: 195,
    rating: 8.9,
    releaseDate: "1994-02-04",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=gG22XNhtnoY"
  }
];

// Function to get a movie by ID
export const getMovieById = (id: string): Movie | null => {
  return movies.find(movie => movie.id === id) || null;
};

// Coming soon movies (future releases)
export const comingSoonMovies: Movie[] = [
  {
    id: "101",
    title: "Dune: Part Two",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    duration: 155,
    rating: 8.5,
    releaseDate: "2024-03-01",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=Way9Dexny3w"
  },
 [
  {
    "id": "102",
    "title": "Final Destination: Bloodlines",
    "synopsis": "A college student experiences recurring nightmares foretelling her family's demise. Returning home, she seeks the person who can prevent the impending tragedy.",
    "director": "Zach Lipovsky, Adam Stein",
    "cast": ["Kaitlyn Santa Juana", "Teo Briones", "Richard Harmon", "Tony Todd"],
    "genres": ["Horror", "Thriller"],
    "duration": 110,
    "rating": 0,
    "releaseDate": "2025-05-16",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/8/8e/Final_Destination_Bloodlines_poster.jpg",
    "backdropUrl": "https://images.unsplash.com/photo-1636489120760-77d2c3d00e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
    "trailerUrl": "https://www.youtube.com/watch?v=4FA1SvhHGsk"
  },
  {
    "id": "103",
    "title": "28 Years Later",
    "synopsis": "Decades after the original outbreak, a new wave of horror emerges, threatening humanity once again. Survivors must navigate a world overrun by the infected.",
    "director": "Danny Boyle",
    "cast": ["Jodie Comer", "Cillian Murphy"],
    "genres": ["Horror", "Sci-Fi"],
    "duration": 120,
    "rating": 0,
    "releaseDate": "2025-06-20",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/9/9d/28_Years_Later_poster.jpg",
    "backdropUrl": "https://images.unsplash.com/photo-1621440315738-f08d3e318da3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
    "trailerUrl": "https://www.youtube.com/watch?v=c1v2-0b5zjs"
  },
  {
    "id": "104",
    "title": "Joker: Folie à Deux",
    "synopsis": "Sequel to the 2019 film 'Joker', exploring the complicated relationship between Arthur Fleck and Harley Quinn in a musical psychological thriller.",
    "director": "Todd Phillips",
    "cast": ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz", "Brendan Gleeson"],
    "genres": ["Drama", "Thriller", "Musical"],
    "duration": 140,
    "rating": 0,
    "releaseDate": "2024-10-04",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/5/5a/Joker_Folie_a_Deux_poster.jpg",
    "backdropUrl": "https://images.unsplash.com/photo-1603988367936-c248b5502b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
    "trailerUrl": "https://www.youtube.com/watch?v=xy8aJw1vYHo"
  }
]
 
];
