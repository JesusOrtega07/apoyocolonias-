import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        melgar: {
          // Verde vibrante — figura central del logo
          green: "#22c55e",
          "green-dark": "#16a34a",
          "green-light": "#86efac",
          // Azul marino oscuro — texto principal del logo
          navy: "#1E3A5F",
          "navy-dark": "#0D1B2A",
          "navy-mid": "#142035",
          // Amarillo dorado — figura inferior izquierda del logo
          yellow: "#FACC15",
          "yellow-dark": "#CA8A04",
          // Celeste/Azul — figura derecha del logo
          sky: "#38BDF8",
          "sky-dark": "#0284C7",
          // Naranja/Rojo — arco superior del logo (acento de energía)
          orange: "#FB923C",
          "orange-dark": "#EA580C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
