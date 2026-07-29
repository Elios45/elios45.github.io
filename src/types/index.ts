export interface NavLink {
  path: string
  label: string
}

export interface Post {
  date: string
  title: string
  summary: string
  href: string
  type: 'read' | 'external'
}

export interface Project {
  name: string
  description: string
  tech: string
}

export interface ContactItem {
  label: string
  value: string
  href: string
  external: boolean
}


export interface SectionImage {
  src: string
  caption: string
}

export interface PostSection {
  id: string
  title: string
  content: string[]
  images?: SectionImage[]
  code?: string
}

export interface PostDetail {
  slug: string
  title: string
  date: string
  readTime: string
  image?: string
  tags: string[]
  sections: PostSection[]
}
