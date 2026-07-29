import { motion } from 'framer-motion'
import PageTransition from '../components/layout/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'
import { FADE_UP_PROPS, staggerDelay } from '../constants/animation'
import { PROJECTS } from '../constants/content'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="/projects · things i've built" />
        <PageHeader />
        <ProjectListSection />
      </div>
    </PageTransition>
  )
}

function PageHeader() {
  return (
    <div className="grid grid-cols-12 gap-6 pb-12 border-b border-border">
      <div className="col-span-12 md:col-span-10">
        <motion.h1
          {...FADE_UP_PROPS}
          transition={{ duration: 0.6 }}
          className="font-mono uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug tracking-[0.14em] mb-8"
        >
          <span className="text-violet-500">Projects.</span>
        </motion.h1>
        <motion.p
          {...FADE_UP_PROPS}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl"
        >
          Personal projects and research.
        </motion.p>
      </div>
    </div>
  )
}

function ProjectListSection() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="mb-12">
        <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
          [003] / projects
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
          Selected work
        </h2>
      </div>

      <div className="border-t border-border">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={staggerDelay(index, 0.08)}
            className="group relative grid grid-cols-12 gap-4 md:gap-6 items-baseline py-8 md:py-10 border-b border-border hover:bg-secondary/40 transition-colors px-1 md:px-2 -mx-1 md:-mx-2"
          >
            <div className="col-span-12 md:col-span-3">
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">
                {String(PROJECTS.length - index).padStart(2, '0')}
              </span>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h3 className="text-base md:text-lg font-semibold tracking-tight leading-snug group-hover:text-violet-500 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-1">
                {project.description}
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right">
              <span className="text-xs font-mono tracking-[0.16em] text-muted-foreground">
                {project.tech}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
