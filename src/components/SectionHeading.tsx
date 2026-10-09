interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className="mt-4 text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-ink-500 sm:text-lg">{description}</p>}
    </div>
  )
}
