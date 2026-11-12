import Icon from './Icon'

const REVIEWS = [
  {
    quote:
      'Fintegra made our annual corporate tax filing completely seamless. What used to take weeks of stress was resolved within days with pinpoint accuracy.',
    initials: 'VM',
    name: 'Vikram Malhotra',
    role: 'Founder & CEO, Apex Logistics',
    avatar: 'bg-primary-container text-on-primary-container',
  },
  {
    quote:
      'The prompt guidance and timely support during our GST transition gave us immense confidence. They explained every document with zero jargon.',
    initials: 'PS',
    name: 'Priya Sundaram',
    role: 'Independent Tech Consultant',
    avatar: 'bg-secondary-container text-on-secondary',
  },
  {
    quote:
      'Their compliance team handled our multi-state GST filings and audits without a hitch. Invaluable partner for any growing business.',
    initials: 'AR',
    name: 'Amitav Roy',
    role: 'Director, Roy Infotech',
    avatar: 'bg-surface-bright text-on-surface',
  },
  {
    quote:
      'Total transparency on fees, clear deadlines, and quick answers to every tax question. The best financial decision we made this year.',
    initials: 'NK',
    name: 'Neha Kulkarni',
    role: 'Senior Product Architect',
    avatar: 'bg-tertiary-container text-on-tertiary-container',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-1 text-secondary mb-space-md" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="text-[20px]" filled />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="relative w-full py-space-3xl bg-surface-container-lowest scroll-mt-20" id="reviews">
      <div className="max-w-[80rem] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-space-2xl">
          <div className="px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label text-label-md uppercase tracking-widest mb-space-sm">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="font-headline text-headline-lg font-normal text-on-surface max-w-2xl mb-space-sm">
            Trusted Guidance. Better Client Experiences.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-xl">
            Every client deserves clarity, transparency, and dependable support. Here&apos;s where
            you can showcase the experiences of people who have worked with Fintegra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-space-2xl">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl bg-surface-container p-space-xl flex flex-col justify-between transition-transform hover:-translate-y-1 shadow-sm"
            >
              <div>
                <Stars />
                <p className="font-body text-body-md text-on-surface-variant italic mb-space-lg">
                  “{review.quote}”
                </p>
              </div>
              <div className="flex items-center gap-space-md pt-space-xs">
                <div
                  className={`w-12 h-12 rounded-full ${review.avatar} font-label text-headline-sm flex items-center justify-center font-bold`}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-label text-label-lg font-semibold text-on-surface">
                    {review.name}
                  </div>
                  <div className="font-caption text-caption text-on-surface-variant">
                    {review.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <p className="font-display text-headline-sm italic text-secondary">
            “Your Trust Is Our Greatest Achievement.”
          </p>
        </div>
      </div>
    </section>
  )
}
