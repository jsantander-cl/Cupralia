import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesCart from './components/ServicesCart';
import HybridProfile from './components/HybridProfile';
import Portfolio from './components/Portfolio';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import IntroSplash from './components/IntroSplash';

export default function App() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [showIntro, setShowIntro] = useState(true); // Controla el estado del video de inicio

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

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
      {/* Pantalla de Carga Inicial con Video */}
      {showIntro && <IntroSplash onFinish={() => setShowIntro(false)} />}

      {/* El Navbar y el botón de WhatsApp solo se muestran cuando termina la intro */}
      {!showIntro && (
        <>
          <Navbar selectedCount={totalSelectedCount} onOpenCart={scrollToServices} />
          <WhatsAppButton />
        </>
      )}

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

      {/* Banner de Consentimiento de Cookies */}
      <CookieConsent />
    </div>
  );
}