import Icon from './Icon'

const FAQS = [
  {
    q: 'What services does Fintegra Tax Consultancy provide?',
    a: 'We assist with tax-related services such as income tax filing, GST registration and filing, tax planning, accounting, bookkeeping, and business compliance, depending on your requirements.',
  },
  {
    q: 'Can you help individuals as well as businesses?',
    a: 'Yes. We cater to individuals, salaried professionals, freelancers, entrepreneurs, and businesses looking for tax and financial compliance assistance.',
  },
  {
    q: 'What documents are required for income tax filing?',
    a: 'Documents may include PAN, Aadhaar, Form 16, bank statements, investment proofs, and other income-related documents, depending on your financial situation.',
  },
  {
    q: 'Can you help me with GST registration and returns?',
    a: 'Yes. We provide assistance with applicable GST registration and return filing requirements, helping businesses understand their compliance responsibilities.',
  },
  {
    q: 'How much do your consultancy services cost?',
    a: 'Fees depend on the type and complexity of the service required. Contact us to discuss your requirements and receive a clear understanding of the applicable charges.',
  },
  {
    q: 'Can I get professional advice before choosing a service?',
    a: 'Absolutely. You can reach out to discuss your requirements and understand which services may be suitable for your situation.',
  },
  {
    q: 'Why should I choose Fintegra Tax Consultancy?',
    a: 'We focus on making tax-related processes easier to understand through personalized attention, transparent communication, and professional guidance.',
  },
  {
    q: 'How can I get started?',
    a: "Simply fill out the enquiry form or contact our team. We'll connect with you to understand your requirements and explain the next steps.",
  },
]

export default function Faq() {
  return (
    <section className="relative w-full py-space-3xl bg-surface scroll-mt-20" id="faq">
      <div className="max-w-[56rem] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-space-2xl">
          <div className="px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label text-label-md uppercase tracking-widest mb-space-sm">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-headline text-headline-lg font-normal text-on-surface mb-space-xs">
            Got Questions About Taxes? We&apos;ve Got Answers.
          </h2>
        </div>

        <div className="space-y-space-sm">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-surface-container p-5 transition-colors open:bg-surface-container-high"
            >
              <summary className="flex cursor-pointer items-center justify-between font-label text-label-lg font-semibold text-on-surface list-none gap-4">
                <span>{item.q}</span>
                <Icon
                  name="expand_more"
                  className="text-primary transition-transform group-open:rotate-180 shrink-0"
                />
              </summary>
              <div className="pt-4 font-body text-body-sm text-on-surface-variant leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
