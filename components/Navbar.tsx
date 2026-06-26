"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/#como-funciona", label: "¿Cómo funciona?" },
  { href: "/#galeria",       label: "Galería"          },
  { href: "/premios",        label: "Premios"           },
  { href: "/ideas/nueva",    label: "Subir mi idea"     },
  { href: "/resultados/nueva", label: "Subir resultados" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md border-b border-gray-100" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">

        {/* Logos institucionales */}
        <Link href="/" className="flex items-center gap-4 group flex-shrink-0">
          {/* Logo Red Jóvenes Melgar */}
          <div className="relative w-14 h-14">
            <Image
              src="/logos/melgar-logo.jpeg"
              alt="Red Jóvenes Melgar"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-black text-base text-gray-900 leading-tight">Red Jóvenes Melgar</p>
            <p className="text-melgar-green text-xs font-semibold">Comunidad Juvenil · Tapachula</p>
          </div>

          {/* Separador */}
          <div className="hidden md:block w-px h-10 bg-gray-200 mx-1" />

          {/* Logo Senador */}
          <div className="hidden md:flex items-center gap-2.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-50 flex-shrink-0">
              <Image
                src="/logos/senator-melgar.jpeg"
                alt="Senador Luis Armando Melgar"
                fill
                className="object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                  const parent = img.parentElement;
                  if (parent) {
                    const fallback = parent.querySelector(".senator-fallback") as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }
                }}
              />
              {/* Fallback: logo Red Jóvenes */}
              <div className="senator-fallback absolute inset-0 hidden items-center justify-center bg-green-50">
                <Image src="/logos/melgar-logo.jpeg" alt="placeholder" fill className="object-contain p-1" />
              </div>
            </div>
            <div>
              <p className="font-black text-sm text-gray-900 leading-tight">Sen. Luis Armando Melgar</p>
              <p className="text-xs text-gray-500 font-medium">Senador por Chiapas</p>
            </div>
          </div>
        </Link>

        {/* Links escritorio */}
        <div className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-600 hover:text-melgar-green hover:bg-green-50 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Auth */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/mis-puntos"
            className="text-gray-600 hover:text-melgar-green text-sm font-medium transition-colors whitespace-nowrap"
          >
            Mis puntos
          </Link>
          <Link
            href="/login"
            className="bg-melgar-green hover:bg-melgar-green-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-sm whitespace-nowrap"
          >
            Iniciar sesión
          </Link>
        </div>

        {/* Hamburguesa */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="xl:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors ml-2"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all ${isMobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menú móvil */}
      <motion.div
        initial={false}
        animate={isMobileOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className="xl:hidden overflow-hidden bg-white border-t border-gray-100"
      >
        <div className="px-4 py-3 space-y-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-3 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-melgar-green text-sm font-medium transition-all"
              onClick={() => setIsMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 space-y-2">
            <Link href="/mis-puntos" onClick={() => setIsMobileOpen(false)} className="block px-3 py-2.5 text-sm text-gray-700 font-medium">
              Mis puntos
            </Link>
            <Link href="/login" onClick={() => setIsMobileOpen(false)} className="block text-center bg-melgar-green text-white py-2.5 rounded-xl text-sm font-bold">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
