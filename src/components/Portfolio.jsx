import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, ShoppingCart, Scale, Music, Store, Sparkles, Building2 } from 'lucide-react';

const PROJECTS = [
  {
    id: 'arka-record',
    category: 'Frontend / Multimedia',
    title: 'Arka Record',
    description: 'Plataforma web oficial para sello discográfico y producción musical, con diseño inmersivo y showcase multimedia.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'UI/UX'],
    liveUrl: 'https://arkarecord.com',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    icon: Music
  },
  {
    id: 'go2store',
    category: 'E-Commerce / Retail',
    title: 'Go2Store Chile',
    description: 'Plataforma de comercio electrónico orientada a ventas, catálogo de productos y experiencia de compra optimizada.',
    tags: ['E-Commerce', 'Responsive', 'CRO', 'Web Platform'],
    liveUrl: 'https://go2store.cl',
    image: 'https://go2store.cl/cdn/shop/files/SNOW_CompletaGAS.png?v=1783962482&width=600',
    icon: ShoppingCart
  },
  {
    id: 'drezzo',
    category: 'E-Commerce / Moda',
    title: 'Drezzo Chile',
    description: 'Tienda en línea con diseño moderno, enfoque visual de marca, navegación ágil y catálogo interactivo.',
    tags: ['React', 'Tailwind CSS', 'E-Commerce', 'Mobile-First'],
    liveUrl: 'https://drezzo.cl',
    image: 'https://www.drezzo.cl/cdn/shop/files/Chili_carne_jpg.jpg?v=1786750679&width=832',
    icon: Store
  },
  {
    id: 'campos-abogados',
    category: 'Corporativo / Legal',
    title: 'Campos Abogados',
    description: 'Sitio web corporativo para firma de servicios legales, enfocado en captación de clientes, profesionalismo e identidad institucional.',
    tags: ['Web Corporativa', 'CRO', 'SEO Local', 'Tailwind'],
    liveUrl: 'https://camposabogados.cl',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    icon: Scale
  },
  {
    id: 'lumiere-studio',
    category: 'FullStack / Reservas',
    title: 'Lumiere Studio',
    description: 'Plataforma web de belleza y reservas en Antofagasta con interfaz ejecutiva, agendamiento e interacción en tiempo real.',
    tags: ['React 19', 'Tailwind v4', 'Supabase', 'Vite'],
    liveUrl: 'https://lumiere-studio-proyecto.vercel.app',
    image: 'https://lumiere-studio-proyecto.vercel.app/img/SERVICIO2.webp',
    icon: Sparkles
  },
  {
    id: 'consejo-barrio',
    category: 'FullStack / RBAC',
    title: 'Nexus Ops | Gestión Administrativa',
    description: 'Plataforma corporativa centralizada para administración de recursos, flujos de trabajo, tableros Kanban y seguridad basada en roles (RBAC).',
    tags: ['React', 'Supabase Auth', 'PostgreSQL', 'Tailwind'],
    liveUrl: 'https://barriocerromoreno.org',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    icon: Building2
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'E-Commerce', 'Corporativo', 'FullStack', 'Frontend'];

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="proyectos" className="py-20 bg-slate-950 dark:bg-slate-50 text-slate-100 dark:text-slate-900 relative border-t border-slate-900 dark:border-slate-200 transition-colors">
      
      {/* Resplandor cobre de fondo */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-600/10 dark:bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-700 text-xs font-mono font-semibold uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portafolio Seleccionado</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-slate-900">
            Proyectos & Casos de Uso
          </h2>

          <p className="text-slate-400 dark:text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
            Explora plataformas reales desarrolladas con precisión técnica, diseño moderno y enfoque directo en la conversión de negocio.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filter === cat 
                  ? 'bg-amber-600 text-white font-bold shadow-lg shadow-amber-600/30' 
                  : 'bg-slate-900 dark:bg-white text-slate-400 dark:text-slate-600 hover:text-slate-200 dark:hover:text-slate-900 border border-slate-800 dark:border-slate-300'
              }`}
            >
              {cat === 'ALL' ? 'Todos los Proyectos' : cat}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const IconComponent = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-slate-900/60 dark:bg-white border border-slate-800/80 dark:border-slate-200 hover:border-amber-500/50 dark:hover:border-amber-600/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group"
              >
                <div>
                  {/* Vista previa de imagen */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-950 dark:bg-slate-100">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-85 dark:opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 dark:from-white via-slate-900/20 dark:via-white/10 to-transparent"></div>

                    <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 dark:text-amber-700 bg-slate-950/90 dark:bg-white/90 backdrop-blur-md px-3 py-1 rounded-md border border-amber-500/20 dark:border-amber-300 flex items-center space-x-1.5">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{project.category}</span>
                    </span>
                  </div>

                  {/* Detalle */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold text-white dark:text-slate-900 group-hover:text-amber-500 dark:group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 dark:text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60 dark:border-slate-200">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-mono text-slate-300 dark:text-slate-700 bg-slate-950 dark:bg-slate-100 px-2.5 py-1 rounded-md border border-slate-800 dark:border-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Enlace en vivo */}
                  <div className="flex items-center justify-end pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-1.5 text-xs font-mono font-bold text-amber-500 dark:text-amber-700 hover:text-amber-400 dark:hover:text-amber-600 bg-amber-500/10 dark:bg-amber-500/10 hover:bg-amber-500/20 dark:hover:bg-amber-500/20 px-3.5 py-2 rounded-xl border border-amber-500/20 transition-all"
                    >
                      <span>Ver Sitio en Vivo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}