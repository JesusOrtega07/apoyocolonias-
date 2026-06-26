"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-white pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Logos institucionales — más grandes y prominentes */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-14"
        >
          {/* Red Jóvenes Melgar */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <Image src="/logos/melgar-logo.jpeg" alt="Red Jóvenes Melgar" fill className="object-contain" priority />
            </div>
            <div>
              <p className="font-black text-xl text-gray-900 leading-tight">Red Jóvenes Melgar</p>
              <p className="text-melgar-green text-sm font-semibold">Comunidad Juvenil · Tapachula</p>
            </div>
          </div>

          {/* Separador */}
          <div className="hidden sm:block w-px h-16 bg-gray-200" />
          <div className="block sm:hidden w-24 h-px bg-gray-200" />

          {/* Senador Melgar */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-50 flex-shrink-0">
              <Image
                src="/logos/senator-melgar.jpeg"
                alt="Senador Luis Armando Melgar"
                fill
                className="object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                }}
              />
              {/* Fallback silencioso: sin "M", sin texto */}
              <div className="absolute inset-0 flex items-center justify-center bg-green-50 -z-10">
                <Image src="/logos/melgar-logo.jpeg" alt="" fill className="object-contain p-3 opacity-40" />
              </div>
            </div>
            <div>
              <p className="font-black text-xl text-gray-900 leading-tight">Sen. Luis Armando Melgar</p>
              <p className="text-gray-500 text-sm font-medium">Senador por Chiapas</p>
            </div>
          </div>
        </motion.div>

        {/* Contenido central */}
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-50 border border-melgar-green/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-melgar-green rounded-full animate-pulse" />
            <span className="text-melgar-green text-sm font-semibold">Temporada Junio - Julio 2026 · Tapachula, Chiapas</span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6"
          >
            Apoya tu colonia,
            <br />
            <span className="text-melgar-green">gana premios reales.</span>
          </motion.h1>

          {/* Frase del Senador */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="inline-block bg-melgar-yellow/20 border-l-4 border-melgar-yellow rounded-r-2xl px-6 py-4 mb-8 text-left"
          >
            <p className="text-2xl sm:text-3xl font-black text-gray-900 italic">¡Tenémo con que!</p>
            <p className="text-sm text-gray-500 font-medium mt-1">— Sen. Luis Armando Melgar</p>
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Propón una acción de apoyo comunitario, complétala, sube tus evidencias
            y acumula puntos canjeables por premios reales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/ideas/nueva"
                className="inline-flex items-center justify-center gap-2 bg-melgar-green hover:bg-melgar-green-dark text-white font-black text-lg px-9 py-4 rounded-2xl transition-colors shadow-lg shadow-green-200"
              >
                Subir mi idea
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/resultados/nueva"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-melgar-green text-gray-800 font-black text-lg px-9 py-4 rounded-2xl transition-all"
              >
                Subir resultados
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: "150+", label: "Jóvenes activos" },
              { value: "48",   label: "Proyectos completados" },
              { value: "12,400", label: "Puntos otorgados" },
              { value: "23",   label: "Premios canjeados" },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black text-melgar-green">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
