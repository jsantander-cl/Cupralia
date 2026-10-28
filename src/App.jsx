import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesCart from './components/ServicesCart';
import HybridProfile from './components/HybridProfile';
import Portfolio from './components/Portfolio';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleToggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleToggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const totalSelectedCount = selectedServices.length + selectedAddons.length;

  const scrollToServices = () => {
    const section = document.getElementById('servicios');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative w-full">
      <Navbar selectedCount={totalSelectedCount} onOpenCart={scrollToServices} />
      <Hero />
      <ServicesCart 
        selectedServices={selectedServices}
        selectedAddons={selectedAddons}
        onToggleService={handleToggleService}
        onToggleAddon={handleToggleAddon}
      />
      <HybridProfile />
      <Portfolio />
      <ContactSection />
      <Footer />

      {/* Botón Flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}