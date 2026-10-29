import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Code2, Database, Layout, Globe, CloudSun, Sparkles, Building2 } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const PROJECTS = [
  {
    id: 'lumiere-studio',
    category: 'FullStack / Reservas',
    title: 'Lumiere Studio (Belleza & Citas)',
    description: 'Plataforma web sofisticada para estudio de belleza en Antofagasta, con diseño en tonos nude, reservas integradas, pasarela de videos y carrusel de partners.',
    tags: ['React 19', 'Tailwind v4', 'Supabase', 'Vite'],
    githubUrl: 'https://github.com/jsantander-cl',
    liveUrl: 'https://lumiere-studio-proyecto.vercel.app',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    icon: Sparkles
  },
  {
    id: 'consejo-barrio',
    category: 'FullStack / RBAC',
    title: 'Nexus Ops | Gestión & Planificación Administrativa',
    description: 'Plataforma corporativa centralizada para la administración de recursos, control de flujos de trabajo, tableros Kanban de tareas críticas y seguridad estricta basada en roles (RBAC).',
    tags: ['React', 'Supabase Auth', 'PostgreSQL', 'Tailwind'],
    githubUrl: 'https://github.com/jsantander-cl',
    liveUrl: 'https://barriocerromoreno.org',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    icon: Building2
  },
  {
    id: 'proyecto-banderas',
    category: 'Frontend / API',
    title: 'Buscador Global de Banderas',
    description: 'Aplicación interactiva conectada a servicios globales para buscar, filtrar por región y consultar información detallada (población, capital, territorio) de todo el mundo.',
    tags: ['React', 'Rest API', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/jsantander-cl',
    liveUrl: 'https://proyecto-banderas.vercel.app',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    icon: Globe
  },
  {
    id: 'weather-app',
    category: 'Frontend / API',
    title: 'App del Clima en Tiempo Real',
    description: 'Aplicación meteorológica interactiva con consulta dinámica a API externa para mostrar el pronóstico actualizado con interfaz limpia y minimalista.',
    tags: ['React', 'API Clima', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/jsantander-cl',
    liveUrl: 'https://weather-app-seven-rho-33.vercel.app',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80',
    icon: CloudSun
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 'ALL') return true;
    if (filter === 'FullStack') {
      return p.category.toLowerCase().includes('fullstack');
    }
    if (filter === 'Frontend') {
      return p.category.toLowerCase().includes('frontend');
    }
    return p.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="proyectos" className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900 overflow-hidden">
      
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Portafolio Seleccionado</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Proyectos & Casos de Uso
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
            Soluciones reales desarrolladas con arquitectura limpia, integración de bases de datos y diseño de alto impacto.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono text-xs">
          {['ALL', 'Frontend', 'FullStack'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filter === cat 
                  ? 'bg-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-600/30' 
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat === 'ALL' ? 'Todos los Proyectos' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const IconComponent = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

                    <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-md border border-amber-500/20 flex items-center space-x-1.5">
                      <IconComponent className="w-3 h-3 text-amber-400" />
                      <span>{project.category}</span>
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Código fuente</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-3.5 py-1.5 rounded-lg border border-amber-500/20 transition-all"
                    >
                      <span>Ver Demo en Vivo</span>
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