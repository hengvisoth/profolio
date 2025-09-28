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
        navigation: [
          'Poppins',
          'sans-serif',
          'Dancing Script',
          'cursive',
          'Dangrek',
          'cursive',
          'Fasthand',
          'cursive'
        ],
        poppins: ['Poppins', 'sans-serif'],
        Angkor: ['Angkor', 'cursive'],
        DancingScript: ['Dancing Script', 'cursive'],
        Dangrek: ['Dangrek', 'cursive'],
        Fasthand: ['Fasthand', 'cursive'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace']
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
        main: '#fb923c',
        primary: '#f97316',
        'primary-strong': '#ea580c',
        accent: '#fdba74',
        background: '#0f172a',
        surface: 'rgba(15, 23, 42, 0.65)',
        'surface-strong': 'rgba(10, 12, 24, 0.82)',
        softwhite: '#f8fafc',
        text: '#e5e7eb',
        'text-muted': '#9ca3af',
        divider: 'rgba(255, 255, 255, 0.08)',
        button: '#1f2937',
        'button-hover': '#334155',
        disabled: '#4b5563',
        danger: '#f87171'
      },
      boxShadow: {
        glow: '0 20px 40px -15px rgba(249, 115, 22, 0.45)',
        'glow-warm': '0 18px 35px -12px rgba(234, 88, 12, 0.5)'
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
