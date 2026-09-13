import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { About } from './components/About';
import { Services } from './components/Services';
import { SystemicQuiz } from './components/SystemicQuiz';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (serviceTitle?: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2E2420] antialiased selection:bg-[#E8D9CD] selection:text-[#3E251B]">
      {/* Navigation Header */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* High Conversion Hero Section */}
        <Hero onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Emotional Resonance / Pain Points */}
        <PainPoints onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Therapist Presentation / About Maze Gusmão & Method */}
        <About onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Services & Specialities */}
        <Services onSelectService={(service) => handleOpenBookingModal(service)} />

        {/* Interactive Self-Assessment Quiz */}
        <SystemicQuiz onOpenBookingModal={(service) => handleOpenBookingModal(service)} />

        {/* Transparent 4-Step Process */}
        <ProcessTimeline onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Social Proof & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Dedicated Booking Section */}
        <BookingForm preselectedService={selectedService} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      
      {/* Quick Booking Dialog Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseBookingModal}
        defaultService={selectedService}
      />
    </div>
  );
}
