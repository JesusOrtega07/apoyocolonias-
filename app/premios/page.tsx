"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const PREMIOS = [
  { id: 1, nombre: "Audífonos Inalámbricos", descripcion: "Auriculares bluetooth de alta calidad con cancelación de ruido y hasta 20h de batería.", puntos: 500, imagen: "/premios/Audifonos.png", tipo: "Tecnología" },
  { id: 2, nombre: "Bocina Bluetooth",        descripcion: "Bocina portátil con sonido 360° y resistencia al agua. Perfecta para eventos al aire libre.", puntos: 750, imagen: "/premios/Bocina.jpeg",   tipo: "Tecnología" },
  { id: 3, nombre: "Gorra Oficial",           descripcion: "Gorra bordada de Red Jóvenes Melgar. Edición exclusiva para miembros del programa.", puntos: 200, imagen: "/premios/Gorra.jpg",    tipo: "Ropa"       },
  { id: 4, nombre: "Playera del Movimiento",  descripcion: "Playera de edición limitada con logo bordado. Representa con orgullo a tu comunidad.", puntos: 300, imagen: "/premios/Playera.jpg",  tipo: "Ropa"       },
  { id: 5, nombre: "Polo Red Jóvenes",        descripcion: "Polo bordado con logo oficial del programa. Ideal para eventos formales.", puntos: 350, imagen: "/premios/Polo.png", tipo: "Ropa" },
];

type Premio = typeof PREMIOS[0];

const PremioLightbox = ({ premio, onClose }: { premio: Premio; onClose: () => void }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
      >
        {/* Imagen grande */}
        <div className="relative h-72 bg-gray-50">
          <Image src={premio.imagen} alt={premio.nombre} fill className="object-contain p-4" sizes="512px" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/20 text-gray-700 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors text-sm font-bold"
          >
            ✕
          </button>
          <span className="absolute top-4 left-4 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-lg">
            {premio.tipo}
          </span>
        </div>

        {/* Info */}
        <div className="p-6">
          <h2 className="font-black text-xl text-gray-900 mb-2">{premio.nombre}</h2>
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">{premio.descripcion}</p>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-black text-melgar-green">{premio.puntos}</span>
              <span className="text-gray-400 text-sm ml-1">puntos</span>
            </div>
            <button className="bg-melgar-green hover:bg-melgar-green-dark text-white font-bold px-6 py-3 rounded-xl transition-colors">
              Canjear premio
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const PremiosPage = () => {
  const [selected, setSelected] = useState<Premio | null>(null);
  const [filtro, setFiltro] = useState<string>("Todos");
  const categorias = ["Todos", ...Array.from(new Set(PREMIOS.map((p) => p.tipo)))];
  const filtrados = filtro === "Todos" ? PREMIOS : PREMIOS.filter((p) => p.tipo === filtro);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-melgar-green text-sm font-black uppercase tracking-widest mb-3">Recompensas</p>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">Canjea tus puntos</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Cada acción comunitaria te acerca más a estos premios. Haz clic en cualquier premio para verlo en detalle.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                filtro === cat
                  ? "bg-melgar-green text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de premios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((premio, i) => (
            <motion.div
              key={premio.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              onClick={() => setSelected(premio)}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Imagen con overlay de zoom */}
              <div className="relative h-52 bg-gray-50 overflow-hidden">
                <Image src={premio.imagen} alt={premio.nombre} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                <span className="absolute top-3 left-3 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-lg">
                  {premio.tipo}
                </span>
                {/* Lupa */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-gray-700 text-xs font-bold">
                    Ver detalle
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-black text-gray-900 text-base mb-1">{premio.nombre}</h3>
                <p className="text-gray-400 text-xs mb-4 line-clamp-2">{premio.descripcion}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-black text-melgar-green text-xl">{premio.puntos}</span>
                    <span className="text-gray-400 text-xs ml-1">pts</span>
                  </div>
                  <span className="text-xs text-melgar-green font-bold border border-melgar-green/30 bg-green-50 px-3 py-1.5 rounded-lg">
                    Canjear
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner info puntos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gray-950 rounded-3xl p-8 text-center"
        >
          <p className="text-gray-400 text-sm mb-2">¿Cómo ganar puntos?</p>
          <h3 className="text-white font-black text-2xl mb-4">Propón y completa acciones comunitarias</h3>
          <a
            href="/ideas/nueva"
            className="inline-block bg-melgar-green hover:bg-melgar-green-dark text-white font-bold px-7 py-3 rounded-xl transition-colors"
          >
            Empezar a ganar puntos
          </a>
        </motion.div>
      </div>

      <Footer />

      {selected && <PremioLightbox premio={selected} onClose={() => setSelected(null)} />}
    </main>
  );
};

export default PremiosPage;
