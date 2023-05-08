import { buttonCVA } from './Button.cva'

import type { ButtonHTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCVA> {}