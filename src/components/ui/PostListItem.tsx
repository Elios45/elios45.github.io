import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerDelay } from '../../constants/animation'
import type { Post } from '../../types'

interface PostListItemProps {
  post: Post
  index: number
  total: number
}

const ITEM_CLASS =
  'group relative grid grid-cols-12 gap-4 md:gap-6 items-baseline py-8 md:py-10 border-b border-border hover:bg-secondary/40 transition-colors px-1 md:px-2 -mx-1 md:-mx-2'

function PostContent({ post, number }: { post: Post; number: string }) {
  const isExternal = post.type === 'external'
  const TypeIcon = isExternal ? ExternalLink : ArrowUpRight

  return (
    <>
      <div className="col-span-12 md:col-span-2">
        <span className="text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground">
          {number} &middot; {post.date}
        </span>
      </div>

      <div className="col-span-12 md:col-span-7">
        <h3 className="text-base md:text-lg font-semibold tracking-tight leading-snug group-hover:text-violet-500 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-1">{post.summary}</p>
      </div>

      <div className="col-span-12 md:col-span-3 md:text-right">
        <span className="inline-flex items-center gap-1.5 text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground group-hover:text-violet-500 transition-colors">
          {isExternal ? 'external' : 'read'}
          <TypeIcon
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </>
  )
}

export default function PostListItem({ post, index, total }: PostListItemProps) {
  const isExternal = post.type === 'external'
  const number = String(total - index).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={staggerDelay(index)}
    >
      {isExternal ? (
        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className={ITEM_CLASS}
        >
          <PostContent post={post} number={number} />
        </a>
      ) : (
        <Link to={post.href} className={ITEM_CLASS}>
          <PostContent post={post} number={number} />
        </Link>
      )}
    </motion.article>
  )
}
