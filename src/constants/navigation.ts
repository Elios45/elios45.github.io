import type { NavLink } from '../types'

export const SITE_NAME = 'elios'
export const SITE_DOMAIN = 'elios.pwn'
export const SITE_VERSION = 'v0x01'
export const SITE_YEAR = '2026'

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'index' },
  { path: '/projects', label: 'projects' },
  { path: '/blog', label: 'blog' },
  { path: '/about', label: 'about' },
]

export const FOOTER_CONTACT = {
  x: { label: '@Elios45', href: 'https://x.com/Elios45' },
  github: { label: 'Elios45', href: 'https://github.com/Elios45' },
}
