import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import { Logo } from './Logo'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape and when the viewport grows to desktop size.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onResize = () => desktop.matches && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'border-b border-ink/5 bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between lg:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#pricing" className="btn-primary hidden sm:inline-flex">
            Get Started
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? 'max-h-[calc(100dvh-4rem)] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="container pb-6 pt-2">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-b border-ink/5 py-4 font-display text-lg font-semibold text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#pricing" onClick={closeMenu} className="btn-primary mt-6 w-full">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}
