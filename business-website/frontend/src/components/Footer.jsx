import Icon from './Icon'
import { LOGO_SRC } from '../constants'

export default function Footer() {
  return (
    <>
      <section className="relative w-full py-space-3xl bg-surface-container-low">
        <div className="max-w-[80rem] mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-gradient-to-r from-surface-container to-surface-container-high p-8 lg:p-12 mb-space-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h3 className="font-label text-headline-sm font-semibold text-on-surface">
                Have a tax-related question?
              </h3>
              <p className="font-body text-body-md text-on-surface-variant">
                Let&apos;s make things simpler. Get in touch with Fintegra today.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-on-primary font-label text-label-lg shadow-lg hover:bg-primary-container hover:text-on-primary-container transition-all whitespace-nowrap"
              href="#lead-form"
            >
              <span>Talk to a Tax Consultant</span>
              <Icon name="phone_in_talk" className="text-[18px]" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter pb-space-2xl">
            <div className="lg:col-span-5 space-y-space-md">
              <div className="font-display text-headline-sm text-on-surface font-semibold">
                Fintegra Tax Consultancy
              </div>
              <div className="font-label text-label-lg text-primary font-medium">
                Simplifying Tax. Empowering Better Financial Decisions.
              </div>
              <p className="font-body text-body-sm text-on-surface-variant max-w-md">
                Fintegra Tax Consultancy helps individuals and businesses navigate tax filing,
                compliance, and financial requirements with clarity, confidence, and professional
                support.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-space-sm">
              <div className="font-label text-label-lg font-semibold text-on-surface mb-2">
                Quick Navigation
              </div>
              <ul className="space-y-space-xs font-body text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#why-us">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#faq">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#lead-form">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-space-sm">
              <div className="font-label text-label-lg font-semibold text-on-surface mb-2">
                Our Services
              </div>
              <ul className="space-y-space-xs font-body text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    Income Tax Filing
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    GST Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    Tax Planning
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    Accounting &amp; Bookkeeping
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    Business Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-space-lg text-center font-caption text-caption text-on-surface-variant/70">
            © 2026 Fintegra Tax Consultancy. All Rights Reserved.
          </div>
        </div>
      </section>

      <footer className="w-full bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-[80rem] mx-auto px-6 lg:px-12 pt-space-3xl pb-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter pb-space-2xl">
            <div className="lg:col-span-2 space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <img
                  alt="Fintegra Logo"
                  className="h-8 w-auto object-contain"
                  src={LOGO_SRC}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <span className="font-label text-headline-sm font-semibold tracking-tight text-on-surface">
                  Fintegra
                </span>
              </div>
              <p className="font-body text-body-sm text-on-surface-variant max-w-sm">
                Architectural tax advisory, cross-border structuring, and comprehensive fiduciary
                protection for enterprise leaders and high-net-worth family estates.
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <div className="px-space-md py-space-xs rounded-full bg-surface-container text-tertiary font-label text-label-md flex items-center gap-space-xs">
                  <Icon name="verified" className="text-[14px]" />
                  SEC &amp; IRS Compliant Practice
                </div>
              </div>
            </div>

            <div>
              <div className="font-label text-label-lg font-semibold text-on-surface mb-space-md">
                Advisory Services
              </div>
              <ul className="space-y-space-sm font-body text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    Corporate Tax Strategy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    Cross-Border Wealth
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    Estate &amp; Trust Structuring
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    M&amp;A Due Diligence
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#services">
                    Audit Representation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-label text-label-lg font-semibold text-on-surface mb-space-md">
                Firm Overview
              </div>
              <ul className="space-y-space-sm font-body text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#why-us">
                    Why Fintegra
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#reviews">
                    Client Testimonials
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#faq">
                    Advisory FAQ
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#free-consultation">
                    Schedule Briefing
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#home">
                    Executive Insights
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-label text-label-lg font-semibold text-on-surface mb-space-md">
                Direct Channels
              </div>
              <ul className="space-y-space-sm font-body text-body-sm text-on-surface-variant">
                <li className="flex items-start gap-space-xs">
                  <Icon name="call" className="text-primary text-[16px] mt-0.5" />
                  <span>+1 (800) 492-8172</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <Icon name="mail" className="text-primary text-[16px] mt-0.5" />
                  <span>advisory@fintegra.com</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <Icon name="location_on" className="text-primary text-[16px] mt-0.5" />
                  <span>One Financial Plaza, Suite 3400, New York, NY</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="font-caption text-caption text-on-surface-variant text-center md:text-left">
              Fintegra provides structured institutional tax guidance. Fiduciary engagements are
              executed pursuant to formal advisory retainer agreements. Past performance does not
              assure future tax mitigation outcomes.
            </div>
            <div className="font-caption text-caption text-on-surface-variant whitespace-nowrap">
              © 2025 Fintegra Tax Consultancy LLP. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
