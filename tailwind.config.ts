import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // RABHAN Design System Colors
        rabhan: {
          primary: {
            50: '#d9f0ef',
            100: '#b3e0e0',
            200: '#8ed1d0',
            300: '#68c1c1',
            400: '#42B2B1', // Main Primary
            500: '#358e8e',
            600: '#286b6a',
            700: '#1a4747',
            800: '#0d2423',
          },
          secondary: {
            50: '#cce5e5',
            100: '#99cbcb',
            200: '#66b1b1',
            300: '#339797',
            400: '#007D7D', // Main Secondary
            500: '#006464',
            600: '#004b4b',
            700: '#003232',
            800: '#001919',
          },
          error: {
            50: '#f1d3d3',
            100: '#e4a6a7',
            200: '#d67a7c',
            300: '#c94d50',
            400: '#BB2124', // Main Error
            500: '#961a1d',
            600: '#701416',
            700: '#4b0d0e',
            800: '#250707',
          },
          warning: {
            50: '#fcefdc',
            100: '#f9deb8',
            200: '#f6ce95',
            300: '#f3bd71',
            400: '#F0AD4E', // Main Warning
            500: '#c08a3e',
            600: '#90682f',
            700: '#60451f',
            800: '#302310',
          },
          success: {
            50: '#d3f1d6',
            100: '#a7e4ad',
            200: '#7ad685',
            300: '#4ec95c',
            400: '#22BB33', // Main Success
            500: '#1b9629',
            600: '#14701f',
            700: '#0e4b14',
            800: '#07250a',
          },
          info: {
            50: '#def2f8',
            100: '#bde6f2',
            200: '#9dd9eb',
            300: '#7ccde5',
            400: '#5BC0DE', // Main Info
            500: '#499ab2',
            600: '#377385',
            700: '#244d59',
            800: '#12262c',
          },
          grey: {
            50: '#eeeeee',
            100: '#dddddd',
            200: '#cccccc',
            300: '#bbbbbb',
            400: '#AAAAAA',
            500: '#888888',
            600: '#666666',
            700: '#444444',
            800: '#222222',
          },
          neutral: {
            50: '#e1e3e6',
            100: '#c4c7cc',
            200: '#a6aab3',
            300: '#898e99',
            400: '#6B7280', // Main Grey
            500: '#565b66',
            600: '#40444d',
            700: '#2b2e33',
            800: '#15171a',
          },
        },
        // Legacy colors for backward compatibility
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Poppins', 'var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // RABHAN Typography Scale
        'rabhan-xs': ['10px', { lineHeight: '12px' }],
        'rabhan-sm': ['13px', { lineHeight: '16px' }],
        'rabhan-base': ['16px', { lineHeight: '19px' }],
        'rabhan-md': ['20px', { lineHeight: '24px' }],
        'rabhan-lg': ['25px', { lineHeight: '30px' }],
        'rabhan-xl': ['31px', { lineHeight: '37px' }],
        'rabhan-2xl': ['39px', { lineHeight: '47px' }],
        'rabhan-3xl': ['49px', { lineHeight: '59px' }],
        'rabhan-4xl': ['61px', { lineHeight: '73px' }],
      },
      spacing: {
        // RABHAN Scale (4px base)
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'slide-in-from-top': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        'slide-out-to-top': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-out',
        'slide-in-from-top': 'slide-in-from-top 0.2s ease-out',
        'slide-out-to-top': 'slide-out-to-top 0.2s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;
