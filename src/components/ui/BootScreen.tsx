import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SITE_NAME } from '../../constants/navigation'

const BOOT_DURATION_MS = 3000
const TICK_INTERVAL_MS = 30
const COMPLETE_DELAY_MS = 400

const BOOT_LINES = [
  { at: 5, text: '$ ./elios --init', accent: true },
  { at: 12, text: '[*] mapping virtual memory regions...' },
  { at: 22, text: '[+] .text segment loaded at 0x00400000' },
  { at: 32, text: '[+] stack canary: 0xDEADBEEFCAFEBABE' },
  { at: 42, text: '[*] disassembling entry point...' },
  { at: 52, text: '[+] NX bit detected — bypassing via ROP chain' },
  { at: 62, text: '[*] resolving PLT/GOT entries...' },
  { at: 72, text: '[+] ASLR leak obtained: libc_base = 0x7f3c8a200000' },
  { at: 80, text: '[*] injecting payload into .bss...' },
  { at: 88, text: '[+] shellcode written — 47 bytes, null-free' },
  { at: 94, text: '[+] exploitation successful' },
  { at: 98, text: '> root@elios:~# welcome', accent: true },
]

interface BootScreenProps {
  onComplete: () => void
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const step = (TICK_INTERVAL_MS / BOOT_DURATION_MS) * 100
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step + Math.random() * 1.5
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, COMPLETE_DELAY_MS)
          return 100
        }
        return next
      })
    }, TICK_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grain fixed inset-0 z-[100] select-none overflow-hidden bg-background"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/15 to-transparent" />

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-10 lg:p-16">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/70 sm:text-sm">
            {SITE_NAME.toUpperCase()} <span className="text-violet-500">//</span> EXPLOIT.DEV
          </span>
          <span className="font-mono text-xs text-violet-500/70 animate-pulse">
            &#x25CF;
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-1 font-mono text-xs sm:text-sm leading-relaxed mb-12">
          {BOOT_LINES.map((line) => (
            <motion.span
              key={line.at}
              initial={{ opacity: 0, x: -4 }}
              animate={{
                opacity: progress >= line.at ? 1 : 0,
                x: progress >= line.at ? 0 : -4,
              }}
              transition={{ duration: 0.2 }}
              className={
                line.accent
                  ? 'text-violet-500 font-semibold'
                  : 'text-foreground/50'
              }
            >
              {line.text}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-6">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-foreground/40">
            {Math.round(Math.min(progress, 100))}%
          </span>

          <div className="flex items-center gap-2 flex-1 max-w-md">
            <span className="h-2 w-px bg-violet-500/50" aria-hidden="true" />
            <div
              className="relative h-0.5 flex-1 overflow-hidden bg-violet-500/15"
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="absolute inset-y-0 left-0 bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-[width] duration-200 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <span className="h-2 w-px bg-violet-500/50" aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
