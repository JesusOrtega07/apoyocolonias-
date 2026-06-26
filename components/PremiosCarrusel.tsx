"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const PREMIOS = [
  { id: 1, nombre: "Audífonos Inalámbricos", descripcion: "Auriculares bluetooth de alta calidad.", puntos: 500, imagen: "/premios/Audifonos.png", tipo: "Tecnología" },
  { id: 2, nombre: "Bocina Bluetooth",        descripcion: "Bocina portátil con sonido 360°.",       puntos: 750, imagen: "/premios/Bocina.jpeg",   tipo: "Tecnología" },
  { id: 3, nombre: "Gorra Oficial",           descripcion: "Gorra bordada de Red Jóvenes Melgar.",   puntos: 200, imagen: "/premios/Gorra.jpg",    tipo: "Ropa"       },
  { id: 4, nombre: "Playera del Movimiento",  descripcion: "Playera de edición limitada.",            puntos: 300, imagen: "/premios/Playera.jpg",  tipo: "Ropa"       },
  { id: 5, nombre: "Polo Red Jóvenes",        descripcion: "Polo bordado con logo oficial.",          puntos: 350, imagen: "/premios/Polo.png",     tipo: "Ropa"       },
];

const PremiosCarrusel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = PREMIOS.length;

  const goNext = useCallback(() => { setDirection(1);  setCurrent((p) => (p + 1) % total); }, [total]);
  const goPrev = useCallback(() => { setDirection(-1); setCurrent((p) => (p - 1 + total) % total); }, [total]);

  useEffect(() => {
    const t = setInterval(goNext, 4500);
    return () => clearInterval(t);
  }, [goNext]);

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="premios" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-melgar-green text-sm font-black uppercase tracking-widest mb-3">Recompensas</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">
            Canjea tus puntos
          </h2>
          <p className="text-gray-500 text-lg mb-4">Cada acción comunitaria te acerca a estas recompensas.</p>
          <a href="/premios" className="inline-block text-melgar-green text-sm font-bold hover:underline">
            Ver todos los premios →
          </a>
        </motion.div>

        {/* Carrusel */}
        <div className="relative flex items-center justify-center gap-4 px-12">
          {/* Flecha izq */}
          <button onClick={goPrev} className="absolute left-0 w-10 h-10 bg-white border border-gray-200 hover:border-melgar-green rounded-full flex items-center justify-center text-gray-600 hover:text-melgar-green transition-all shadow-sm z-10 text-lg">‹</button>

          {/* Card fantasma izq */}
          <div className="hidden lg:block opacity-40 scale-90 flex-shrink-0">
            <PremioCard premio={PREMIOS[prev]} />
          </div>

          {/* Card central */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-shrink-0"
            >
              <PremioCard premio={PREMIOS[current]} featured />
            </motion.div>
          </AnimatePresence>

          {/* Card fantasma der */}
          <div className="hidden lg:block opacity-40 scale-90 flex-shrink-0">
            <PremioCard premio={PREMIOS[next]} />
          </div>

          {/* Flecha der */}
          <button onClick={goNext} className="absolute right-0 w-10 h-10 bg-white border border-gray-200 hover:border-melgar-green rounded-full flex items-center justify-center text-gray-600 hover:text-melgar-green transition-all shadow-sm z-10 text-lg">›</button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {PREMIOS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-melgar-green" : "w-2 h-2 bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PremioCard = ({ premio, featured = false }: { premio: typeof PREMIOS[0]; featured?: boolean }) => (
  <div className={`w-64 md:w-72 bg-white rounded-3xl border-2 overflow-hidden transition-all duration-300 ${featured ? "border-melgar-green shadow-xl shadow-green-100" : "border-gray-100"}`}>
    <div className="relative h-48 bg-gray-50">
      <Image src={premio.imagen} alt={premio.nombre} fill className="object-cover" sizes="288px" />
      <span className="absolute top-3 left-3 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-lg">
        {premio.tipo}
      </span>
    </div>
    <div className="p-5">
      <h3 className="font-black text-gray-900 text-base mb-1">{premio.nombre}</h3>
      <p className="text-gray-400 text-xs mb-4">{premio.descripcion}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="font-black text-melgar-green text-lg">{premio.puntos}</span>
          <span className="text-gray-400 text-xs">pts</span>
        </div>
        {featured && (
          <button className="bg-melgar-green hover:bg-melgar-green-dark text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors">
            Canjear
          </button>
        )}
      </div>
    </div>
  </div>
);

export default PremiosCarrusel;
