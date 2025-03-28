
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  releaseDate: string;
  duration: number; // in minutes
  rating: number; // out of 10
  genres: string[];
  synopsis: string;
  director: string;
  cast: string[];
  trailerUrl?: string;
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
  seatsLayout: SeatRow[];
  features: string[]; // IMAX, Dolby, etc.
}

export interface SeatRow {
  row: string;
  seats: Seat[];
}

export interface Seat {
  id: string;
  number: number;
  type: 'standard' | 'premium' | 'handicap';
  status: 'available' | 'reserved' | 'selected';
}

export interface Showtime {
  id: string;
  movieId: string;
  theaterId: string;
  screenId: string;
  startTime: string; // ISO date string
  endTime: string; // ISO date string
  price: {
    standard: number;
    premium: number;
  };
}

export interface Booking {
  id: string;
  userId: string;
  showtimeId: string;
  seats: string[]; // Array of seat IDs
  totalAmount: number;
  bookingDate: string; // ISO date string
  status: 'confirmed' | 'cancelled' | 'pending';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  bookings?: string[]; // Array of booking IDs
}
