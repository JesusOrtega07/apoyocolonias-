"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const LoginPage = () => {
  const [mode, setMode]         = useState<"login" | "register">("login");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]         = useState({ nombre: "", email: "", password: "", colonia: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-28 pb-20 flex items-center justify-center px-4">
        <div className="w-full max-w-md">

          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image src="/logos/melgar-logo.jpeg" alt="Red Jóvenes Melgar" fill className="object-contain" priority />
              </div>
              <div>
                <p className="font-black text-gray-900 text-sm leading-tight">Red Jóvenes Melgar</p>
                <p className="text-melgar-green text-xs font-semibold">Comunidad Juvenil · Tapachula</p>
              </div>
            </div>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="h-1.5 bg-melgar-green w-full" />

            <div className="p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-melgar-green">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {mode === "login" ? "¡Bienvenido de vuelta!" : "¡Registro exitoso!"}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {mode === "login"
                      ? "Estás dentro. Empieza a acumular puntos ahora."
                      : "Tu cuenta fue creada. Ya puedes empezar a participar."}
                  </p>
                  <Link href="/" className="text-melgar-green font-bold hover:underline text-sm">
                    Ir al inicio
                  </Link>
                </div>
              ) : (
                <>
                  {/* Tabs */}
                  <div className="flex bg-gray-100 rounded-2xl p-1 mb-7">
                    <button
                      onClick={() => setMode("login")}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        mode === "login" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                      }`}
                    >
                      Iniciar sesión
                    </button>
                    <button
                      onClick={() => setMode("register")}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        mode === "register" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                      }`}
                    >
                      Registrarse
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Nombre (solo registro) */}
                    {mode === "register" && (
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">
                          Nombre completo <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          value={form.nombre}
                          onChange={handleChange}
                          required={mode === "register"}
                          placeholder="Ej. María González"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all"
                        />
                      </div>
                    )}

                    {/* Colonia (solo registro) */}
                    {mode === "register" && (
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">
                          Colonia / Barrio
                        </label>
                        <input
                          type="text"
                          name="colonia"
                          value={form.colonia}
                          onChange={handleChange}
                          placeholder="Ej. Col. Centro"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all"
                        />
                      </div>
                    )}

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">
                        Correo electrónico <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all"
                      />
                    </div>

                    {/* Contraseña */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">
                        Contraseña <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        placeholder={mode === "register" ? "Mín. 8 caracteres" : "Tu contraseña"}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-melgar-green focus:ring-2 focus:ring-green-100 transition-all"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-melgar-green hover:bg-melgar-green-dark text-white font-black text-base py-4 rounded-2xl transition-colors shadow-lg shadow-green-200 mt-2"
                    >
                      {mode === "login" ? "Iniciar sesión" : "Crear mi cuenta"}
                    </motion.button>

                    {mode === "login" && (
                      <p className="text-center text-xs text-gray-400 mt-2">
                        ¿Olvidaste tu contraseña?{" "}
                        <span className="text-melgar-green font-semibold cursor-pointer hover:underline">
                          Recuperarla
                        </span>
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </motion.div>

          <p className="text-center text-xs text-gray-400 mt-6">
            Al registrarte aceptas participar bajo las reglas de la Red Jóvenes Melgar.
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
