"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CATEGORIAS = [
  "Limpieza de espacios públicos",
  "Pintura de murales / bardas",
  "Reforestación",
  "Evento deportivo comunitario",
  "Evento cultural / educativo",
  "Apoyo a adultos mayores",
  "Mejora de infraestructura",
  "Otro",
];

const SubirIdea = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    colonia: "",
    categoria: "",
    descripcion: "",
    voluntarios: "",
    fecha: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="subir-idea" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 border border-melgar-green/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-melgar-green text-sm font-semibold">💡 Paso 1</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">
            Subir mi idea
          </h2>
          <p className="text-gray-500 text-lg">
            Cuéntanos qué acción comunitaria quieres realizar. El staff la revisará
            y te dará luz verde para empezar.
          </p>
        </motion.div>

        {/* Card del formulario */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden"
        >
          {/* Barra de color superior */}
          <div className="h-2 bg-melgar-green w-full" />

          <div className="p-8">
            {submitted ? (
              /* Estado de éxito */
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">¡Propuesta enviada!</h3>
                <p className="text-gray-500 mb-6">
                  El equipo staff revisará tu idea y te notificará pronto.
                  Mientras tanto, ¡sigue pensando en cómo mejorar tu colonia!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nombre: "", colonia: "", categoria: "", descripcion: "", voluntarios: "", fecha: "" }); }}
                  className="text-melgar-green font-bold hover:underline text-sm"
                >
                  ← Enviar otra idea
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nombre de la idea */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Nombre de tu idea <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder='Ej. "Limpieza del parque El Rosario"'
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>

                  {/* Colonia */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Colonia / Barrio <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="colonia"
                      value={form.colonia}
                      onChange={handleChange}
                      required
                      placeholder="Ej. Col. Centro"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>

                  {/* Categoría */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Tipo de acción <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="categoria"
                      value={form.categoria}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all bg-white"
                    >
                      <option value="">Selecciona una categoría</option>
                      {CATEGORIAS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Voluntarios estimados */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Voluntarios estimados
                    </label>
                    <input
                      type="number"
                      name="voluntarios"
                      value={form.voluntarios}
                      onChange={handleChange}
                      min="1"
                      placeholder="Ej. 10"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>

                  {/* Fecha propuesta */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Fecha propuesta
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={form.fecha}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>

                  {/* Descripción */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Descripción <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="descripcion"
                      value={form.descripcion}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe qué quieres hacer, dónde, por qué es importante y cómo lo llevarás a cabo..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-melgar-green hover:bg-melgar-green-dark text-white font-black text-base py-4 rounded-2xl transition-colors shadow-lg shadow-green-200"
                >
                  💡 Enviar mi propuesta
                </motion.button>

                <p className="text-center text-xs text-gray-400">
                  El staff revisará tu propuesta en un plazo de 48 horas hábiles.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubirIdea;
