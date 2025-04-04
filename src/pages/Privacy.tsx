
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';

const Privacy = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="max-w-4xl mx-auto prose">
          <p className="text-muted-foreground mb-6">
            Last updated: April 4, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p>
              CineBooker ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, or any of our services.
            </p>
            <p className="mt-2">
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <p>
              We may collect several types of information from and about users of our services, including:
            </p>
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>Personal Information: Name, email address, postal address, phone number, date of birth, and payment information.</li>
              <li>Transaction Information: Details about tickets purchased, movie preferences, and other purchases or transactions.</li>
              <li>Device Information: Information about your device, IP address, browser type, and operating system.</li>
              <li>Usage Data: Information about how you use our website, app, and services.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>Process transactions and send related information including confirmations and receipts</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Notify you about changes to our services</li>
              <li>Allow you to participate in interactive features of our services</li>
              <li>Provide customer support</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Send promotional communications, such as special offers or other marketing content</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. How We Share Your Information</h2>
            <p>
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>With service providers who perform services on our behalf</li>
              <li>With theaters and movie studios to fulfill your ticket purchases</li>
              <li>To comply with applicable laws and regulations</li>
              <li>To respond to legal processes or protect our rights</li>
              <li>In connection with a merger, acquisition, or sale of our assets</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to deletion of your information</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our services and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <p className="mt-2">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              privacy@cinebooker.com<br />
              CineBooker Privacy Department<br />
              123 Cinema Street<br />
              Los Angeles, CA 90028
            </p>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default Privacy;
