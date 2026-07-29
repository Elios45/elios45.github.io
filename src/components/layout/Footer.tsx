import { Link } from 'react-router-dom'
import { FOOTER_CONTACT, SITE_NAME, SITE_YEAR } from '../../constants/navigation'

const FOOTER_LINK_CLASS =
  'block text-sm md:text-base text-foreground hover:text-violet-500 transition-colors font-mono'

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-border mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              [contact]
            </p>
            <a
              className={FOOTER_LINK_CLASS}
              href={FOOTER_CONTACT.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github ↗
            </a>
            <a
              className={`${FOOTER_LINK_CLASS} mt-2`}
              href={FOOTER_CONTACT.x.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              X / Twitter ↗
            </a>
          </div>

          <div>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              [navigate]
            </p>
            <Link className={FOOTER_LINK_CLASS} to="/blog">
              /blog
            </Link>
            <Link className={`${FOOTER_LINK_CLASS} mt-2`} to="/about">
              /about
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
            &copy; {SITE_YEAR} {SITE_NAME} &middot; all rights reserved
          </p>
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
            crafted by {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  )
}
