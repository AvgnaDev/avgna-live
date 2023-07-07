/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        clipPath: "var(--clipPath)",
      },
      screens: {
        xs: "475px",
      },
      maxWidth: {
        maxWidth: "var(--maxWidth)",
      },
      fontFamily: {
        SSP: "var(--fonts-SSP)",
        italic: "var(--font-italic)",
      },
      colors: {
        backgroundColor: "var(--background-bg)",
      },
      animation: {
        scaling: "scaling 5s infinite",
        tranlating: "tranlating 5s infinite",
        customPing: "customPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        rotatingTriangle: "rotatingTriangle 17s infinite alternate ease-in-out",
        rotatingCricle: "rotatingCricle 15s infinite alternate ease-in-out",
      },
      keyframes: {
        scaling: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(1.2)",
          },
          "66%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        tranlating: {
          "66%": {
            transform: "translateX(80px)",
          },
        },
        customPing: {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
        rotatingTriangle: {
          to: {
            transform: "translate(50vw, 85vh)",
          },
        },
        rotatingCricle: {
          to: {
            transform: "translate(50vw, -50vh)",
          },
        },
      },
    },
  },
  plugins: [],
};
