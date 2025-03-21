// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' if you prefer
  content: [
    './pages/**/*.{ts,tsx}', // Adjust for your file structure
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Use CSS variables for the theme colors (from components.json)
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        // Add other custom colors here if necessary
      },
    },
  },
  plugins: [],
};
