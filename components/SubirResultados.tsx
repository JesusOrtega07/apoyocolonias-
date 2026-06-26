"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SubirResultados = () => {
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [form, setForm] = useState({
    proyecto: "",
    descripcion: "",
    voluntarios: "",
    fecha: "",
    impacto: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = Array.from(e.dataTransfer.files).map((f) => f.name);
    setFiles((prev) => [...prev, ...dropped].slice(0, 5));
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []).map((f) => f.name);
    setFiles((prev) => [...prev, ...selected].slice(0, 5));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="subir-resultados" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-melgar-yellow/50 rounded-full px-4 py-1.5 mb-4">
            <span className="text-yellow-600 text-sm font-semibold">📸 Paso 3</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">
            Subir resultados
          </h2>
          <p className="text-gray-500 text-lg">
            ¿Ya completaste tu acción comunitaria? Sube las evidencias para que el
            staff las valide y te acredite tus puntos.
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
          <div className="h-2 bg-melgar-yellow w-full" />

          <div className="p-8">
            {submitted ? (
              /* Estado de éxito */
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">¡Evidencias enviadas!</h3>
                <p className="text-gray-500 mb-6">
                  El staff validará tus evidencias y te acreditará los puntos.
                  ¡Gracias por hacer la diferencia en Tapachula!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFiles([]); setForm({ proyecto: "", descripcion: "", voluntarios: "", fecha: "", impacto: "" }); }}
                  className="text-melgar-green font-bold hover:underline text-sm"
                >
                  ← Subir otro resultado
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Nombre del proyecto */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Nombre del proyecto completado <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="proyecto"
                      value={form.proyecto}
                      onChange={handleChange}
                      required
                      placeholder='Ej. "Limpieza del parque El Rosario"'
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-yellow focus:ring-2 focus:ring-yellow-50 transition-all"
                    />
                  </div>

                  {/* Voluntarios reales */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Voluntarios que participaron
                    </label>
                    <input
                      type="number"
                      name="voluntarios"
                      value={form.voluntarios}
                      onChange={handleChange}
                      min="1"
                      placeholder="Ej. 12"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-yellow focus:ring-2 focus:ring-yellow-50 transition-all"
                    />
                  </div>

                  {/* Fecha de realización */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Fecha de realización <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={form.fecha}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-melgar-yellow focus:ring-2 focus:ring-yellow-50 transition-all"
                    />
                  </div>

                  {/* Descripción de resultados */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      ¿Qué lograron? <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="descripcion"
                      value={form.descripcion}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Describe lo que hicieron, el área cubierta, materiales usados y el resultado final..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-yellow focus:ring-2 focus:ring-yellow-50 transition-all resize-none"
                    />
                  </div>

                  {/* Impacto */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      ¿Cuántas personas se beneficiaron?
                    </label>
                    <input
                      type="text"
                      name="impacto"
                      value={form.impacto}
                      onChange={handleChange}
                      placeholder='Ej. "Aproximadamente 300 vecinos de la colonia"'
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-yellow focus:ring-2 focus:ring-yellow-50 transition-all"
                    />
                  </div>

                  {/* Subida de fotos */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Fotos / videos de evidencia <span className="text-red-400">*</span>
                    </label>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={handleFileDrop}
                      className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
                        dragging
                          ? "border-melgar-yellow bg-yellow-50"
                          : "border-gray-200 hover:border-melgar-yellow hover:bg-yellow-50/50"
                      }`}
                    >
                      <div className="text-3xl mb-2">📷</div>
                      <p className="text-sm font-semibold text-gray-700">
                        Arrastra tus fotos aquí o{" "}
                        <label className="text-melgar-green underline cursor-pointer">
                          selecciónalas
                          <input
                            type="file"
                            accept="image/*,video/*"
                            multiple
                            className="hidden"
                            onChange={handleFileInput}
                          />
                        </label>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        JPG, PNG, MP4 · Máx. 5 archivos · 10 MB c/u
                      </p>
                    </div>

                    {/* Lista de archivos seleccionados */}
                    {files.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {files.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                            <span>📎</span>
                            <span className="truncate">{f}</span>
                            <button
                              type="button"
                              onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                              className="ml-auto text-gray-400 hover:text-red-400 text-xs font-bold"
                            >
                              ✕
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-melgar-yellow hover:bg-melgar-yellow-dark text-melgar-navy font-black text-base py-4 rounded-2xl transition-colors shadow-lg shadow-yellow-100"
                >
                  📸 Enviar mis evidencias
                </motion.button>

                <p className="text-center text-xs text-gray-400">
                  El staff validará tus evidencias en un plazo de 48 horas hábiles.
                  Los puntos se acreditarán automáticamente al ser aprobadas.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubirResultados;
