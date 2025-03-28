
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import { getShowtimeById, getMovieById, getTheaterById } from '@/data/mockData';
import { Movie, Showtime, Theater, Screen } from '@/types/cinema';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, MapPin, User, CreditCard } from 'lucide-react';
import { format } from 'date-fns';
import SeatMap from '@/components/booking/SeatMap';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showtime, setShowtime] = useState<Showtime | null>(null);
  const [theater, setTheater] = useState<Theater | null>(null);
  const [screen, setScreen] = useState<Screen | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  useEffect(() => {
    if (id) {
      const showtimeData = getShowtimeById(id);
      
      if (showtimeData) {
        setShowtime(showtimeData);
        
        const movieData = getMovieById(showtimeData.movieId);
        if (movieData) {
          setMovie(movieData);
        }
        
        const theaterData = getTheaterById(showtimeData.theaterId);
        if (theaterData) {
          setTheater(theaterData);
          const screenData = theaterData.screens.find(s => s.id === showtimeData.screenId);
          if (screenData) {
            setScreen(screenData);
          }
        }
      }
    }
  }, [id]);
  
  const handleSeatSelection = (seats: string[]) => {
    setSelectedSeats(seats);
  };
  
  const calculateTotal = () => {
    if (!showtime || !screen) return 0;
    
    let total = 0;
    selectedSeats.forEach(seatId => {
      // Check if the seat is premium
      const isPremium = screen.seatsLayout.some(row => 
        row.seats.some(seat => seat.id === seatId && seat.type === 'premium')
      );
      
      total += isPremium ? showtime.price.premium : showtime.price.standard;
    });
    
    return total;
  };
  
  const handleProceedToPayment = () => {
    if (selectedSeats.length === 0) {
      toast({
        title: "No seats selected",
        description: "Please select at least one seat to continue.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would navigate to a payment page
    // For now, we'll just show a success toast
    toast({
      title: "Booking successful!",
      description: `You have booked ${selectedSeats.length} seats for ${movie?.title}.`,
    });
    
    // Navigate to a confirmation page or back to home
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
  
  if (!movie || !showtime || !theater || !screen) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Loading booking details...</h1>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Select Your Seats</h1>
          
          <div className="bg-card p-4 rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="mr-3 bg-muted rounded-md p-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Date & Time</div>
                  <div className="font-medium">
                    {format(new Date(showtime.startTime), 'EEEE, MMMM d, yyyy')}
                  </div>
                  <div className="font-medium">
                    {format(new Date(showtime.startTime), 'h:mm a')}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 bg-muted rounded-md p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Theater</div>
                  <div className="font-medium">{theater.name}</div>
                  <div className="text-sm">{screen.name}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 bg-muted rounded-md p-2">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Movie</div>
                  <div className="font-medium">{movie.title}</div>
                  <div className="text-sm">{movie.duration} min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SeatMap 
              seatsLayout={screen.seatsLayout} 
              onSelectSeats={handleSeatSelection} 
            />
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Movie</span>
                    <span className="font-medium">{movie.title}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span>{format(new Date(showtime.startTime), 'MMM d, yyyy')}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span>{format(new Date(showtime.startTime), 'h:mm a')}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Theater</span>
                    <span>{theater.name} - {screen.name}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seats</span>
                    <span>
                      {selectedSeats.length > 0 
                        ? selectedSeats.join(', ') 
                        : 'None selected'}
                    </span>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Amount</span>
                      <span className="text-xl font-bold">
                        ${calculateTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  disabled={selectedSeats.length === 0}
                  onClick={handleProceedToPayment}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Booking;
