/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#27ae60",
          "primary-focus": "#219653",
          "primary-content": "#ffffff",
          "secondary": "#2c3e50",
          "secondary-focus": "#1a252f",
          "secondary-content": "#ffffff",
          "accent": "#3498db",
          "accent-focus": "#2980b9",
          "accent-content": "#ffffff",
          "neutral": "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-300": "#ecf0f1",
          "base-content": "#1e293b",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#e74c3c",
        },
      },
      "light",
    ],
    rtl: true,
  },
  plugins: [require("daisyui")],
} 