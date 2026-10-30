import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function IntroSplash({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Empieza silenciado para cumplir con las políticas del navegador
  const videoRef = useRef(null);

  const handleEnd = () => {
    setIsVisible(false);
    if (onFinish) onFinish();
  };

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Video responsivo */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleEnd}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video_inicio.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>

          {/* Capa sutil de contraste */}
          <div className="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>

          {/* Botón superior para activar / desactivar el sonido */}
          <button
            onClick={toggleAudio}
            className="absolute top-8 left-8 z-50 bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 p-3 rounded-xl backdrop-blur-md transition-all cursor-pointer shadow-xl flex items-center gap-2 text-xs font-mono"
            aria-label="Activar o silenciar audio"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-amber-500" />
                <span>Activar sonido</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-amber-500" />
                <span>Silenciar</span>
              </>
            )}
          </button>

          {/* Botón flotante para saltar la intro */}
          <button
            onClick={handleEnd}
            className="absolute bottom-8 right-8 z-50 bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 px-4 py-2 rounded-xl text-xs font-mono backdrop-blur-md transition-all cursor-pointer shadow-xl"
          >
            Saltar intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}