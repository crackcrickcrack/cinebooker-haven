
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TicketIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Bookings: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock data for bookings - in a real app, this would come from an API
  const bookings = [
    {
      id: 'b001',
      movieTitle: 'Avengers: Endgame',
      date: '2025-04-15',
      time: '7:30 PM',
      theater: 'CineBooker Central',
      seats: ['G7', 'G8'],
      ticketCode: 'CB15790234'
    },
    {
      id: 'b002',
      movieTitle: 'The Dark Knight',
      date: '2025-04-20',
      time: '8:00 PM',
      theater: 'CineBooker West',
      seats: ['D12', 'D13', 'D14'],
      ticketCode: 'CB15792567'
    }
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">My Bookings</h1>
          <Button onClick={() => navigate('/movies')} className="flex items-center gap-2">
            <TicketIcon className="h-4 w-4" />
            Book More Tickets
          </Button>
        </div>

        {bookings.length > 0 ? (
          <div className="grid gap-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="overflow-hidden">
                <CardHeader className="bg-primary/5 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{booking.movieTitle}</CardTitle>
                      <CardDescription>
                        {booking.date} | {booking.time} | {booking.theater}
                      </CardDescription>
                    </div>
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Seats</p>
                      <p className="font-medium">{booking.seats.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ticket Code</p>
                      <p className="font-medium">{booking.ticketCode}</p>
                    </div>
                    <div className="flex items-end justify-end md:justify-start">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <TicketIcon className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">No bookings found</h3>
            <p className="mt-2 text-muted-foreground">
              You don't have any active bookings at the moment.
            </p>
            <Button onClick={() => navigate('/movies')} className="mt-4">
              Book Tickets
            </Button>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Bookings;
