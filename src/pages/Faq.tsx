
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Faq = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I book movie tickets?</AccordionTrigger>
              <AccordionContent>
                You can book movie tickets by browsing our movies section, selecting the movie you want to watch, choosing your preferred showtime, and completing the booking process. Payment can be made using credit/debit cards or other supported payment methods.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I cancel or refund my tickets?</AccordionTrigger>
              <AccordionContent>
                Tickets can be canceled up to 4 hours before the showtime. Refunds will be processed to your original payment method within 3-5 business days. A small cancellation fee may apply depending on how close to the showtime you cancel.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Are there any discounts available?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer various discounts including student discounts (valid ID required), senior citizen discounts, matinee pricing for shows before 5 PM, and special promotional offers on Tuesdays. Check our promotions page for current deals.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>How can I become a premium member?</AccordionTrigger>
              <AccordionContent>
                You can sign up for our premium membership program through your account settings. Premium members enjoy benefits such as discounted tickets, free popcorn upgrades, exclusive preview screenings, and priority booking for blockbuster releases.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>What amenities are available at your theaters?</AccordionTrigger>
              <AccordionContent>
                Our theaters feature state-of-the-art sound systems, comfortable seating, and concession stands with a variety of food and beverages. Premium theaters also offer reclining seats, in-seat food service, and enhanced audio-visual experiences.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>Do you have accessible seating for guests with disabilities?</AccordionTrigger>
              <AccordionContent>
                Yes, all our theaters are equipped with accessible seating for guests with disabilities. These seats can be booked online or by contacting our customer service team. Companion seats are also available adjacent to wheelchair spaces.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </AppLayout>
  );
};

export default Faq;
