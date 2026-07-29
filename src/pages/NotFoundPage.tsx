import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'
import { FADE_UP_PROPS } from '../constants/animation'

export default function NotFoundPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="/404 · page not found" />

        <div className="flex flex-col items-start py-16 md:py-24">
          <motion.h1
            {...FADE_UP_PROPS}
            transition={{ duration: 0.6 }}
            className="font-mono uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] text-violet-500 mb-6"
          >
            404
          </motion.h1>

          <motion.p
            {...FADE_UP_PROPS}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono uppercase text-xl sm:text-2xl md:text-3xl tracking-[0.14em] text-foreground mb-8"
          >
            not found.
          </motion.p>

          <motion.p
            {...FADE_UP_PROPS}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg mb-14"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          <motion.div
            {...FADE_UP_PROPS}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 text-sm md:text-base font-mono uppercase tracking-[0.18em] text-foreground border-b-2 border-foreground pb-2 hover:text-violet-500 hover:border-violet-500 transition-colors"
            >
              return home
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          <motion.div
            {...FADE_UP_PROPS}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 font-mono text-xs text-muted-foreground/60"
          >
            <p><span className="text-violet-500">$</span> gdb ./page</p>
            <p className="mt-1">&gt; Segmentation fault (core dumped)</p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
