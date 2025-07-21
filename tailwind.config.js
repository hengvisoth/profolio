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
        main: '#fffff', // Main theme color (calm blue)
        primary: '#eaa255', // Accent (modern soft purple)
        background: '#0F172A', // Dark navy background
        text: '#E5E7EB', // Clean readable text
        'text-muted': '#9CA3AF', // Less prominent text
        button: '#1E293B', // Darker background for buttons
        'button-hover': '#334155', // Lighter hover
        disabled: '#4B5563',
        danger: '#F87171' // Alert or error
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
    // require('tailwindcss'),
    // require('autoprefixer'),
  ]
}
