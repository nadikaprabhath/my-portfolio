import type { Config } from "tailwindcss"
// import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  // ...defaultConfig,
  content: [
    // ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ...defaultConfig.theme,
    extend: {
      // ...defaultConfig.theme.extend,
      fontFamily: {
        inter: ["var(--font-inter)"],
        "fira-code": ["var(--font-fira-code)"],
      },
      colors: {
        // ...defaultConfig.theme.extend.colors,
        github: {
          bg: "#0D1117",
          secondary: "#161B22",
          card: "#21262D",
          border: "#30363D",
          blue: "#58A6FF",
          green: "#3FB950",
          red: "#F85149",
          yellow: "#F2CC60",
          purple: "#A855F7",
          text: {
            primary: "#F0F6FC",
            secondary: "#8B949E",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
  plugins: [require("tailwindcss-animate")],
}

export default config
