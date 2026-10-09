import { steps } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title="From scattered to focused in three steps"
          description="No complicated setup. Most people finish their first focus session within two minutes of installing."
        />

        <ol className="relative mt-14 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {/* Connector line on tablet/desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-7 hidden border-t-2 border-dashed border-flow-100 md:block"
          />
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink font-display text-xl font-bold text-white shadow-soft ring-8 ring-paper">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="md:mt-6">
                <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base md:mx-auto md:max-w-xs">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
