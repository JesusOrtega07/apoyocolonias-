import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Jóvenes Melgar | Comunidad Juvenil Tapachula",
  description:
    "Plataforma gamificada de la Red Jóvenes Melgar, Tapachula. Realiza acciones de apoyo comunitario, acumula puntos y canjéalos por increíbles premios.",
  keywords: ["Tapachula", "jóvenes", "comunidad", "voluntariado", "premios", "Red Melgar"],
  authors: [{ name: "Red Jóvenes Melgar" }],
  openGraph: {
    title: "Red Jóvenes Melgar",
    description: "Transforma tu comunidad. Gana puntos. Canjea premios.",
    locale: "es_MX",
    type: "website",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
