
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';

const Terms = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="max-w-4xl mx-auto prose">
          <p className="text-muted-foreground mb-6">
            Last updated: April 4, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the CineBooker website, mobile application, or any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting an update on our website. Your continued use of our services following any changes constitutes your acceptance of the new terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Account Registration</h2>
            <p>
              To access certain features of our service, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account and to update your information to keep it accurate and current.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Ticket Purchases</h2>
            <p>
              All ticket sales are final. Refunds or exchanges may be provided at our discretion in accordance with our refund policy. You are responsible for verifying the accuracy of your ticket purchase, including the movie title, showtime, date, and theater location before completing your transaction.
            </p>
            <p className="mt-2">
              E-tickets must be presented at the theater, either printed or on a mobile device. We reserve the right to verify your identity when presenting tickets.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Prohibited Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>Use our services for any illegal purpose or in violation of any laws</li>
              <li>Attempt to interfere with or disrupt the operation of our services</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Engage in any form of automated data collection without our prior consent</li>
              <li>Share your account credentials with others or allow others to use your account</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
            <p>
              All content included on our website and mobile applications, such as text, graphics, logos, images, and software, is the property of CineBooker or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, CineBooker shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@cinebooker.com or through our Contact page.
            </p>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default Terms;
