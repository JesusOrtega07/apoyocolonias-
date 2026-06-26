"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Datos de ejemplo ─── */
const HISTORIAL = [
  { id: 1, accion: "Limpieza del parque central",       puntos: +200, tipo: "ganado",   fecha: "15 Jun 2025", estado: "Aprobado" },
  { id: 2, accion: "Pintura de barda comunitaria",      puntos: +350, tipo: "ganado",   fecha: "10 Jun 2025", estado: "Aprobado" },
  { id: 3, accion: "Canje: Gorra Oficial",              puntos: -200, tipo: "canjeado", fecha: "8 Jun 2025",  estado: "Canjeado" },
  { id: 4, accion: "Reforestación 50 árboles",          puntos: +400, tipo: "ganado",   fecha: "1 Jun 2025",  estado: "Aprobado" },
  { id: 5, accion: "Taller de lectura para niños",      puntos: +250, tipo: "ganado",   fecha: "25 May 2025", estado: "Aprobado" },
  { id: 6, accion: "Idea propuesta: Mural deportivo",   puntos: 0,    tipo: "pendiente",fecha: "22 Jun 2025", estado: "En revisión" },
];

const TOTAL = HISTORIAL.reduce((s, h) => s + h.puntos, 0);

const PROXIMOS_PREMIOS = [
  { nombre: "Bocina Bluetooth",  puntos: 750, imagen: "/premios/Bocina.jpeg",   faltan: 750 - TOTAL },
  { nombre: "Audífonos",         puntos: 500, imagen: "/premios/Audifonos.png", faltan: 500 - TOTAL },
  { nombre: "Playera del Movimiento", puntos: 300, imagen: "/premios/Playera.jpg", faltan: 300 - TOTAL },
];

const MisPuntosPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header: perfil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl border border-gray-100 p-6 mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-5"
        >
          {/* Avatar */}
          <div className="relative w-20 h-20 rounded-full border-2 border-melgar-green/30 overflow-hidden bg-green-50 flex-shrink-0">
            <Image src="/logos/melgar-logo.jpeg" alt="Perfil" fill className="object-contain p-2" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h1 className="font-black text-2xl text-gray-900">María González</h1>
            <p className="text-gray-400 text-sm">Col. Centro · Miembro desde mayo 2025</p>
            <div className="inline-flex items-center gap-1.5 bg-green-50 border border-melgar-green/30 rounded-full px-3 py-1 mt-2">
              <span className="w-2 h-2 bg-melgar-green rounded-full" />
              <span className="text-melgar-green text-xs font-bold">Miembro Activo</span>
            </div>
          </div>

          {/* Puntos totales */}
          <div className="bg-gray-950 rounded-2xl px-8 py-4 text-center flex-shrink-0">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Mis puntos</p>
            <p className="text-4xl font-black text-melgar-green">{TOTAL}</p>
            <p className="text-gray-500 text-xs mt-0.5">pts disponibles</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Historial de actividad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-black text-gray-900">Historial de actividad</h2>
              <span className="text-xs text-gray-400">{HISTORIAL.length} registros</span>
            </div>

            <div className="divide-y divide-gray-50">
              {HISTORIAL.map((h) => (
                <div key={h.id} className="flex items-center gap-4 px-6 py-4">
                  {/* Icono */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm ${
                    h.tipo === "ganado"    ? "bg-green-100 text-melgar-green" :
                    h.tipo === "canjeado" ? "bg-yellow-100 text-yellow-600" :
                                           "bg-gray-100 text-gray-400"
                  }`}>
                    {h.tipo === "ganado" ? "+" : h.tipo === "canjeado" ? "−" : "⋯"}
                  </div>

                  {/* Descripción */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{h.accion}</p>
                    <p className="text-xs text-gray-400">{h.fecha}</p>
                  </div>

                  {/* Puntos + estado */}
                  <div className="text-right flex-shrink-0">
                    {h.puntos !== 0 && (
                      <p className={`font-black text-sm ${h.puntos > 0 ? "text-melgar-green" : "text-red-400"}`}>
                        {h.puntos > 0 ? "+" : ""}{h.puntos} pts
                      </p>
                    )}
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      h.estado === "Aprobado"   ? "bg-green-50 text-melgar-green" :
                      h.estado === "Canjeado"   ? "bg-yellow-50 text-yellow-600" :
                                                  "bg-gray-100 text-gray-500"
                    }`}>
                      {h.estado}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Panel lateral */}
          <div className="space-y-5">

            {/* Próximos premios */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-black text-gray-900 text-sm">Premios al alcance</h2>
              </div>
              <div className="p-4 space-y-4">
                {PROXIMOS_PREMIOS.map((p) => {
                  const alcanzado = p.faltan <= 0;
                  return (
                    <div key={p.nombre} className="flex items-center gap-3">
                      <div className="relative w-12 h-12 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src={p.imagen} alt={p.nombre} fill className="object-contain p-1" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-900 truncate">{p.nombre}</p>
                        {alcanzado ? (
                          <p className="text-xs text-melgar-green font-bold">¡Ya puedes canjearlo!</p>
                        ) : (
                          <div>
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>{TOTAL} / {p.puntos} pts</span>
                              <span>Faltan {p.faltan}</span>
                            </div>
                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-melgar-green rounded-full transition-all"
                                style={{ width: `${Math.min(100, (TOTAL / p.puntos) * 100)}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="px-5 pb-4">
                <Link href="/premios" className="block text-center text-xs text-melgar-green font-bold hover:underline">
                  Ver todos los premios
                </Link>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-2"
            >
              <Link
                href="/ideas/nueva"
                className="block text-center bg-melgar-green hover:bg-melgar-green-dark text-white font-bold py-3.5 rounded-2xl text-sm transition-colors"
              >
                Proponer nueva idea
              </Link>
              <Link
                href="/resultados/nueva"
                className="block text-center bg-white border-2 border-gray-200 hover:border-melgar-green text-gray-700 font-bold py-3.5 rounded-2xl text-sm transition-all"
              >
                Subir mis resultados
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default MisPuntosPage;
