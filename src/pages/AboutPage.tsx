import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'
import { FADE_UP_PROPS } from '../constants/animation'
import { CONTACT_ITEMS } from '../constants/content'
import { SITE_NAME } from '../constants/navigation'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label={`/about · who is ${SITE_NAME}`} />
        <IntroSection />
        <BioSection />
        <ToolkitSection />
        <ContactSection />
      </div>
    </PageTransition>
  )
}

function IntroSection() {
  return (
    <div className="grid grid-cols-12 gap-6 md:gap-10 pb-12 border-b border-border">
      <motion.div
        {...FADE_UP_PROPS}
        transition={{ duration: 0.6 }}
        className="col-span-12 md:col-span-4 lg:col-span-3"
      >
        <div className="relative aspect-square w-full max-w-[320px] border border-border overflow-hidden bg-secondary">
          <img
            src="/avatar.jpg"
            alt="Elios"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-violet-500/10 pointer-events-none" />
        </div>
        <p className="mt-4 text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
          [whois]
        </p>
      </motion.div>

      <div className="col-span-12 md:col-span-8 lg:col-span-9">
        <motion.h1
          {...FADE_UP_PROPS}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug tracking-[0.14em] mb-8"
        >
          I&apos;m <span className="text-violet-500">Elios.</span>
        </motion.h1>
        <motion.p
          {...FADE_UP_PROPS}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
        >
          Malware analyst and reverse engineer. I take binaries apart, trace what they do, and figure out why they do it.
        </motion.p>
      </div>
    </div>
  )
}

function BioSection() {
  return (
    <section className="grid grid-cols-12 gap-6 md:gap-12 py-16 md:py-20">
      <div className="col-span-12 md:col-span-3">
        <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground sticky top-32">
          [bio]
        </p>
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-8 space-y-7 text-sm md:text-base lg:text-lg leading-[1.6] text-foreground font-light tracking-tight">
        <p>
          I reverse malware, look into{' '}
          <span className="text-foreground underline decoration-violet-500/50 decoration-[3px] underline-offset-[6px]">
            n-days
          </span>
          , and do CTFs and pwn. I train on pwn.college and Maldev Academy.
        </p>
        <p className="text-base md:text-lg text-muted-foreground">
          If I find something interesting, it ends up here.
        </p>
      </div>
    </section>
  )
}

function ToolkitSection() {
  return (
    <section className="grid grid-cols-12 gap-6 md:gap-12 py-12 border-t border-border">
      <div className="col-span-12 md:col-span-3">
        <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground sticky top-32">
          [toolkit]
        </p>
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-8">
        <div className="flex flex-wrap gap-3">
          {[
            'IDA Pro', 'WinDBG', 'Pwndbg',
            'Python', 'C/C++', 'Assembly',
          ].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 text-xs md:text-sm font-mono uppercase tracking-wider text-muted-foreground border border-border hover:text-violet-500 hover:border-violet-500/50 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="grid grid-cols-12 gap-6 md:gap-12 py-12 border-t border-border">
      <div className="col-span-12 md:col-span-3">
        <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
          [contact]
        </p>
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-8">
        <dl className="divide-y divide-border border-y border-border">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.label}
              className="group grid grid-cols-12 py-5 hover:bg-secondary/40 transition-colors -mx-1 md:-mx-2 px-1 md:px-2"
              href={item.href}
              target={item.external ? '_blank' : '_self'}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              <dt className="col-span-4 md:col-span-3 text-xs md:text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground self-center">
                {item.label}
              </dt>
              <dd className="col-span-8 md:col-span-9 font-mono text-sm md:text-lg text-foreground group-hover:text-violet-500 transition-colors inline-flex items-center gap-2.5">
                {item.value}
                <ArrowUpRight
                  className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                  aria-hidden="true"
                />
              </dd>
            </a>
          ))}
        </dl>
      </div>
    </section>
  )
}
