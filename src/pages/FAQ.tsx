import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { usePageViewMetrics } from '@/hooks/usePageViewMetrics';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  usePageViewMetrics();

  const faqs = [
    {
      question: "How do I book tickets online?",
      answer: "You can book tickets by browsing our movie listings, selecting your preferred movie, showtime, and seats. Follow the checkout process to complete your booking."
    },
    {
      question: "Can I cancel or change my booking?",
      answer: "Yes, you can cancel or modify your booking up to 2 hours before the showtime. Go to 'My Bookings' section in your account to make changes."
    },
    {
      question: "How do I get my tickets after booking online?",
      answer: "After booking, you'll receive an email confirmation with your e-ticket. You can either print this ticket or show the QR code on your phone at the cinema."
    },
    {
      question: "Are there any booking fees?",
      answer: "A small convenience fee is applied to online bookings. The exact amount will be displayed before you complete your purchase."
    },
    {
      question: "Do you offer discounts for students or seniors?",
      answer: "Yes, we offer special discounts for students, seniors, and children. Valid ID may be required when entering the cinema."
    },
    {
      question: "How do I redeem a promotion code?",
      answer: "During the checkout process, you'll see a field to enter your promotion code. Enter the code and the discount will be applied automatically."
    },
    {
      question: "What is your refund policy?",
      answer: "Refunds are processed to the original payment method within 5-7 business days for eligible cancellations (made at least 2 hours before showtime)."
    },
    {
      question: "Can I book seats for a group?",
      answer: "Yes, you can book multiple seats in a single transaction. There's no limit to the number of seats you can book, subject to availability."
    },
    {
      question: "How early should I arrive before the movie?",
      answer: "We recommend arriving at least 15-20 minutes before the showtime to allow time for parking, collecting tickets, and finding your seats."
    },
    {
      question: "Is there assigned seating?",
      answer: "Yes, all our theaters have assigned seating. You can select your preferred seats during the booking process."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-card rounded-lg border border-border/50">
            <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">
              If you couldn't find the answer to your question, please contact our customer support team.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="text-primary hover:underline">Contact Us</a>
              <span className="text-muted-foreground">•</span>
              <a href="tel:+15551234567" className="text-primary hover:underline">Call (555) 123-4567</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;