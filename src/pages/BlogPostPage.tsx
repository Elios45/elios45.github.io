import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import { FADE_UP_PROPS } from '../constants/animation'
import { POST_DETAILS } from '../constants/content'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? POST_DETAILS[slug] : undefined

  if (!post) return <Navigate to="/blog" replace />

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to blog
          </Link>

          <header className="text-center mb-12">
            <motion.h1
              {...FADE_UP_PROPS}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-foreground"
            >
              {post.title}
            </motion.h1>
            <motion.div
              {...FADE_UP_PROPS}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-muted-foreground font-mono"
            >
              <span>{post.date}</span>
              <span className="mx-2">&middot;</span>
              <span>{post.readTime}</span>
            </motion.div>
          </header>

          {post.image && (
            <motion.div
              {...FADE_UP_PROPS}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-12 border border-border overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>
          )}

          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              {post.sections.map((section, i) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  {...FADE_UP_PROPS}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.05 }}
                  className="mb-12"
                >
                  <h2 className="text-xl font-bold mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, j) => (
                      <p key={j} className="text-sm md:text-base leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                    {section.code && (
                      <pre className="bg-secondary/50 border border-border p-4 text-xs md:text-sm font-mono text-muted-foreground overflow-x-auto whitespace-pre-wrap break-all">
                        {section.code}
                      </pre>
                    )}
                    {section.images && section.images.length > 0 && (
                      <div className="space-y-6 pt-2">
                        {section.images.map((img, k) => (
                          <figure key={k}>
                            <img
                              src={img.src}
                              alt={img.caption}
                              className="w-full border border-border"
                            />
                            <figcaption className="mt-2 text-xs font-mono text-muted-foreground/70 text-center">
                              {img.caption}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.section>
              ))}
            </div>

            <aside className="lg:col-span-1 hidden lg:block">
              <div className="p-5 bg-secondary/30 border border-border sticky top-28">
                <h2 className="text-sm font-mono uppercase tracking-[0.18em] text-foreground mb-4">
                  Contents
                </h2>
                <ul className="space-y-2">
                  {post.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-xs md:text-sm text-muted-foreground hover:text-violet-500 transition-colors font-mono"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-xs font-mono uppercase tracking-wider text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground border border-border px-4 py-2 hover:text-foreground hover:border-foreground transition-colors"
            >
              More articles
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
