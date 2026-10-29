import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const pinnedRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: pinnedRef,
    offset: ["start start", "end end"]
  });

  const steps = [
    {
      id: "intro",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90"
    },
    {
      id: "step1",
      number: "01 / 03",
      tag: "IDENTIDAD OPERATIVA",
      headline: "VISIÓN DE NEGOCIO",
      subheadline: "Construido sobre experiencia real en terreno.",
      description: "Más de 10 años gestionando operaciones complejas y recursos humanos en la gran minería (BHP - Minera Escondida) en Antofagasta. Entendemos los cuellos de botella de tu empresa antes de escribir la primera línea de código.",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=90"
    },
    {
      id: "step2",
      number: "02 / 03",
      tag: "PRECISIÓN TÉCNICA",
      headline: "ARQUITECTURA MODERNA",
      subheadline: "Desarrollo FullStack sin sobrecarga.",
      description: "Desarrollo moderno impulsado por React, TypeScript, Tailwind CSS v4 y Supabase. Interfaces hiperrápidas, estructuradas para escalar y optimizadas para mobile-first.",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=90"
    },
    {
      id: "step3",
      number: "03 / 03",
      tag: "CONVERSIÓN DIGITAL",
      headline: "CAPTACIÓN & VENTAS",
      subheadline: "Diseñado para convertir desde el día uno.",
      description: "Sistemas construidos para convertir visitantes casuales en clientes reales. Incluye un cotizador dinámico en vivo para agilizar y cerrar solicitudes de proyectos.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=90"
    }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.22) {
        setActiveStep(0);
      } else if (latest < 0.48) {
        setActiveStep(1);
      } else if (latest < 0.74) {
        setActiveStep(2);
      } else {
        setActiveStep(3);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToServices = () => {
    const section = document.getElementById('servicios');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-slate-950 dark:bg-slate-50 text-slate-100 dark:text-slate-900 font-sans selection:bg-amber-600 selection:text-white w-full transition-colors">
      
      <section ref={pinnedRef} id="experiencia-hero-pinned" className="relative h-[300vh] bg-slate-950 dark:bg-slate-50 w-full transition-colors">
        
        <div className="sticky top-16 h-[calc(100vh-4rem)] w-full flex flex-col justify-between p-4 sm:p-8 lg:px-16 lg:py-8 overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0 overflow-hidden"
            >
              <img 
                src={steps[activeStep].bgImage} 
                alt="Background"
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1]"
              />
              {/* Degradados adaptables para ambos modos */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 dark:from-slate-100 via-slate-950/40 dark:via-slate-100/40 to-slate-950/70 dark:to-slate-100/70 transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 dark:from-slate-100/90 via-slate-950/40 dark:via-slate-100/40 to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto pt-1 gap-2">
            {activeStep === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-white/90 backdrop-blur-md border border-amber-500/20 dark:border-amber-500/40 text-amber-400 dark:text-amber-700 text-[10px] sm:text-xs font-semibold tracking-wider uppercase shadow-xl transition-colors"
              >
                <Sparkles className="w-3 h-3 shrink-0 animate-pulse text-amber-400 dark:text-amber-600" />
                <span>Atelier de Software & Soluciones Web</span>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2"
              >
                <span className="text-xl sm:text-2xl font-black font-mono text-amber-400 dark:text-amber-600 tracking-tighter">
                  {steps[activeStep].number}
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-200 dark:text-slate-800 uppercase tracking-wider bg-slate-900/90 dark:bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30 dark:border-amber-500/40 shadow-xl transition-colors">
                  {steps[activeStep].tag}
                </span>
              </motion.div>
            )}

            <div className="flex items-center space-x-2 bg-slate-900/80 dark:bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 dark:border-slate-200 shadow-xl transition-colors">
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 dark:text-slate-600 uppercase hidden sm:inline">PROGRESO</span>
              <div className="flex items-center space-x-1">
                {[1, 2, 3].map((stepIdx) => (
                  <div 
                    key={stepIdx}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeStep === stepIdx ? 'w-5 bg-amber-500' : 'w-1.5 bg-slate-700/80 dark:bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-2">
            <AnimatePresence mode="wait">
              {activeStep === 0 ? (
                <motion.div 
                  key="hero-intro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl space-y-4 sm:space-y-6"
                >
                  <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white dark:text-slate-900 leading-tight sm:leading-[1.05] transition-colors">
                    SOFTWARE CON <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 dark:from-amber-600 dark:via-amber-700 dark:to-orange-700">
                      PROPÓSITO & RIGOR.
                    </span>
                  </h1>

                  <p className="text-slate-300 dark:text-slate-700 text-xs sm:text-lg max-w-2xl font-light leading-relaxed transition-colors">
                    Fusionamos la disciplina de más de 10 años en operaciones mineras (BHP) con el desarrollo FullStack de alta gama. Soluciones sin artificios para empresas exigentes.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      onClick={scrollToServices}
                      className="group inline-flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-500 text-slate-950 dark:text-white font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded-xl shadow-xl shadow-amber-600/30 transition-all cursor-pointer"
                    >
                      <span>Armar Cotización Web</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-600 flex items-center justify-center space-x-1.5 pt-1 sm:pt-0 transition-colors">
                      <span>Desliza para comenzar</span>
                      <ChevronDown className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600 animate-bounce" />
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key={`step-${activeStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl space-y-4"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-semibold text-amber-400 dark:text-amber-600 tracking-widest uppercase block transition-colors">
                      {steps[activeStep].subheadline}
                    </span>
                    <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white dark:text-slate-900 leading-tight transition-colors">
                      {steps[activeStep].headline}
                    </h2>
                  </div>

                  <p className="text-slate-300 dark:text-slate-700 text-xs sm:text-lg font-light leading-relaxed max-w-2xl transition-colors">
                    {steps[activeStep].description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={scrollToServices}
                      className="group inline-flex items-center space-x-2 text-[11px] sm:text-xs font-bold font-mono uppercase tracking-widest text-amber-400 dark:text-amber-700 hover:text-amber-300 bg-slate-900/90 dark:bg-white/90 hover:bg-slate-800/90 dark:hover:bg-slate-100 px-5 py-3 rounded-xl border border-amber-500/30 dark:border-amber-500/40 shadow-xl transition-all cursor-pointer"
                    >
                      <span>Cotizar Módulo</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center w-full max-w-7xl mx-auto pt-2 border-t border-slate-800/40 dark:border-slate-300/40 text-[10px] sm:text-xs font-mono text-slate-400 dark:text-slate-600 gap-2 transition-colors">
            <span className="truncate text-left">Jordan Santander — FullStack & Ops</span>
            <span className="text-amber-400 dark:text-amber-600 font-semibold animate-pulse text-center justify-self-center">Sigue deslizando ↓</span>
          </div>

        </div>

      </section>

    </div>
  );
}