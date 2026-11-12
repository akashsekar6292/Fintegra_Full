import Icon from './Icon'

const VALUES = [
  {
    icon: 'navigation',
    title: 'Reliable Guidance',
    body: 'Reliable guidance for individual and business tax requirements.',
    tag: 'Comprehensive Coverage',
  },
  {
    icon: 'description',
    title: 'Simplified Filing',
    body: 'Simplified tax filing and documentation assistance without administrative stress.',
    tag: 'Frictionless Processing',
  },
  {
    icon: 'shield',
    title: 'Professional Support',
    body: 'Professional support for tax planning and compliance mapped to active regulations.',
    tag: 'Continuous Vigilance',
  },
  {
    icon: 'tune',
    title: 'Tailored Architecture',
    body: 'Solutions designed around your distinct financial requirements and objectives.',
    tag: 'Customized Structures',
  },
]

const STATS = [
  { value: '99.8%', label: 'Accuracy Rate', tone: 'text-primary' },
  { value: '15+', label: 'Years Experience', tone: 'text-on-surface' },
  { value: '₹12Cr+', label: 'Tax Saved Legally', tone: 'text-secondary' },
  { value: 'Zero', label: 'Notice Guarantee', tone: 'text-tertiary' },
]

export default function WhyUs() {
  return (
    <section className="relative w-full py-space-3xl bg-surface-container-lowest scroll-mt-20" id="why-us">
      <div className="max-w-[80rem] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-space-2xl">
          <div className="px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label text-label-md uppercase tracking-widest mb-space-sm">
            WHY CHOOSE FINTEGRA
          </div>
          <h2 className="font-headline text-headline-lg font-normal text-on-surface max-w-2xl mb-space-sm">
            Your Financial Peace of Mind Is Our Priority.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-xl">
            Behind every successful financial decision is the right guidance. We make tax and
            compliance processes easier, clearer, and more manageable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-space-2xl">
          {VALUES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-surface-container p-space-lg transition-transform hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                  <Icon name={item.icon} className="text-[26px]" />
                </div>
                <h3 className="font-label text-headline-sm text-on-surface mb-space-xs font-semibold">
                  {item.title}
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant">{item.body}</p>
              </div>
              <div className="mt-space-md pt-space-xs flex items-center gap-2 text-primary font-caption text-caption font-medium">
                <Icon name="check_circle" className="text-[16px]" />
                <span>{item.tag}</span>
              </div>
            </div>
          ))}

          <div className="lg:col-span-2 rounded-2xl bg-surface-container p-space-lg transition-transform hover:-translate-y-1 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            <div className="space-y-space-xs">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary mb-space-xs">
                <Icon name="visibility" className="text-[26px]" />
              </div>
              <h3 className="font-label text-headline-sm text-on-surface font-semibold">
                Client-First Transparency
              </h3>
              <p className="font-body text-body-sm text-on-surface-variant max-w-lg">
                A client-first approach focused on accuracy, ethical transparency, and zero hidden
                overheads.
              </p>
            </div>
            <div className="px-space-lg py-space-md rounded-xl bg-surface-container-high flex items-center gap-space-sm whitespace-nowrap self-stretch md:self-auto justify-center">
              <Icon name="verified" className="text-secondary text-[24px]" />
              <div className="text-left">
                <div className="font-label text-label-lg font-semibold text-on-surface">
                  100% Fiduciary
                </div>
                <div className="font-caption text-caption text-on-surface-variant">
                  Audit-Safe Practice
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-surface-container p-space-xl grid grid-cols-2 md:grid-cols-4 gap-gutter text-center shadow-lg">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className={`font-display text-headline-lg font-medium ${stat.tone}`}>
                {stat.value}
              </span>
              <span className="font-label text-label-md uppercase tracking-wider text-on-surface-variant mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-space-xl">
          <p className="font-display text-headline-md italic font-normal text-on-surface">
            “Less Tax Confusion. More Financial Confidence.”
          </p>
        </div>
      </div>
    </section>
  )
}
