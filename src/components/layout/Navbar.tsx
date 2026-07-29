import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS, SITE_NAME } from '../../constants/navigation'

function getPathSuffix(pathname: string): string {
  if (pathname === '/') return ''
  return pathname
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathSuffix = getPathSuffix(pathname)

  return (
    <>
      <nav className="fixed top-9 inset-x-0 z-40 transition-all duration-300 bg-background/40 backdrop-blur-md border-b border-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              className="group flex items-baseline gap-1.5 font-mono text-base md:text-lg tracking-tight"
              to="/"
            >
              <span className="text-violet-500">$</span>
              <span className="text-foreground font-semibold">{SITE_NAME}</span>
              {pathSuffix && (
                <span className="text-muted-foreground hidden sm:inline">{pathSuffix}</span>
              )}
              <span className="text-violet-500 cursor" aria-hidden="true" />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path
                return (
                  <Link
                    key={link.path}
                    className={`relative font-mono text-sm uppercase tracking-[0.18em] transition-colors py-1.5 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                    to={link.path}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-violet-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                )
              })}
            </div>

            <button
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[6.25rem] inset-x-0 z-30 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  className={`font-mono text-lg uppercase tracking-[0.18em] transition-colors py-2 ${
                    pathname === link.path ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
