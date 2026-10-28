import React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HybridProfile() {
  const stackItems = [
    {
      category: 'Frontend & Responsive',
      techs: 'React, TypeScript, Tailwind v4',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      category: 'Backend & Base de Datos',
      techs: 'Node.js, Express, Supabase (PostgreSQL)',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      category: 'Entorno & Despliegue',
      techs: 'Git, GitHub, Vercel, Vite',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  return (
    <section id="perfil" className="py-20 bg-slate-950 border-t border-slate-900 text-slate-100 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: HISTORIA Y DIFERENCIAL */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>Experiencia Comprobable</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              ¿Por qué elegir un perfil híbrido para tu proyecto web?
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              Más de 10 años gestionando operaciones críticas, recursos humanos y flujos documentales en la gran minería (BHP - Minera Escondida) me otorgan un criterio único de producto. No solo escribo código limpio en React y Node.js; entiendo los problemas reales de los negocios y los traduzco en soluciones digitales eficientes.
            </p>

            {/* Puntos clave */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rigor Operativo y Puntualidad</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enfoque en Conversión y UX</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Arquitectura Limpia & Escalable</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atención Personalizada Directa</span>
              </div>
            </div>

            {/* Botones centrados perfectamente en Mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 pt-4">
              <a 
                href="https://github.com/jsantander-cl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs font-mono font-bold text-blue-400 hover:text-blue-300 bg-blue-500/10 px-6 py-3.5 rounded-xl border border-blue-500/20 transition-all hover:bg-blue-500/20"
              >
                <span>Ver Repositorio GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a 
                href="https://www.linkedin.com/in/jordans-phillips/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs font-mono font-bold text-slate-300 hover:text-white bg-slate-900 px-6 py-3.5 rounded-xl border border-slate-800 transition-all hover:bg-slate-800"
              >
                <span>Perfil LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: BENTO CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-5 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2.5">
                  <Terminal className="w-5 h-5 text-blue-400" />
                  <h3 className="text-base font-bold text-white">Stack Tecnológico Activo</h3>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>

              <div className="space-y-3">
                {stackItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-slate-950/70 rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <span className="text-xs font-mono text-slate-400">{item.category}</span>
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${item.badgeColor}`}>
                      {item.techs}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Antofagasta, Chile</span>
                <span className="flex items-center space-x-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Disponible para proyectos</span>
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}