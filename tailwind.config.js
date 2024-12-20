/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Para garantir que Tailwind CSS seja aplicado nos arquivos da pasta `app`
    "./pages/**/*.{js,ts,jsx,tsx}", // Para incluir também as páginas
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19DB8A",
        secondary: "#36B4FF",
        tertiary: "#FFA130",
        alternate: "#E0E3E7",
        primaryText: "#14181B",
        secondaryText: "#57636C",
        primaryBackground: "#F1F4F8",
        secondaryBackground: "#FFFFFF",
        accent1: "#4C19DB8A",
        accent2: "#4D36B4FF",
        accent3: "#4DFFA130",
        accent4: "#ABFFFFFF",
        success: "#16B070",
        warning: "#CC8E30",
        error: "#FF5963",
        info: "#6B6B6B",
      },
    },
  },
  plugins: [],
}
