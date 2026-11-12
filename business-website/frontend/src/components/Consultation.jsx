import Icon from './Icon'

const BENEFITS = [
  'An initial discussion about your tax requirements.',
  'Clarity on the services relevant to your situation.',
  'Guidance on the documents and information you may need.',
  'An understanding of the next steps and process.',
  'An opportunity to discuss applicable professional fees.',
]

export default function Consultation() {
  return (
    <section
      className="relative w-full py-space-3xl bg-surface scroll-mt-20"
      id="free-consultation"
    >
      <div className="max-w-[80rem] mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-surface-container p-8 lg:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mb-space-2xl">
            <h2 className="font-headline text-headline-lg font-normal text-on-surface mb-space-sm leading-tight">
              Don&apos;t Let Tax Confusion Cost You Time. Get Expert Guidance Today.
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant">
              Have questions about tax filing, GST, compliance, or financial planning? Start with a
              conversation. Let&apos;s understand your requirements and help you identify the right
              way forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 space-y-space-md">
              <h3 className="font-label text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                <Icon name="task_alt" className="text-primary" />
                <span>What You&apos;ll Get:</span>
              </h3>
              <ul className="space-y-space-sm">
                {BENEFITS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-space-sm p-3.5 rounded-xl bg-surface-container-high"
                  >
                    <Icon name="check_circle" className="text-primary text-[20px] mt-0.5" />
                    <span className="font-body text-body-md text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-surface-container-low p-8 rounded-2xl">
              <div className="space-y-space-md mb-space-lg">
                <span className="font-label text-label-md uppercase tracking-wider text-secondary font-semibold">
                  Strategic Value
                </span>
                <h3 className="font-label text-headline-sm text-on-surface font-semibold">
                  Why Book a Consultation?
                </h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  Because making the right financial decisions starts with understanding your
                  options. A little professional guidance today can save you unnecessary confusion
                  tomorrow.
                </p>
              </div>
              <div className="space-y-space-md">
                <p className="font-body text-body-sm text-primary font-medium">
                  Take the first step towards better tax management. We&apos;re here to help.
                </p>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary text-on-primary font-label text-label-lg shadow-lg shadow-primary/20 hover:bg-primary-container hover:text-on-primary-container transition-all"
                  href="#lead-form"
                >
                  <span>Book My Consultation Today</span>
                  <Icon name="calendar_today" className="text-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
