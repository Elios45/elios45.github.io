import { motion } from 'framer-motion'
import PageTransition from '../components/layout/PageTransition'
import SectionHeader from '../components/ui/SectionHeader'
import PostListItem from '../components/ui/PostListItem'
import { POSTS } from '../constants/content'

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="/blog · research & notes" />

        <div className="grid grid-cols-12 gap-6 pb-12 border-b border-border">
          <div className="col-span-12 md:col-span-10">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug tracking-[0.14em] mb-8"
            >
              All <span className="text-violet-500">writing.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
            >
              Writeups, reverse engineering notes, and deep dives into malware.
            </motion.p>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="border-t border-border">
            {POSTS.map((post, index) => (
              <PostListItem key={post.href} post={post} index={index} total={POSTS.length} />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
