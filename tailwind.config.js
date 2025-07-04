/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-neon-red',
    'bg-light-red',
    'bg-neon-green', 
    'bg-neon-blue',
    'text-neon-red',
    'text-light-red',
    'text-neon-green',
    'text-neon-blue'
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff073a',
        'light-red': '#ff9999',
        'neon-green': '#39ff14',
        'neon-blue': '#00d4ff',
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'dark-border': '#2a2a2a',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 6s ease infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px theme(colors.neon-blue), 0 0 20px theme(colors.neon-blue), 0 0 35px theme(colors.neon-blue)' 
          },
          '100%': { 
            boxShadow: '0 0 10px theme(colors.neon-blue), 0 0 40px theme(colors.neon-blue), 0 0 80px theme(colors.neon-blue)' 
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 