import { useState } from 'react'
import { Check } from 'lucide-react'
import { plans, type Plan } from '../data/content'
import { SectionHeading } from './SectionHeading'

type Billing = 'monthly' | 'yearly'

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const price = billing === 'monthly' ? plan.monthly : plan.yearly
  const featured = plan.highlighted

  return (
    <li
      className={`relative flex flex-col rounded-3xl p-7 lg:p-8 ${
        featured
          ? 'bg-ink text-white shadow-phone lg:-my-4 lg:py-12'
          : 'border border-ink/10 bg-white text-ink'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-ink">
          Most popular
        </span>
      )}

      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className={`mt-2 text-sm ${featured ? 'text-white/65' : 'text-ink-500'}`}>{plan.description}</p>

      <p className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-5xl font-bold">${price}</span>
        <span className={`text-sm ${featured ? 'text-white/65' : 'text-ink-500'}`}>
          {price === 0 ? 'forever' : plan.name === 'Team' ? '/ user / mo' : '/ month'}
        </span>
      </p>
      <p className={`mt-1 h-5 text-xs ${featured ? 'text-flow-400' : 'text-flow-600'}`}>
        {billing === 'yearly' && price > 0 ? `Billed $${price * 12} yearly` : ''}
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-flow-400' : 'text-flow-600'}`}
              aria-hidden="true"
            />
            <span className={featured ? 'text-white/85' : 'text-ink-700'}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`mt-8 w-full ${featured ? 'btn-accent' : 'btn-ghost'}`}
      >
        {plan.cta}
      </a>
    </li>
  )
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('yearly')

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title="Simple pricing that grows with you"
          description="Start free and upgrade when you're ready. Cancel anytime."
        />

        <div className="mt-10 flex justify-center">
          <div role="group" aria-label="Billing period" className="inline-flex rounded-full bg-paper p-1 ring-1 ring-ink/5">
            {(['monthly', 'yearly'] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={billing === option}
                onClick={() => setBilling(option)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                  billing === option ? 'bg-ink text-white shadow-soft' : 'text-ink-500 hover:text-ink'
                }`}
              >
                {option}
                {option === 'yearly' && (
                  <span
                    className={`ml-2 rounded-full px-2 py-0.5 text-[10px] ${
                      billing === option ? 'bg-flow-400 text-ink' : 'bg-flow-50 text-flow-700'
                    }`}
                  >
                    −30%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-md gap-6 lg:mt-16 lg:max-w-none lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} billing={billing} />
          ))}
        </ul>
      </div>
    </section>
  )
}
