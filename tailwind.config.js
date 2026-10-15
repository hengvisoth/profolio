/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      animation: {
        breathing: 'breathing 3s ease-in-out infinite'
      },
      keyframes: {
        breathing: {
          '0%': {
            transform: 'translateY(0)' // Start at the normal position
          },
          '50%': {
            transform: 'translateY(-10px)' // Move up at 50% progress
          },
          '100%': {
            transform: 'translateY(0)' // Return to the original position
          }
        }
      },
      screens: {
        large: '1540px', // Custom breakpoint named 'large' for 1440px
        lg: '1440px'
      },
      fontFamily: {
        sans: ['Host Grotesk', 'sans-serif'],
        Angkor: ['Angkor', 'cursive']
      },
      fontSize: {
        // Header font sizes h1
        'lg-title': '1.875rem', // Large screen title size
        'md-title': '1.875rem', // Medium screen title size
        'sm-title': '1.5rem', // Small screen title size

        // Header font sizes h1

        // Header font sizes h2
        'lg-h2': '2rem', // Large screen title size
        'md-h2': '1.875rem', // Medium screen title size
        'sm-h2': '1.5rem', // Small

        //h3
        'h3-lg': '1.5rem', // Large screen title size
        'h3-md': '1.25rem', // Medium screen title size
        'h3-sm': '1rem', // Small screen title size

        //h4
        'h4-lg': '1.25rem', // Large screen title size
        'h4-md': '1rem', // Medium screen title size
        'h4-sm': '0.75rem', // Small screen title size

        // // Paragraph font sizes
        // 'p-lg': '1.125rem',  // Larger than default (lg)
        // 'p-md': '1rem',      // Default size (base)
        // 'p-sm': '0.875rem',  // Slightly smaller than default (sm)

        // btnTitle font sizes
        'lg-btn': '1rem', // This is equivalent to Tailwind's 'lg'
        'md-btn': '0.75rem', // This is equivalent to Tailwind's 'base'
        'sm-btn': '0.6rem' // This is equivalent to Tailwind's 'xs'
      },
      colors: {
        main: 'rgb(var(--c-main) / <alpha-value>)',
        primary: 'rgb(var(--c-main) / <alpha-value>)',
        'primary-strong': 'rgb(var(--c-main-strong) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        background: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        'surface-strong': 'rgb(var(--c-surface-strong) / <alpha-value>)',
        softwhite: 'rgb(var(--c-text) / <alpha-value>)',
        text: 'rgb(var(--c-text) / <alpha-value>)',
        'text-muted': 'rgb(var(--c-muted) / <alpha-value>)',
        divider: 'rgba(255, 255, 255, 0.08)',
        button: 'rgb(var(--c-surface) / <alpha-value>)',
        'button-hover': 'rgb(var(--c-surface-hover) / <alpha-value>)',
        disabled: '#4b5563',
        danger: '#f87171'
      },
      boxShadow: {
        glow: '0 20px 40px -15px rgb(var(--c-main) / 0.45)',
        'glow-warm': '0 18px 35px -12px rgb(var(--c-main-strong) / 0.5)'
      },
      backdropBlur: {
        brand: '20px'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
    // require('tailwindcss'),
    // require('autoprefixer'),
  ]
}
