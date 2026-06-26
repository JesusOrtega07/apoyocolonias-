"use client";

import { label } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Fila principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Marca Red Jóvenes */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/logos/melgar-logo.jpeg" alt="Red Jóvenes Melgar" fill className="object-contain" />
              </div>
              <div>
                <p className="font-black text-gray-900 text-sm">Red Jóvenes Melgar</p>
                <p className="text-melgar-green text-xs font-semibold">Comunidad Juvenil · Tapachula</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plataforma comunitaria gamificada para jóvenes de Tapachula, Chiapas.
              Apoya tu colonia y gana premios reales.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black text-gray-900 text-xs uppercase tracking-widest mb-4">Plataforma</h4>
            <ul className="space-y-2.5">
              {[
                { label: "¿Cómo funciona?", href: "/#como-funciona" },
                { label: "Subir mi idea",    href: "/ideas/nueva"    },
                { label: "Subir resultados", href: "/resultados/nueva" },
                { label: "Premios",          href: "/premios"        },
                { label: "Galería",          href: "/#galeria"       },
                { label: "Instagram",        href: "https://www.instagram.com/red_jovenes_melgar/"},
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-500 hover:text-melgar-green text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Senador */}
          <div>
            <h4 className="font-black text-gray-900 text-xs uppercase tracking-widest mb-4">Con el apoyo de</h4>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-melgar-green/30 bg-green-50 flex-shrink-0">
                <Image
                  src="/logos/senator-melgar.jpeg"
                  alt="Sen. Luis Armando Melgar"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                  }}
                />
                {/* Fallback: logo Red Jóvenes (sin texto) */}
                <div className="absolute inset-0 -z-10 bg-green-50">
                  <Image src="/logos/melgar-logo.jpeg" alt="" fill className="object-contain p-2 opacity-30" />
                </div>
              </div>
              <div>
                <p className="font-black text-gray-900 text-sm">Senador Luis Armando Melgar</p>
                <p className="text-gray-500 text-xs">Senador por Chiapas</p>
              </div>
            </div>
            <blockquote className="border-l-2 border-melgar-yellow pl-3">
              <p className="text-gray-600 text-sm font-bold italic">¡Tenémo con que!</p>
            </blockquote>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Red Jóvenes Melgar · Tapachula, Chiapas, México
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-melgar-green rounded-full animate-pulse" />
            <span className="text-gray-400 text-xs">Plataforma activa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
