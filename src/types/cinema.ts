export interface Movie {
id: string;
title: string;
synopsis: string;
director: string;
cast: string[];
genres: string[];
duration: number;
rating: number;
releaseDate: string;
posterUrl: string;
backdropUrl: string;
trailerUrl?: string;
}

export interface Theater {
id: string;
name: string;
address: string;
image: string;
features: string[];
screens: number;
rating: number;
}

export interface Showtime {
id: string;
movieId: string;
theaterId: string;
screen: string;
date: string;
time: string;
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
status: "confirmed" | "cancelled" | "pending";
}

export interface Promotion {
id: string;
title: string;
description: string;
imageUrl: string;
validFrom: string;
validTo: string;
discountType: "percentage" | "fixed";
discountValue: number;
code: string;
}

export interface User {
id: string;
name: string;
email: string;
profilePicture?: string;
}
