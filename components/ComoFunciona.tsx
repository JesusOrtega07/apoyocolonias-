"use client";

import { motion } from "framer-motion";

const PASOS = [
  {
    numero: "01",
    titulo: "Propón tu idea",
    descripcion: "Registra una acción de apoyo: limpiar tu colonia, pintar una barda, organizar un evento. Sin límites.",
    bgNumero: "text-green-100",
    accentColor: "border-t-melgar-green",
    dotColor: "bg-melgar-green",
  },
  {
    numero: "02",
    titulo: "Espera aprobación",
    descripcion: "El staff revisa tu propuesta y te da luz verde en 48 horas. Recibirás una notificación.",
    bgNumero: "text-blue-100",
    accentColor: "border-t-blue-400",
    dotColor: "bg-blue-400",
  },
  {
    numero: "03",
    titulo: "Actúa y documenta",
    descripcion: "Ejecuta tu acción comunitaria, toma fotos y videos de evidencia y súbelos a la plataforma.",
    bgNumero: "text-orange-100",
    accentColor: "border-t-orange-400",
    dotColor: "bg-orange-400",
  },
  {
    numero: "04",
    titulo: "Gana tus puntos",
    descripcion: "El staff valida tus evidencias y acredita tus puntos. Canjéalos por premios o lleva tu proyecto a mayor escala.",
    bgNumero: "text-yellow-100",
    accentColor: "border-t-melgar-yellow",
    dotColor: "bg-melgar-yellow",
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-24 bg-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-melgar-green text-sm font-black uppercase tracking-widest mb-3">Proceso</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            4 pasos simples para contribuir a tu comunidad y ganar recompensas reales.
          </p>
        </motion.div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PASOS.map((paso, index) => (
            <motion.div
              key={paso.numero}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative bg-gray-900 rounded-3xl p-7 h-full border-t-4 ${paso.accentColor} overflow-hidden hover:bg-gray-800 transition-colors duration-300`}>

                {/* Número decorativo de fondo */}
                <span className={`absolute -right-3 -bottom-5 text-[120px] font-black leading-none select-none pointer-events-none ${paso.bgNumero} opacity-60`}>
                  {paso.numero}
                </span>

                {/* Dot indicador */}
                <div className={`w-3 h-3 rounded-full ${paso.dotColor} mb-6`} />

                {/* Contenido */}
                <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-3">
                  Paso {paso.numero}
                </p>
                <h3 className="text-white font-black text-xl mb-3 leading-tight">
                  {paso.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {paso.descripcion}
                </p>
              </div>

              {/* Flecha entre pasos (desktop) */}
              {index < PASOS.length - 1 && (
                <div className="hidden xl:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-600">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
