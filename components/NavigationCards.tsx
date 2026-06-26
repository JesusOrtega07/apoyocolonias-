"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ─── Tipos ─── */
type NavCard = {
  id: number;
  icon: string;
  subtitulo: string;
  titulo: string;
  descripcion: string;
  href: string;
  gradient: string;
  border: string;
  subtituloColor: string;
  ctaClass: string;
  ctaLabel: string;
  glowClass: string;
};

/* ─── Data ─── */
const NAV_CARDS: NavCard[] = [
  {
    id: 1,
    icon: "🏆",
    subtitulo: "Tienda de puntos",
    titulo: "Apartado de Premios",
    descripcion:
      "Explora el catálogo completo: gadgets, ropa del movimiento, experiencias únicas y la oportunidad de escalar tu proyecto con apoyo de líderes.",
    href: "/premios",
    gradient: "from-melgar-yellow/15 via-melgar-yellow/5 to-transparent",
    border: "border-melgar-yellow/25 hover:border-melgar-yellow/60",
    subtituloColor: "text-melgar-yellow",
    ctaClass:
      "bg-melgar-yellow hover:bg-melgar-yellow-dark text-melgar-navy-dark",
    ctaLabel: "🛍️ Explorar premios →",
    glowClass: "card-glow-yellow",
  },
  {
    id: 2,
    icon: "💡",
    subtitulo: "Propuesta comunitaria",
    titulo: "Subir mi Idea",
    descripcion:
      "¿Tienes una idea para mejorar tu colonia? Regístrala aquí. El staff la revisará y, una vez aprobada, podrás ejecutarla y ganar puntos.",
    href: "/ideas/nueva",
    gradient: "from-melgar-green/15 via-melgar-green/5 to-transparent",
    border: "border-melgar-green/25 hover:border-melgar-green/60",
    subtituloColor: "text-melgar-green",
    ctaClass: "bg-melgar-green hover:bg-melgar-green-dark text-white",
    ctaLabel: "📝 Proponer idea →",
    glowClass: "card-glow-green",
  },
  {
    id: 3,
    icon: "📸",
    subtitulo: "¿Ya tienes puntos?",
    titulo: "Reclamar Premios",
    descripcion:
      "Completaste tu proyecto comunitario. Sube tus evidencias para que el staff las valide, recibe tus puntos y canjéalos por lo que más quieras.",
    href: "/evidencias",
    gradient: "from-melgar-sky/15 via-melgar-sky/5 to-transparent",
    border: "border-melgar-sky/25 hover:border-melgar-sky/60",
    subtituloColor: "text-melgar-sky",
    ctaClass: "bg-melgar-sky hover:bg-melgar-sky-dark text-white",
    ctaLabel: "🎯 Subir evidencias →",
    glowClass: "card-glow-sky",
  },
];

/* ─── Tarjeta de navegación ─── */
const NavCard = ({ card, index }: { card: NavCard; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -10 }}
    className={`group relative bg-gradient-to-br ${card.gradient} border ${card.border} rounded-3xl p-8 flex flex-col h-full transition-all duration-300 shadow-xl ${card.glowClass} backdrop-blur-sm`}
  >
    {/* Icono grande */}
    <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
      {card.icon}
    </div>

    {/* Contenido */}
    <div className="flex-1">
      <p className={`text-xs font-black uppercase tracking-widest ${card.subtituloColor} mb-2`}>
        {card.subtitulo}
      </p>
      <h3 className="text-white font-black text-2xl md:text-3xl mb-4 leading-tight">
        {card.titulo}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">
        {card.descripcion}
      </p>
    </div>

    {/* CTA */}
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={card.href}
        className={`block w-full text-center ${card.ctaClass} font-bold py-3.5 px-6 rounded-xl transition-all text-sm shadow-lg`}
      >
        {card.ctaLabel}
      </Link>
    </motion.div>
  </motion.div>
);

/* ─── Componente principal ─── */
const NavigationCards = () => {
  return (
    <section className="py-24 bg-melgar-navy-dark" id="acciones">
      <div className="max-w-7xl mx-auto px-4">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-melgar-sky/10 border border-melgar-sky/30 rounded-full px-4 py-2 mb-4">
            <span className="text-melgar-sky text-sm font-semibold">
              ⚡ Acceso Rápido
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            ¿Qué quieres{" "}
            <span className="text-gradient-green">hacer hoy?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Todo lo que necesitas para participar, en un solo lugar.
          </p>
        </motion.div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NAV_CARDS.map((card, index) => (
            <NavCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationCards;
