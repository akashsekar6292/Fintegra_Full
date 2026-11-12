import Icon from './Icon'

const SERVICES = [
  {
    icon: 'receipt_long',
    badge: 'Salaried & Freelancers',
    title: 'Income Tax Filing',
    body: 'Make tax filing simpler with professional assistance, accurate documentation, and guidance throughout the process.',
    tone: 'primary',
  },
  {
    icon: 'domain_verification',
    badge: 'Monthly & Quarterly',
    title: 'GST Registration & Filing',
    body: 'Get assistance with GST registration, returns, and compliance requirements so you can focus on running your business.',
    tone: 'primary',
  },
  {
    icon: 'trending_up',
    badge: 'Maximize Savings',
    title: 'Tax Planning & Consultation',
    body: 'Make informed financial decisions with guidance on tax planning and applicable tax-saving opportunities.',
    tone: 'secondary',
  },
  {
    icon: 'corporate_fare',
    badge: 'Corporate & SME',
    title: 'Business Tax & Compliance',
    body: 'Stay on top of your business tax responsibilities with dependable support and compliance assistance.',
    tone: 'primary',
  },
  {
    icon: 'account_balance_wallet',
    badge: 'Ledger & P&L',
    title: 'Accounting & Bookkeeping',
    body: 'Keep your financial records organized with professional accounting and bookkeeping assistance.',
    tone: 'primary',
  },
  {
    icon: 'insights',
    badge: 'Custom Strategy',
    title: 'Financial & Tax Advisory',
    body: 'Get clarity on tax-related questions and practical guidance tailored to your financial requirements.',
    tone: 'tertiary',
  },
]

const toneMap = {
  primary: {
    iconHover: 'group-hover:bg-primary group-hover:text-on-primary',
    badge: 'text-primary',
    link: 'group-hover:text-primary',
    iconBase: 'text-primary',
  },
  secondary: {
    iconHover: 'group-hover:bg-secondary group-hover:text-on-secondary',
    badge: 'text-secondary',
    link: 'group-hover:text-secondary',
    iconBase: 'text-secondary',
  },
  tertiary: {
    iconHover: 'group-hover:bg-tertiary group-hover:text-on-tertiary',
    badge: 'text-tertiary',
    link: 'group-hover:text-tertiary',
    iconBase: 'text-tertiary',
  },
}

export default function Services() {
  return (
    <section className="relative w-full py-space-3xl bg-surface scroll-mt-20" id="services">
      <div className="max-w-[80rem] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-space-2xl">
          <div className="px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label text-label-md uppercase tracking-widest mb-space-sm">
            COMPREHENSIVE TAX SOLUTIONS
          </div>
          <h2 className="font-headline text-headline-lg font-normal text-on-surface max-w-2xl mb-space-sm">
            Everything You Need to Stay Tax-Ready.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-xl">
            Whether you&apos;re an individual taxpayer, a growing entrepreneur, or an established
            business, Fintegra helps you manage your tax responsibilities with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-space-2xl">
          {SERVICES.map((service) => {
            const tones = toneMap[service.tone]
            return (
              <div
                key={service.title}
                className="rounded-2xl bg-surface-container p-space-xl flex flex-col justify-between transition-all hover:bg-surface-container-high hover:-translate-y-1.5 shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-lg">
                    <div
                      className={`w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center ${tones.iconBase} ${tones.iconHover} transition-colors`}
                    >
                      <Icon name={service.icon} className="text-[26px]" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full bg-surface-container-lowest ${tones.badge} font-label text-label-md`}
                    >
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="font-label text-headline-sm text-on-surface font-semibold mb-space-xs">
                    {service.title}
                  </h3>
                  <p className="font-body text-body-sm text-on-surface-variant">{service.body}</p>
                </div>
                <a
                  href="#lead-form"
                  className={`pt-space-lg mt-space-md flex items-center justify-between text-on-surface-variant ${tones.link} transition-colors`}
                >
                  <span className="font-label text-label-lg">Learn more</span>
                  <Icon
                    name="arrow_forward"
                    className="text-[20px] group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-space-sm px-8 py-4 rounded-full bg-surface-container-high text-primary font-label text-label-lg hover:bg-primary hover:text-on-primary transition-all shadow-md"
            href="#lead-form"
          >
            <span>Find the Right Tax Solution for Me</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
