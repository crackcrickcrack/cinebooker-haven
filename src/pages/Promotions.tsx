
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, TicketIcon, UsersIcon, CoinsIcon } from 'lucide-react';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: 'Midweek Special',
      description: 'Enjoy 30% off all movie tickets from Monday to Thursday. Perfect for date nights and casual outings!',
      code: 'MIDWEEK30',
      validUntil: 'December 31, 2025',
      type: 'Discount',
      category: 'All Movies'
    },
    {
      id: 2,
      title: 'Family Package',
      description: 'Buy 3 tickets and get 1 free, plus a large popcorn and soda combo at a discounted price.',
      code: 'FAMILY4FUN',
      validUntil: 'January 15, 2026',
      type: 'Bundle',
      category: 'Family Movies'
    },
    {
      id: 3,
      title: 'Student Discount',
      description: '25% off for students with valid ID. Available all week, including weekends and holidays!',
      code: 'STUDENT25',
      validUntil: 'Ongoing',
      type: 'Discount',
      category: 'All Movies'
    },
    {
      id: 4,
      title: 'Premium Experience',
      description: 'Upgrade to premium seating for the price of standard tickets every Tuesday.',
      code: 'PREMIUM2DAY',
      validUntil: 'February 28, 2026',
      type: 'Upgrade',
      category: 'IMAX & Dolby'
    },
    {
      id: 5,
      title: 'Birthday Special',
      description: 'Free movie ticket on your birthday! Register on our website and verify your birth date to claim.',
      code: 'HAPPYBDAY',
      validUntil: 'Ongoing',
      type: 'Free Ticket',
      category: 'All Movies'
    },
    {
      id: 6,
      title: 'Senior Citizens Offer',
      description: '40% off for seniors aged 65 and above. Valid ID required at ticket collection.',
      code: 'SENIOR40',
      validUntil: 'Ongoing',
      type: 'Discount',
      category: 'All Movies'
    }
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Special Offers & Promotions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our exclusive offers and save on your cinema experience. Use promo codes at checkout to redeem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <Card key={promo.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{promo.title}</CardTitle>
                  <Badge variant="outline">{promo.type}</Badge>
                </div>
                <CardDescription>{promo.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{promo.description}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>Valid until: {promo.validUntil}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="bg-muted p-3 rounded-md w-full text-center font-mono">
                  {promo.code}
                </div>
                <Button variant="default" className="w-full">
                  <TicketIcon className="h-4 w-4 mr-2" />
                  Apply Offer
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Promotions;
