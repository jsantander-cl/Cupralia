import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  ChevronDown, 
  Send, 
  HelpCircle,
  MapPin
} from 'lucide-react';

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FAQS = [
  {
    question: "¿Cómo funciona el proceso de desarrollo y cotización?",
    answer: "Una vez que armas tu cotización en vivo desde nuestro configurador o nos escribes por WhatsApp, revisamos los requerimientos técnicos y coordinamos una reunión de alineación. Definimos entregables claros, plazos y comenzamos con el desarrollo por fases con revisiones continuas."
  },
  {
    question: "¿Cuánto tiempo toma tener una Landing Page o Aplicación lista?",
    answer: "Una Landing Page de alto impacto toma habitualmente entre 5 a 10 días hábiles. Proyectos FullStack más complejos o dashboards con base de datos varían entre 2 a 4 semanas, dependiendo de los módulos requeridos."
  },
  {
    question: "¿Cómo son las modalidades de pago?",
    answer: "Trabajamos estándar 50% al inicio del proyecto y el 50% contra entrega e instalación final en producción. Aceptamos transferencias bancarias y facilidades de pago convenidas."
  },
  {
    question: "¿Ofreces soporte y mantenimiento posterior?",
    answer: "Sí. Todos los proyectos incluyen 30 días de garantía y soporte técnico post-entrega. Adicionalmente, puedes contratar planes opcionales de mantenimiento continuo o actualización de contenidos."
  }
];

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleDirectMessage = (e) => {
    e.preventDefault();
    const text = `Hola Jordan! Te contacto desde tu web.\n\n*Nombre:* ${name || 'No especificado'}\n*Email:* ${email || 'No especificado'}\n*Mensaje:* ${message || 'Consulta general'}`;
    window.open(`https://wa.me/56953892756?text=${encodeURIComponent(text)}`, '_blank'); 
  };

  return (
    <section id="contacto" className="py-20 bg-slate-950 dark:bg-slate-50 text-slate-100 dark:text-slate-900 relative border-t border-slate-900 dark:border-slate-200 overflow-hidden transition-colors">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 dark:border-amber-500/40 text-amber-400 dark:text-amber-700 text-xs font-mono font-semibold uppercase tracking-widest transition-colors">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
            <span>Contacto Directo & FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-slate-900 transition-colors">
            Hablemos de tu Próximo Proyecto
          </h2>

          <p className="text-slate-400 dark:text-slate-600 text-xs sm:text-sm leading-relaxed font-light transition-colors">
            Respuestas rápidas, comunicación fluida sin intermediarios y atención personalizada desde Antofagasta, Chile. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            
            <a 
              href="https://wa.me/56953892756" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/60 dark:bg-white border border-slate-800 dark:border-slate-200 hover:border-emerald-500/50 hover:bg-slate-900 dark:hover:bg-slate-50 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-100 border border-emerald-500/20 flex items-center justify-center text-emerald-400 dark:text-emerald-700 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500">WhatsApp / Teléfono</span> 
                  <h4 className="text-sm font-bold text-white dark:text-slate-900 font-mono transition-colors">+56 9 5389 2756</h4> 
                  <p className="text-[11px] text-slate-400 dark:text-slate-600 transition-colors">Respuesta inmediata en horario hábil</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 dark:text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a 
              href="mailto:j.santanderph@gmail.com" 
              className="p-5 rounded-2xl bg-slate-900/60 dark:bg-white border border-slate-800 dark:border-slate-200 hover:border-amber-500/50 hover:bg-slate-900 dark:hover:bg-slate-50 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-100 border border-amber-500/20 flex items-center justify-center text-amber-400 dark:text-amber-700 group-hover:bg-amber-600 group-hover:text-white dark:group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500">Correo Electrónico</span>
                  <h4 className="text-sm font-bold text-white dark:text-slate-900 font-mono transition-colors">j.santanderph@gmail.com</h4> 
                  <p className="text-[11px] text-slate-400 dark:text-slate-600 transition-colors">Propuestas detalladas y cotizaciones</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 dark:text-amber-700 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a 
              href="https://www.instagram.com/jp_frontend/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/60 dark:bg-white border border-slate-800 dark:border-slate-200 hover:border-pink-500/50 hover:bg-slate-900 dark:hover:bg-slate-50 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 dark:bg-pink-100 border border-pink-500/20 flex items-center justify-center text-pink-400 dark:text-pink-700 group-hover:bg-pink-600 group-hover:text-white dark:group-hover:text-white transition-all">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500">Instagram Oficial</span> 
                  <h4 className="text-sm font-bold text-white dark:text-slate-900 font-mono transition-colors">@jp_frontend</h4> 
                  <p className="text-[11px] text-slate-400 dark:text-slate-600 transition-colors">Proceso, tips de UI/UX y novedades</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-pink-400 dark:text-pink-600 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <div className="p-4 rounded-2xl bg-slate-950 dark:bg-slate-100 border border-slate-900 dark:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-600 transition-colors">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 dark:text-amber-600" />
                <span>Antofagasta, II Región, Chile</span> 
              </div>
              <span className="flex items-center space-x-1 text-emerald-400 dark:text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Activo</span>
              </span>
            </div>

          </div>

          <div className="lg:col-span-7">
            <motion.form 
              onSubmit={handleDirectMessage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/90 dark:bg-white/95 backdrop-blur-md border border-slate-800 dark:border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 transition-colors"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 dark:border-slate-200 transition-colors">
                <h3 className="text-base font-bold text-white dark:text-slate-900 transition-colors">Enviar Mensaje Directo</h3>
                <span className="text-xs font-mono text-emerald-400 dark:text-emerald-700 bg-emerald-500/10 dark:bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-500/20 dark:border-emerald-300 transition-colors">
                  Respuesta en {"< 24h"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 dark:text-slate-600">Nombre o Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Juan Pérez" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950 dark:bg-slate-50 border border-slate-800 dark:border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-200 dark:text-slate-900 placeholder-slate-600 dark:placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 dark:text-slate-600">Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="ejemplo@empresa.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 dark:bg-slate-50 border border-slate-800 dark:border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-200 dark:text-slate-900 placeholder-slate-600 dark:placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 dark:text-slate-600">¿En qué consiste tu idea o proyecto?</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntame brevemente qué necesitas (tipo de web, requerimientos especiales, fechas probables)..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-950 dark:bg-slate-50 border border-slate-800 dark:border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-200 dark:text-slate-900 placeholder-slate-600 dark:placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-500 text-slate-950 dark:text-white font-extrabold text-xs tracking-widest uppercase py-4 rounded-xl shadow-lg shadow-amber-600/30 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta por WhatsApp</span>
              </button>
            </motion.form>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 dark:border-slate-200 space-y-6 max-w-4xl mx-auto transition-colors">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-600 flex items-center justify-center space-x-1.5 transition-colors">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400 dark:text-amber-600" />
              <span>Resolver tus dudas</span>
            </span>
            <h3 className="text-2xl font-bold text-white dark:text-slate-900 transition-colors">Preguntas Frecuentes</h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div 
                  key={idx}
                  className="bg-slate-900/60 dark:bg-white border border-slate-800 dark:border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/90 dark:hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-200 dark:text-slate-900 transition-colors">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-amber-400 dark:text-amber-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 pt-0 text-xs text-slate-400 dark:text-slate-600 font-light leading-relaxed border-t border-slate-800/50 dark:border-slate-200 transition-colors"
                      >
                        <p className="pt-3">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}