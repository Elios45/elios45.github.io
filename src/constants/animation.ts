import type { Variants } from 'framer-motion'

export const FADE_UP_PROPS = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export function staggerDelay(index: number, base = 0.06) {
  return { duration: 0.4, delay: index * base }
}
