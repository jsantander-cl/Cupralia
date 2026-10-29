import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Plus, ShoppingBag, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    id: 'landing',
    category: 'Frontend & Conversión',
    title: 'Landing Page de Alto Impacto',
    description: 'Sitio web ultra rápido, optimizado para conversión (CRO), diseño mobile-first y enfocado en captar clientes potenciales para tu negocio.',
    priceUSD: 250,
    features: [
      'Diseño Mobile-First impecable',
      'Optimización de velocidad y rendimiento',
      'Estructura orientada a ventas (Copywriting base)',
      'Despliegue y configuración en Vercel'
    ]
  },
  {
    id: 'fullstack',
    category: 'FullStack & Supabase',
    title: 'Aplicación Web & Dashboard',
    description: 'Plataforma web dinámica con autenticación, paneles interactivos, base de datos en tiempo real y flujos completos de administración.',
    priceUSD: 500,
    features: [
      'Base de datos PostgreSQL en Supabase',
      'Autenticación segura de usuarios',
      'Panel de administración a medida',
      'Integración de APIs y backend en Node.js'
    ]
  },
  {
    id: 'soluciones',
    category: 'Soluciones Operativas',
    title: 'Sistema de Control & Automatización',
    description: 'Digitalización de flujos de trabajo, automatización de procesos internos y reportes automáticos bajo criterio de gestión minera/industrial.',
    priceUSD: 400,
    features: [
      'Flujos de aprobación y formularios dinámicos',
      'Exportación de datos y reportes',
      'Criterio de arquitectura libre de fallas',
      'Capacitación y soporte de entrega'
    ]
  }
];

const ADDONS = [
  { id: 'seo', name: 'Optimización SEO Avanzada', priceUSD: 80 },
  { id: 'multilang', name: 'Soporte Multi-idioma (ES/EN)', priceUSD: 100 },
  { id: 'maintenance', name: 'Soporte y Mantenimiento Mensual', priceUSD: 60 }
];

export default function ServicesCart({ selectedServices = [], selectedAddons = [], onToggleService, onToggleAddon }) {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const servicesTotal = selectedServices.reduce((acc, id) => {
    const s = SERVICES.find(item => item.id === id);
    return acc + (s ? s.priceUSD : 0);
  }, 0);

  const addonsTotal = selectedAddons.reduce((acc, id) => {
    const a = ADDONS.find(item => item.id === id);
    return acc + (a ? a.priceUSD : 0);
  }, 0);

  const totalUSD = servicesTotal + addonsTotal;
  const totalCount = selectedServices.length + selectedAddons.length;

 const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (totalCount === 0) return;

    const chosenServicesNames = selectedServices.map(id => SERVICES.find(s => s.id === id)?.title).filter(Boolean);
    const chosenAddonsNames = selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).filter(Boolean);

    let msg = `*NUEVA COTIZACIÓN - CUPRALIA LABS*\n\n`;
    msg += `*Cliente / Empresa:* ${clientName || 'No especificado'}\n`;
    msg += `*Correo:* ${clientEmail || 'No especificado'}\n\n`;
    
    msg += `*Servicios Seleccionados:*\n`;
    msg += chosenServicesNames.map(s => `> ${s}`).join('\n') || '> Ninguno';
    
    if (chosenAddonsNames.length > 0) {
      msg += `\n\n*Módulos Complementarios:*\n`;
      msg += chosenAddonsNames.map(a => `> ${a}`).join('\n');
    }

    msg += `\n\n*Inversión Total Estimada:* *$${totalUSD} USD*\n\n`;
    msg += `_Hola Jordan, me interesa avanzar con esta cotización. ¿Podemos coordinar una reunión de alineación?_`;

    window.open(`https://wa.me/56953892756?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="servicios" className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Cotizador Interactivo en Tiempo Real</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Diseña tu Plan & Cotiza al Instante
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm font-light">
            Selecciona los servicios que tu negocio requiere. Transparencia total de precios y cierre directo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          <div className="lg:col-span-7 space-y-6">
            
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              01. Selecciona Servicios Base
            </h3>

            <div className="space-y-4">
              {SERVICES.map((s) => {
                const isSelected = selectedServices.includes(s.id);

                return (
                  <div
                    key={s.id}
                    onClick={() => onToggleService(s.id)}
                    className={`p-5 sm:p-6 rounded-3xl border transition-all cursor-pointer relative overflow-hidden ${
                      isSelected 
                        ? 'bg-amber-950/20 border-amber-500/80 shadow-xl shadow-amber-500/10' 
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex flex-col space-y-2 mb-3">
                      <span className="self-start text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                        {s.category}
                      </span>
                      
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-white pr-4">{s.title}</h4>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-amber-600 border-amber-500 text-slate-950 font-bold' : 'border-slate-700'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 text-slate-950" />}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-4 font-light">
                      {s.description}
                    </p>

                    <ul className="space-y-2 text-xs text-slate-300 font-mono mb-4 border-t border-slate-800/60 pt-3">
                      {s.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs font-mono">
                      <span className="text-slate-400">Inversión base:</span>
                      <span className="text-base font-bold text-amber-400">${s.priceUSD} USD</span>
                    </div>

                  </div>
                );
              })}
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                02. Módulos Complementarios (Opcionales)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ADDONS.map((a) => {
                  const isSelected = selectedAddons.includes(a.id);

                  return (
                    <div
                      key={a.id}
                      onClick={() => onToggleAddon(a.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected 
                          ? 'bg-amber-950/30 border-amber-500/60 text-white' 
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <p className="text-xs font-bold font-mono">{a.name}</p>
                        <p className="text-[10px] font-mono text-amber-400">+${a.priceUSD} USD</p>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-amber-600 border-amber-500 text-slate-950' : 'border-slate-700'
                      }`}>
                        {isSelected ? <Check className="w-3 h-3 text-slate-950 font-bold" /> : <Plus className="w-3 h-3 text-slate-500" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 sticky top-24 self-start mt-8">
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-amber-400 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight whitespace-nowrap">
                    Resumen de Cotización
                  </h3>
                </div>

                <div className="bg-slate-950 px-3 py-1 rounded-full border border-slate-800 text-xs font-mono text-amber-400 flex items-center space-x-1 shrink-0">
                  <span className="font-bold">{totalCount}</span>
                  <span className="text-[11px] text-slate-400">ítems</span>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono">
                {totalCount === 0 ? (
                  <p className="text-slate-500 text-center py-6 font-sans">
                    No has seleccionado servicios aún. Haz clic en las tarjetas para agregar a la cotización.
                  </p>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {selectedServices.map(id => {
                      const item = SERVICES.find(s => s.id === id);
                      return (
                        <div key={id} className="flex justify-between items-center text-slate-300 py-1 border-b border-slate-800/40">
                          <span className="truncate pr-2">{item?.title}</span>
                          <span className="text-amber-400 font-bold">${item?.priceUSD}</span>
                        </div>
                      );
                    })}
                    {selectedAddons.map(id => {
                      const item = ADDONS.find(a => a.id === id);
                      return (
                        <div key={id} className="flex justify-between items-center text-slate-400 py-1 border-b border-slate-800/40">
                          <span className="truncate pr-2">+ {item?.name}</span>
                          <span className="text-orange-400 font-bold">${item?.priceUSD}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Inversión Total:</span>
                <span className="text-2xl font-black text-amber-400 font-mono">${totalUSD} USD</span>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-3 pt-2">
                <input 
                  type="text" 
                  placeholder="Tu Nombre o Empresa"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                />
                <input 
                  type="email" 
                  placeholder="Tu Correo Electrónico"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                />

                <button
                  type="submit"
                  disabled={totalCount === 0}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-bold text-xs font-mono uppercase tracking-widest transition-all ${
                    totalCount > 0 
                      ? 'bg-amber-600 hover:bg-amber-500 text-slate-950 shadow-lg shadow-amber-600/30 cursor-pointer font-extrabold' 
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>Enviar Cotización vía WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Respuesta directa en menos de 24 horas.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}