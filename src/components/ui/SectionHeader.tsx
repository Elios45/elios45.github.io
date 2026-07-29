import { motion } from 'framer-motion'
import { FADE_UP_PROPS } from '../../constants/animation'

interface SectionHeaderProps {
  label: string
}

export default function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <motion.div
      {...FADE_UP_PROPS}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 text-sm md:text-base font-mono uppercase tracking-[0.2em] text-muted-foreground mb-10 pt-6"
    >
      <span className="h-px w-8 bg-violet-500" aria-hidden="true" />
      <span>{label}</span>
    </motion.div>
  )
}
