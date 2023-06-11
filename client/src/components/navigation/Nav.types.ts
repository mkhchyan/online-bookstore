import { navCVA } from './Nav.cva'

import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'

export type NavItem = {
    href: string
    children: ReactNode
    isActive?: boolean
}

export interface NavProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navCVA> {
    items: NavItem[]
}