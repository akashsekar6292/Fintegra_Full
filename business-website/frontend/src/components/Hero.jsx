import Icon from './Icon'

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pb-space-3xl pt-space-xl scroll-mt-20">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[480px] w-[480px] rounded-full bg-secondary/5 blur-[160px]" />

      <div className="max-w-[80rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col items-start animate-fade-up">
            <div className="inline-flex items-center gap-2.5 px-space-md py-1.5 rounded-full bg-surface-container-high text-primary shadow-sm mb-space-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
              </span>
              <span className="font-label text-label-md tracking-wider uppercase text-on-surface">
                CERTIFIED TAX ADVISORS &amp; COMPLIANCE SPECIALISTS • Trusted by 1,200+ Clients
              </span>
            </div>

            <h1 className="font-display text-display font-normal tracking-tight text-on-surface leading-[1.08] mb-space-md">
              Tax Matters Made Simple. <br />
              <span className="italic font-display text-primary">Financial Confidence</span> Made
              Stronger.
            </h1>

            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mb-space-sm">
              Your finances deserve more than guesswork. At Fintegra Tax Consultancy, we help
              individuals, professionals, and businesses navigate tax complexities with expert
              guidance, accurate solutions, and hassle-free support.
            </p>

            <p className="font-body text-body-md text-on-surface-variant/80 max-w-xl mb-space-xl">
              From tax filing to financial compliance, get the clarity, confidence, and professional
              assistance you need — all in one place.
            </p>

            <div className="flex flex-wrap items-center gap-space-md mb-space-xl">
              <a
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-on-primary font-label text-label-lg shadow-lg shadow-primary/20 hover:bg-primary-container hover:text-on-primary-container transition-all group"
                href="#lead-form"
              >
                <span>Get a Free Consultation</span>
                <Icon
                  name="arrow_forward"
                  className="text-[18px] group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-surface-container-high/60 backdrop-blur-md text-on-surface font-label text-label-lg hover:bg-surface-container-highest transition-all"
                href="#services"
              >
                Explore Our Services
              </a>
            </div>

            <div className="flex items-center gap-space-sm text-on-surface-variant">
              <Icon name="verified_user" className="text-secondary text-[20px]" />
              <span className="font-caption text-caption uppercase tracking-wider text-secondary">
                Simplifying Tax. Strengthening Your Financial Future.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-space-xl lg:mt-0 animate-fade-up" style={{ animationDelay: '120ms' }}>
            <div className="relative w-full rounded-2xl bg-surface-container p-6 shadow-2xl backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between pb-space-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <Icon name="account_balance" className="text-[22px]" />
                  </div>
                  <div>
                    <div className="font-label text-headline-sm text-on-surface leading-tight">
                      Tax Health Matrix
                    </div>
                    <div className="font-caption text-caption text-on-surface-variant">
                      FY 2025–2026 Audit Ready
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary/15 text-tertiary font-label text-label-md">
                  <Icon name="check_circle" className="text-[14px]" /> 100% Accurate
                </span>
              </div>

              <div className="relative z-10 my-4 rounded-xl bg-surface-container-low p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-label text-label-md text-on-surface-variant uppercase tracking-wider">
                    Avg. Annual Tax Saved
                  </span>
                  <span className="font-label text-label-md text-tertiary font-semibold">
                    +34.8% Opt.
                  </span>
                </div>
                <div className="font-display text-display font-medium text-on-surface leading-none mb-1">
                  ₹4,82,500
                  <span className="text-secondary text-headline-sm font-body font-normal">
                    {' '}
                    / client
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mt-3">
                  <div
                    className="bg-gradient-to-r from-primary to-tertiary h-full rounded-full transition-all duration-1000"
                    style={{ width: '88%' }}
                  />
                </div>
                <div className="flex justify-between font-caption text-caption text-on-surface-variant mt-2">
                  <span>Standard Deductions</span>
                  <span>Strategic Wealth Advisory</span>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-surface-container-high flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-primary">
                    <Icon name="schedule" className="text-[18px]" />
                    <span className="font-label text-label-md font-semibold">On-Time Filing</span>
                  </div>
                  <div className="font-label text-headline-sm text-on-surface mt-1">99.98%</div>
                  <div className="font-caption text-caption text-on-surface-variant">
                    0 Deadlines Missed
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-high flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-secondary">
                    <Icon name="verified" className="text-[18px]" />
                    <span className="font-label text-label-md font-semibold">Audit Defense</span>
                  </div>
                  <div className="font-label text-headline-sm text-on-surface mt-1">0 Notice</div>
                  <div className="font-caption text-caption text-on-surface-variant">
                    Guaranteed Compliance
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-5 pt-3">
                <div className="flex justify-between items-center mb-1 font-caption text-caption text-on-surface-variant">
                  <span>Monthly Compliance Tracking</span>
                  <span className="text-primary font-medium">Real-Time Sync</span>
                </div>
                <svg className="w-full h-12 text-primary" fill="none" viewBox="0 0 320 60">
                  <path
                    d="M0 45 Q 40 30, 80 38 T 160 22 T 240 18 T 320 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0 45 Q 40 30, 80 38 T 160 22 T 240 18 T 320 8 L 320 60 L 0 60 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                  <circle cx="320" cy="8" fill="currentColor" r="4" />
                </svg>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-6 z-20 rounded-xl bg-surface-bright px-4 py-2.5 shadow-xl flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <div className="font-caption text-caption text-on-surface font-semibold tracking-wide">
                SEC &amp; CBDT Certified Advisory
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
