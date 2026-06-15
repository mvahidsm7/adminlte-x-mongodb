import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mongo: {
          green:        '#00ed64',
          'green-dark': '#00684a',
          'green-mid':  '#00a35c',
          'green-soft': '#c3f0d2',
          'teal-deep':  '#001e2b',
          teal:         '#003d4f',
          'teal-mid':   '#00684a',
        },
        accent: {
          purple: '#7b3ff2',
          orange: '#fa6e39',
          pink:   '#f06bb8',
          blue:   '#3d4f9f',
        },
        ink:      '#001e2b',
        charcoal: '#1c2d38',
        slate:    '#3d4f5b',
        steel:    '#5c6c7a',
        stone:    '#7c8c9a',
        muted:    '#a8b3bc',
        surface:  '#f9fbfa',
        'surface-soft':    '#f4f7f6',
        'surface-feature': '#e3fcef',
        hairline:          '#e1e5e8',
        'hairline-soft':   '#eceff1',
        'hairline-strong': '#c1ccd6',
        'hairline-dark':   '#1c2d38',
      },
      borderRadius: {
        xs:   '4px',
        sm:   '6px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        xxl:  '24px',
        full: '9999px',
      },
      boxShadow: {
        'level-0': 'none',
        'level-1': 'rgba(0, 30, 43, 0.04) 0px 1px 2px 0px',
        'level-2': 'rgba(0, 30, 43, 0.08) 0px 4px 12px 0px',
        'level-3': 'rgba(0, 30, 43, 0.12) 0px 12px 24px -4px',
        'level-4': 'rgba(0, 30, 43, 0.16) 0px 16px 48px -8px',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['Source Code Pro', 'SF Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [forms],
}

export default config
