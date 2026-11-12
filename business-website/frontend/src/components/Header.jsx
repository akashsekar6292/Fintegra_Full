import { useEffect, useState } from 'react'
import Icon from './Icon'
import { LOGO_SRC, NAV_LINKS } from '../constants'

export default function Header({ activeSection }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkClass = (id) =>
    activeSection === id
      ? 'transition-colors text-primary font-bold'
      : 'font-label text-label-lg text-on-surface-variant hover:text-on-surface transition-colors'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[80rem] mx-auto px-6 lg:px-12 flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-lg min-w-0">
          <a className="flex items-center gap-space-sm" href="#home">
            <img
              alt="Fintegra Logo"
              className="h-8 w-auto object-contain"
              src={LOGO_SRC}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="font-label text-headline-sm font-semibold tracking-tight text-on-surface">
              Fintegra
            </span>
          </a>
          <div className="hidden xl:flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-low text-on-surface-variant">
            <Icon name="lock" className="text-primary text-[16px]" />
            <span className="font-label text-label-md uppercase tracking-wider text-on-surface-variant">
              Private Wealth Tax Advisory
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-space-lg" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.id} className={linkClass(link.id)} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="font-label text-label-md text-on-surface-variant">Advisory Desk</span>
            <span className="font-caption text-caption text-primary font-medium">
              +1 (800) 492-8172
            </span>
          </div>
          <a
            className="hidden md:inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-primary text-on-primary font-label text-label-lg shadow-[0_12px_36px_-10px_rgba(13,148,136,0.25)] hover:bg-primary-container hover:text-on-primary-container transition-all"
            href="#lead-form"
          >
            Get a Free Consultation
          </a>
          <div className="hidden sm:flex w-8 h-8 rounded-full bg-primary items-center justify-center">
            <Icon name="person" className="text-on-primary text-[18px]" />
          </div>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-[22px]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-xl">
          <nav className="max-w-[80rem] mx-auto px-6 py-4 flex flex-col gap-3" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                className={`${linkClass(link.id)} py-2`}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex items-center justify-center px-space-lg py-3 rounded-full bg-primary text-on-primary font-label text-label-lg"
              href="#lead-form"
              onClick={() => setOpen(false)}
            >
              Get a Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
