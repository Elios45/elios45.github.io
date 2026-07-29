import { SITE_DOMAIN, SITE_VERSION, SITE_YEAR } from '../../constants/navigation'
import StatusDot from '../ui/StatusDot'

export default function StatusBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2">
              <StatusDot color="bg-emerald-500" />
              online
            </span>
            <span className="hidden sm:inline text-muted-foreground/60">&middot;</span>
            <span className="hidden sm:inline">{SITE_DOMAIN}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-muted-foreground/60">{SITE_YEAR} &middot;</span>
            <span className="normal-case">{SITE_VERSION}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
