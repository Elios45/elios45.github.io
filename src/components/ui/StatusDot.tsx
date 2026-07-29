interface StatusDotProps {
  color?: string
  size?: 'sm' | 'md'
}

const SIZE_CLASSES = {
  sm: 'h-1.5 w-1.5',
  md: 'h-2 w-2',
} as const

export default function StatusDot({ color = 'bg-violet-500', size = 'sm' }: StatusDotProps) {
  const sizeClass = SIZE_CLASSES[size]

  return (
    <span className={`relative inline-flex ${sizeClass}`}>
      <span className={`absolute inset-0 rounded-full ${color} opacity-80 animate-ping`} />
      <span className={`relative inline-flex ${sizeClass} rounded-full ${color}`} />
    </span>
  )
}
