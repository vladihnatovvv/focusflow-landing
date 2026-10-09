import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Testimonials"
          title="Loved by people who get things done"
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <li
              key={t.name}
              className={`flex flex-col rounded-3xl border border-ink/5 bg-white p-7 shadow-soft ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <figure className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-amber-500" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-flow-100" aria-hidden="true" />
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flow-50 font-display text-sm font-bold text-flow-700">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-ink-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
