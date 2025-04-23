export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  synopsis: string;
  rating: number;
  duration: number;
  releaseDate: string;
  genres: string[];
  director: string;
  cast: string[];
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  screens: Screen[];
}

export interface Screen {
  id: string;
  name: string;
  capacity: number;
  features: string[];
}

export interface Showtime {
  id: string;
  movieId: string;
  theaterId: string;
  screenId: string;
  date: string;
  time: string;
  price: number;
  availableSeats: number;
}

export interface Booking {
  id: string;
  userId: string;
  showtimeId: string;
  movieId: string;
  theaterId: string;
  seats: string[];
  totalPrice: number;
  bookingDate: string;
  status: "confirmed" | "pending" | "cancelled";
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  bookings: string[];
}