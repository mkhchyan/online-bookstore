import { cva } from 'class-variance-authority'

export const buttonCVA = cva(
  ['transition-all', 'delay-150', 'ease-out', 'hover:scale-105', 'border'],
  {
    variants: {
      shadow: {
        true: ['shadow'],
      },
      variant: {
        rounded: ['rounded'],
      },
      colorScheme: {
        primary: ['bg-primary-500', 'text-primary-50'],
        secondary: ['bg-secondary-500', 'text-secondary-50'],
        light: ['bg-neutral-50', 'text-neutral-900'],
      },
    },
    defaultVariants: {
      colorScheme: 'light',
    },
  }
)