import { features } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          id="features-title"
          eyebrow="Features"
          title="Everything you need to stay in the zone"
          description="Thoughtful tools that remove friction and noise, so getting into deep focus feels effortless."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group rounded-3xl border border-ink/5 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft lg:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-flow-50 text-flow-600 transition-colors group-hover:bg-flow-500 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
