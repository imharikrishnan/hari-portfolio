/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAFAFA',      // Light gray background
        secondary: '#FFFFFF',    // White
        accent: '#2563EB',       // Clean blue
        accentDark: '#1E40AF',   // Darker blue
        textPrimary: '#0A0A0A',  // Near black
        textSecondary: '#525252', // Gray
        border: '#E5E5E5',       // Light border
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}