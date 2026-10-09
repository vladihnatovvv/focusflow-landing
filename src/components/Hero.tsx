import { ArrowRight, Flame, Star, TrendingUp } from 'lucide-react'
import { stats } from '../data/content'
import { PhoneMockup } from './PhoneMockup'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-flow-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-[360px] w-[360px] rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="container relative grid items-center gap-14 pb-20 pt-10 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-28 lg:pt-16">
        <div className="text-center lg:text-left">
          <span className="eyebrow">
            <Star className="h-3.5 w-3.5" fill="currentColor" />
            New: adaptive focus timer
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-balance text-[2.6rem] font-bold leading-[1.05] text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            Do your best work,{' '}
            <span className="relative whitespace-nowrap text-flow-600">
              one flow
              <svg
                aria-hidden="true"
                viewBox="0 0 220 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-amber-400"
              >
                <path d="M2 9C50 3 120 1 218 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{' '}
            at a time.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-ink-500 sm:text-lg lg:mx-0">
            FocusFlow turns scattered days into calm, deep work. Smart focus sessions, distraction
            blocking and gentle insights help you finish what matters — without burning out.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#pricing" className="btn-accent w-full px-7 py-3.5 text-base sm:w-auto">
              Start focusing free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how-it-works" className="btn-ghost w-full px-7 py-3.5 text-base sm:w-auto">
              See how it works
            </a>
          </div>
          <p className="mt-3 text-xs text-ink-500">Free forever plan · No credit card required</p>

          <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-ink/10 pt-8 lg:mx-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs text-ink-500 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* App illustration */}
        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-10 bottom-4 rounded-[3rem] bg-gradient-to-br from-flow-100 via-paper-dark to-amber-400/30"
          />
          <div className="relative py-6">
            <PhoneMockup />
          </div>

          <div
            aria-hidden="true"
            className="absolute -left-2 top-16 hidden animate-float items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-soft sm:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-amber-500">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-ink-500">Focus streak</p>
              <p className="text-sm font-semibold text-ink">12 days</p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -right-2 bottom-16 hidden animate-float-delayed items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-soft sm:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-flow-50 text-flow-600">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-ink-500">This week</p>
              <p className="text-sm font-semibold text-ink">14h deep work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
