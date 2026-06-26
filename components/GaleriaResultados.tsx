"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/* ─── Datos reales de actividades ─── */
const ACTIVIDADES = [
  {
    id: 1,
    titulo: "Chaponeado de canal pluvial",
    descripcion:
      "Jóvenes voluntarios limpiaron un canal pluvial de la colonia removiendo maleza de más de un metro de altura, mejorando el flujo de agua y el entorno del vecindario.",
    colonia: "Tapachula, Chis.",
    usuario: "Red Jóvenes Melgar",
    puntos: 300,
    fecha: "Jun 2026",
    height: "h-64",
    fotos: [
      { src: "/fotos/chaponeado1antes.jpg",   etiqueta: "Antes"   },
      { src: "/fotos/chaponeado1despues.png",  etiqueta: "Después" },
    ],
  },
  {
    id: 2,
    titulo: "Limpieza de área verde comunitaria",
    descripcion:
      "Se desbroz​ó un lote con maleza densa y basura acumulada, dejando el espacio limpio, transitable y digno para los vecinos de la colonia.",
    colonia: "Tapachula, Chis.",
    usuario: "Red Jóvenes Melgar",
    puntos: 300,
    fecha: "Jun 2026",
    height: "h-56",
    fotos: [
      { src: "/fotos/chaponeado2antes.jpg",   etiqueta: "Antes"   },
      { src: "/fotos/chaponeado2despues.png",  etiqueta: "Después" },
    ],
  },
  {
    id: 3,
    titulo: "Reforestación: Por un Tapachula más verde",
    descripcion:
      "Decenas de jóvenes plantaron árboles en un espacio público de Tapachula bajo la consigna \"¡Por un Tapachula más verde!\", contribuyendo al medio ambiente de la ciudad.",
    colonia: "Tapachula, Chis.",
    usuario: "Red Jóvenes Melgar",
    puntos: 400,
    fecha: "Jun 2026",
    height: "h-60",
    fotos: [
      { src: "/fotos/reforestacion.png", etiqueta: "Resultado" },
    ],
  },
  {
    id: 4,
    titulo: "Alfabetización de adultos mayores",
    descripcion:
      "Joven voluntaria impartió clases de lectura y escritura a adultos mayores bajo el lema \"¡Nunca es tarde para aprender!\". Una acción que cambia vidas desde dentro.",
    colonia: "Tapachula, Chis.",
    usuario: "Red Jóvenes Melgar",
    puntos: 250,
    fecha: "Jun 2026",
    height: "h-52",
    fotos: [
      { src: "/fotos/alfabetizacion.png", etiqueta: "Resultado" },
    ],
  },
  {
    id: 5,
    titulo: "Jornada alimentaria: Tortas gratis",
    descripcion:
      "Bajo el lema \"Tenemos con que\", la Red Jóvenes Melgar repartió tortas gratuitas a decenas de personas en el parque central de Tapachula. Acción de impacto directo.",
    colonia: "Parque Central, Tapachula",
    usuario: "Red Jóvenes Melgar",
    puntos: 350,
    fecha: "Jun 2026",
    height: "h-48",
    fotos: [
      { src: "/fotos/tortas.png", etiqueta: "Resultado" },
    ],
  },
  {
    id: 6,
    titulo: "Limpieza y pintura de pared",
    descripcion:
      "Se eliminó grafiti y carteles de una pared en mal estado, limpiándola y pintándola de blanco, mejorando la imagen del espacio público y el orgullo del vecindario.",
    colonia: "Tapachula, Chis.",
    usuario: "Red Jóvenes Melgar",
    puntos: 200,
    fecha: "Jun 2026",
    height: "h-72",
    fotos: [
      { src: "/fotos/pared_antes.jpg",    etiqueta: "Antes"   },
      { src: "/fotos/pared_despues.png",  etiqueta: "Después" },
    ],
  },
];

type Actividad = (typeof ACTIVIDADES)[0];

/* ─── Helpers ─── */
const etiquetaClass = (e: string) =>
  e === "Antes"
    ? "bg-red-500/80 text-white"
    : e === "Después"
    ? "bg-emerald-500/80 text-white"
    : "bg-sky-500/80 text-white";

/* ─── Card con mini-carrusel ─── */
const ResultadoCard = ({
  actividad,
  onOpen,
}: {
  actividad: Actividad;
  onOpen: (a: Actividad, idx: number) => void;
}) => {
  const [idx, setIdx] = useState(0);
  const fotos = actividad.fotos;
  const total = fotos.length;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + total) % total);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % total);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="mb-4 cursor-pointer group"
      onClick={() => onOpen(actividad, idx)}
    >
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

        {/* Foto con carrusel */}
        <div className={`${actividad.height} relative overflow-hidden`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={fotos[idx].src}
                alt={fotos[idx].etiqueta}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradiente inferior */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-[1]" />

          {/* Badge Antes / Después */}
          <span className={`absolute top-3 left-3 z-10 text-xs font-black px-2.5 py-1 rounded-full backdrop-blur-sm ${etiquetaClass(fotos[idx].etiqueta)}`}>
            {fotos[idx].etiqueta}
          </span>

          {/* Puntos */}
          <span className="absolute top-3 right-3 z-10 bg-black/35 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
            +{actividad.puntos} pts
          </span>

          {/* Flechas (visibles solo si hay más de 1 foto) */}
          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-black/45 hover:bg-black/65 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm text-lg leading-none"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-black/45 hover:bg-black/65 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm text-lg leading-none"
              >
                ›
              </button>
            </>
          )}

          {/* Dots */}
          {total > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {fotos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === idx ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Texto */}
        <div className="p-4">
          <p className="font-bold text-gray-900 text-sm leading-tight mb-1.5">{actividad.titulo}</p>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{actividad.descripcion}</p>
          <div className="flex items-center gap-1.5 mt-3">
            <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-200 bg-green-50 flex-shrink-0">
              <Image src="/logos/melgar-logo.jpeg" alt="" fill className="object-contain p-0.5" />
            </div>
            <span className="text-xs text-gray-500 font-medium truncate">{actividad.usuario}</span>
            <span className="text-gray-200 text-xs flex-shrink-0">·</span>
            <span className="text-xs text-gray-400 flex-shrink-0">{actividad.fecha}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Modal ampliado ─── */
const ModalActividad = ({
  actividad,
  fotoInicial,
  onClose,
}: {
  actividad: Actividad;
  fotoInicial: number;
  onClose: () => void;
}) => {
  const [idx, setIdx] = useState(fotoInicial);
  const fotos = actividad.fotos;
  const total = fotos.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl"
      >
        {/* Imagen con carrusel grande */}
        <div className="relative h-80 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={fotos[idx].src}
                alt={fotos[idx].etiqueta}
                fill
                className="object-cover"
                sizes="640px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradiente */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* Badge */}
          <span className={`absolute top-4 left-4 z-10 text-sm font-black px-3 py-1.5 rounded-full ${etiquetaClass(fotos[idx].etiqueta)}`}>
            {fotos[idx].etiqueta}
          </span>

          {/* Cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/35 text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-black/55 transition-colors backdrop-blur-sm"
          >
            ✕
          </button>

          {/* Flechas */}
          {total > 1 && (
            <>
              <button
                onClick={() => setIdx((i) => (i - 1 + total) % total)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-colors"
              >
                ‹
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % total)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-colors"
              >
                ›
              </button>
            </>
          )}

          {/* Pills Antes / Después */}
          {total > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {fotos.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`text-xs font-black px-3 py-1.5 rounded-full transition-all backdrop-blur-sm ${
                    i === idx
                      ? "bg-white text-gray-900 shadow"
                      : "bg-black/35 text-white hover:bg-black/55"
                  }`}
                >
                  {f.etiqueta}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-black text-xl text-gray-900 leading-tight">{actividad.titulo}</h3>
            <span className="bg-green-50 text-melgar-green font-black text-sm px-3 py-1.5 rounded-xl flex-shrink-0">
              +{actividad.puntos} pts
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{actividad.descripcion}</p>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-200 bg-green-50 flex-shrink-0">
              <Image src="/logos/melgar-logo.jpeg" alt="" fill className="object-contain p-1" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">{actividad.usuario}</p>
              <p className="text-xs text-gray-400">{actividad.colonia} · {actividad.fecha}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Componente principal ─── */
const GaleriaResultados = () => {
  const [modal, setModal] = useState<{ actividad: Actividad; fotoIdx: number } | null>(null);

  // Columnas masonry
  const col1 = ACTIVIDADES.filter((_, i) => i % 3 === 0);
  const col2 = ACTIVIDADES.filter((_, i) => i % 3 === 1);
  const col3 = ACTIVIDADES.filter((_, i) => i % 3 === 2);

  const handleOpen = (actividad: Actividad, fotoIdx: number) =>
    setModal({ actividad, fotoIdx });
  const handleClose = () => setModal(null);

  return (
    <section id="galeria" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-melgar-green text-sm font-black uppercase tracking-widest mb-3">Comunidad</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">
            Lo que estamos logrando
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Resultados reales de jóvenes de Tapachula transformando su comunidad.
            Haz clic en cualquier tarjeta para ver el antes y después.
          </p>
        </motion.div>

        {/* Masonry — 3 cols desktop, 2 tablet, 1 móvil */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4">
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci}>
              {col.map((a) => (
                <ResultadoCard key={a.id} actividad={a} onOpen={handleOpen} />
              ))}
            </div>
          ))}
        </div>

        {/* 2 cols tablet */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4 lg:hidden">
          {[
            ACTIVIDADES.filter((_, i) => i % 2 === 0),
            ACTIVIDADES.filter((_, i) => i % 2 === 1),
          ].map((col, ci) => (
            <div key={ci}>
              {col.map((a) => (
                <ResultadoCard key={a.id} actividad={a} onOpen={handleOpen} />
              ))}
            </div>
          ))}
        </div>

        {/* 1 col móvil */}
        <div className="sm:hidden space-y-0">
          {ACTIVIDADES.map((a) => (
            <ResultadoCard key={a.id} actividad={a} onOpen={handleOpen} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-3">¿Listo para aparecer aquí?</p>
          <a
            href="/ideas/nueva"
            className="inline-block bg-melgar-green hover:bg-melgar-green-dark text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
          >
            Proponer mi acción comunitaria
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <ModalActividad
            actividad={modal.actividad}
            fotoInicial={modal.fotoIdx}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GaleriaResultados;
