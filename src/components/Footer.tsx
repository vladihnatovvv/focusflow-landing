import { useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { Logo } from './Logo'

const linkGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Download', href: '#top' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press kit', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
]

const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: 'X (Twitter)',
    href: 'https://x.com',
    icon: (
      <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.36 5.77L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2Z" />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3.1 0-4.1.06-3.6.17-5.6 2.2-5.8 5.8C2 8.9 2 9.3 2 12s0 3.1.06 4.1c.17 3.6 2.2 5.6 5.8 5.8 1.1.05 1.4.06 4.1.06s3.1 0 4.1-.06c3.6-.17 5.6-2.2 5.8-5.8.05-1.1.06-1.4.06-4.1s0-3.1-.06-4.1c-.17-3.6-2.2-5.6-5.8-5.8C15.1 2 14.7 2 12 2Zm0 1.8c2.7 0 3 0 4 .06 2.7.12 4 1.4 4.1 4.1.05 1.1.06 1.4.06 4s0 3-.06 4c-.12 2.7-1.4 4-4.1 4.1-1.1.05-1.4.06-4 .06s-3 0-4-.06c-2.7-.12-4-1.4-4.1-4.1C3.8 15 3.8 14.7 3.8 12s0-3 .06-4C4 5.3 5.3 4 8 3.9c1-.05 1.3-.06 4-.06Z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    ),
  },
]

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demo only: in production this would POST to the mailing-list provider.
    setSubmitted(true)
    setEmail('')
  }

  if (submitted) {
    return (
      <p role="status" className="rounded-2xl bg-white/10 px-5 py-4 text-sm text-white">
        Thanks! Check your inbox — your first focus tips are on the way.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-flow-400 focus:outline-none"
      />
      <button type="submit" className="btn-accent">
        Subscribe
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      {/* CTA + contact */}
      <div className="container grid gap-10 border-b border-white/10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to find your flow?</h2>
          <p className="mt-4 max-w-md text-white/65">
            Get one practical focus tip every week and be the first to hear about new features.
          </p>
          <div className="mt-6 max-w-md">
            <NewsletterForm />
          </div>
        </div>

        <address className="grid gap-4 not-italic sm:grid-cols-2 lg:self-end">
          <a
            href="mailto:hello@focusflow.app"
            className="flex items-start gap-3 rounded-2xl bg-white/5 p-5 transition-colors hover:bg-white/10"
          >
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-flow-400" aria-hidden="true" />
            <span>
              <span className="block text-sm text-white/60">Write to us</span>
              <span className="block font-semibold">hello@focusflow.app</span>
            </span>
          </a>
          <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-flow-400" aria-hidden="true" />
            <span>
              <span className="block text-sm text-white/60">Studio</span>
              <span className="block font-semibold">Kyiv · Remote-first</span>
            </span>
          </div>
        </address>
      </div>

      {/* Links */}
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            The calm productivity app for deep, meaningful work.
          </p>
          <ul className="mt-6 flex gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-flow-500 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {linkGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-white/40">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {CURRENT_YEAR} FocusFlow. All rights reserved.</p>
          <p>Made for people who want to do their best work.</p>
        </div>
      </div>
    </footer>
  )
}
