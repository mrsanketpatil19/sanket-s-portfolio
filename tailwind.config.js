/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-primary',
    'bg-secondary',
    'bg-accent',
    'bg-dark-bg',
    'bg-dark-card',
    'bg-dark-teal',
    'text-primary',
    'text-secondary',
    'text-accent',
    'text-white',
    'text-gray-300',
    'text-gray-400',
    'border-primary',
    'border-secondary',
    'border-accent',
    'border-gray-700',
    'hover:bg-primary',
    'hover:bg-secondary',
    'hover:text-primary',
    'hover:text-secondary',
    'hover:border-primary',
    'hover:border-secondary'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#14b8a6', // Bright teal
        'secondary': '#0f766e', // Darker teal
        'accent': '#5eead4', // Light teal
        'dark-bg': '#0f172a', // Dark blue background
        'dark-card': '#1e293b', // Dark card background
        'dark-teal': '#134e4a', // Dark teal
        'gray-50': '#f8fafc',
        'gray-100': '#f1f5f9',
        'gray-200': '#e2e8f0',
        'gray-300': '#cbd5e1',
        'gray-400': '#94a3b8',
        'gray-500': '#64748b',
        'gray-600': '#475569',
        'gray-700': '#334155',
        'gray-800': '#1e293b',
        'gray-900': '#0f172a',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px theme(colors.primary), 0 0 20px theme(colors.primary), 0 0 35px theme(colors.primary)' 
          },
          '100%': { 
            boxShadow: '0 0 10px theme(colors.primary), 0 0 40px theme(colors.primary), 0 0 80px theme(colors.primary)' 
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(20, 184, 166, 0.1), 0 10px 20px -2px rgba(20, 184, 166, 0.05)',
        'medium': '0 4px 25px -5px rgba(20, 184, 166, 0.15), 0 10px 10px -5px rgba(20, 184, 166, 0.05)',
        'large': '0 10px 40px -10px rgba(20, 184, 166, 0.2), 0 2px 10px -2px rgba(20, 184, 166, 0.1)',
        'glow': '0 0 20px rgba(20, 184, 166, 0.3)',
      },
    },
  },
  plugins: [],
} 