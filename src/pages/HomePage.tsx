import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/layout/PageTransition'
import PostListItem from '../components/ui/PostListItem'
import { FADE_UP_PROPS } from '../constants/animation'
import { FEATURED_POSTS } from '../constants/content'

export default function HomePage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <Divider />
        <WritingSection />
        <ManifestSection />
      </div>
    </PageTransition>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-10 pb-12 md:pb-16">
      <motion.div
        {...FADE_UP_PROPS}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-10"
      >
        <span className="h-px w-12 bg-violet-500" aria-hidden="true" />
        <span>/index &middot; personal site</span>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <motion.h1
            {...FADE_UP_PROPS}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug tracking-[0.14em] mb-10"
          >
            Reverse engineer
            <br />
            <span className="text-muted-foreground/70">&amp;</span>{' '}
            <span className="text-violet-500">Malware&nbsp;analyst</span>
            <br />
            <span className="text-muted-foreground/70">breaking binaries.</span>
          </motion.h1>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-4">
        <div className="col-span-12 md:col-span-10 lg:col-span-9">
          <motion.p
            {...FADE_UP_PROPS}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground leading-snug mb-4 font-light tracking-tight"
          >
            I love breaking binaries, chasing bugs, and uncovering the secrets hidden in code.
            Reverse engineering, malware analysis, and low-level security research are where I spend my time.
          </motion.p>
          <motion.p
            {...FADE_UP_PROPS}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-base text-muted-foreground font-mono"
          >
            reverse engineering &middot; malware analysis &middot; security research
          </motion.p>
        </div>
      </div>

      <motion.div
        {...FADE_UP_PROPS}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-14 flex flex-wrap items-center gap-8 md:gap-10"
      >
        <Link
          className="group inline-flex items-center gap-2.5 text-sm md:text-base font-mono uppercase tracking-[0.18em] text-foreground border-b-2 border-foreground pb-2 hover:text-violet-500 hover:border-violet-500 transition-colors"
          to="/blog"
        >
          read writing
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
        <Link
          className="group inline-flex items-center gap-2.5 text-sm md:text-base font-mono uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
          to="/about"
        >
          about
          <span className="text-muted-foreground group-hover:text-foreground">&rarr;</span>
        </Link>
      </motion.div>
    </section>
  )
}

function Divider() {
  return (
    <div className="relative w-full h-28 sm:h-36 md:h-44 overflow-hidden">
      <img
        src="/eye.jpg"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-[70%_30%] opacity-25 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

function WritingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
            [001] / writing
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
            Latest dispatches
          </h2>
        </div>
        <Link
          className="group hidden sm:inline-flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
          to="/blog"
        >
          view all
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="border-t border-border">
        {FEATURED_POSTS.map((post, index) => (
          <PostListItem key={post.href} post={post} index={index} total={FEATURED_POSTS.length} />
        ))}
      </div>

      <div className="mt-12 sm:hidden">
        <Link
          className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.18em] text-foreground border-b-2 border-foreground pb-2 hover:text-violet-500 hover:border-violet-500 transition-colors"
          to="/blog"
        >
          view all writing
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

function ManifestSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground sticky top-32">
            [002] / manifest
          </p>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8">
          <p className="text-lg md:text-xl lg:text-2xl leading-[1.4] tracking-tight font-light text-foreground">
            These notes are mostly for me.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed">
            You can read them if you want.
          </p>
        </div>
      </div>
    </section>
  )
}
