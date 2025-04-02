
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPinIcon, PhoneIcon, ClockIcon, StarIcon } from 'lucide-react';

// Mock theater data
const theaters = [
  {
    id: 1,
    name: 'Grand Cineplex',
    location: '123 Main Street, Downtown',
    phone: '+1 (555) 123-4567',
    features: ['IMAX', 'Dolby Atmos', 'VIP Seating'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070',
  },
  {
    id: 2,
    name: 'City Center Movies',
    location: '456 Broadway Ave, Uptown',
    phone: '+1 (555) 987-6543',
    features: ['3D', 'Premium Lounge', 'Restaurant'],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070',
  },
  {
    id: 3,
    name: 'Starlite Theater',
    location: '789 Parkway Dr, Westside',
    phone: '+1 (555) 456-7890',
    features: ['4DX', 'Recliner Seats', 'Bar Service'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=2079',
  },
  {
    id: 4,
    name: 'Riverside Cinema',
    location: '321 River Road, Eastside',
    phone: '+1 (555) 234-5678',
    features: ['IMAX', 'Arcade', 'Cafe'],
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070',
  },
];

const Theaters = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Our Theaters</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience movies like never before at our state-of-the-art theaters with premium amenities and cutting-edge technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {theaters.map((theater) => (
            <Card key={theater.id} className="overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${theater.image})` }}
              />
              <CardHeader>
                <CardTitle>{theater.name}</CardTitle>
                <CardDescription className="flex items-center mt-1">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {theater.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {theater.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">{feature}</Badge>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <PhoneIcon className="h-4 w-4 mr-1" />
                    {theater.phone}
                  </span>
                  <span className="flex items-center">
                    <StarIcon className="h-4 w-4 mr-1 text-amber-500" />
                    {theater.rating}/5
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full">View Showtimes</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Theaters;
