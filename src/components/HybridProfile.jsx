import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, Cpu, Terminal, Database, Server, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HybridProfile() {
  return (
    <section id="perfil" className="py-20 bg-slate-950 dark:bg-slate-50 text-slate-100 dark:text-slate-900 relative border-t border-slate-900 dark:border-slate-200 transition-colors">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Cabecera de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 dark:border-amber-500/40 text-amber-400 dark:text-amber-700 text-xs font-mono font-semibold uppercase tracking-widest transition-colors">
            <HardHat className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
            <span>Trayectoria & Experiencia Operativa</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-slate-900 transition-colors">
            Un Perfil Híbrido Único en el Mercado
          </h2>

          <p className="text-slate-400 dark:text-slate-600 text-xs sm:text-sm leading-relaxed font-light transition-colors">
            Combinamos más de 10 años de alta exigencia en operaciones mineras (BHP - Minera Escondida) con ingeniería de software moderna en Antofagasta, Chile.
          </p>
        </motion.div>

        {/* Bento Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tarjeta Izquierda: Experiencia en Terreno */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-slate-900/60 dark:bg-white border border-slate-800 dark:border-slate-200 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-xl transition-colors"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-100 border border-amber-500/30 dark:border-amber-300 flex items-center justify-center text-amber-400 dark:text-amber-700">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-slate-900 transition-colors">
                Rigor Industrial & Gestión de Recursos
              </h3>

              <p className="text-slate-300 dark:text-slate-700 text-xs sm:text-sm font-light leading-relaxed transition-colors">
                Haber liderado y operado en entornos críticos de la gran minería en <strong className="text-amber-400 dark:text-amber-700 font-semibold">Minera Escondida (BHP)</strong> nos otorga una perspectiva que ningunas otras agencias tienen: entendemos la prevención de riesgos, la optimización de tiempos muertos, el control de presupuestos y la eficiencia absoluta antes de escribir la primera línea de código.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800/80 dark:border-slate-200 font-mono text-xs text-slate-300 dark:text-slate-700">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 dark:text-amber-600 shrink-0" />
                <span>Gestión de proyectos bajo estándares mineros</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 dark:text-amber-600 shrink-0" />
                <span>Enfoque estricto en flujos libres de fallas</span>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta Derecha: Stack Tecnológico */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-slate-900/60 dark:bg-white border border-slate-800 dark:border-slate-200 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-xl transition-colors"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-100 border border-amber-500/30 dark:border-amber-300 flex items-center justify-center text-amber-400 dark:text-amber-700">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-slate-900 transition-colors">
                Stack Tecnológico de Vanguardia
              </h3>

              <p className="text-slate-300 dark:text-slate-700 text-xs sm:text-sm font-light leading-relaxed transition-colors">
                Construimos soluciones robustas y escalables utilizando arquitecturas limpias y tecnologías probadas en el ecosistema web actual.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="bg-slate-950 dark:bg-slate-100 border border-slate-800 dark:border-slate-300 p-3 rounded-xl space-y-1 transition-colors">
                <Terminal className="w-4 h-4 text-amber-400 dark:text-amber-600" />
                <p className="font-bold text-white dark:text-slate-900">React & Vite</p>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">Frontend UI</span>
              </div>

              <div className="bg-slate-950 dark:bg-slate-100 border border-slate-800 dark:border-slate-300 p-3 rounded-xl space-y-1 transition-colors">
                <Database className="w-4 h-4 text-amber-400 dark:text-amber-600" />
                <p className="font-bold text-white dark:text-slate-900">Supabase</p>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">PostgreSQL & Auth</span>
              </div>

              <div className="bg-slate-950 dark:bg-slate-100 border border-slate-800 dark:border-slate-300 p-3 rounded-xl space-y-1 transition-colors">
                <Server className="w-4 h-4 text-amber-400 dark:text-amber-600" />
                <p className="font-bold text-white dark:text-slate-900">Tailwind v4</p>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">Diseño Responsivo</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}