import { useState } from 'react'
import Icon from './Icon'
import { submitEnquiry } from '../lib/api'
import { validateEnquiry } from '../lib/validation'

const INITIAL = { fullName: '', email: '', mobileNumber: '' }

export default function EnquiryForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [serverError, setServerError] = useState('')

  const onChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    setServerError('')
    setSuccessMessage('')
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return

    setSuccessMessage('')
    setServerError('')

    const result = validateEnquiry(values)
    if (!result.valid) {
      setErrors(result.errors)
      return
    }

    setSubmitting(true)
    try {
      const payload = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        mobileNumber: values.mobileNumber.trim(),
      }
      const data = await submitEnquiry(payload)
      if (!data?.success) {
        setServerError(data?.message || 'Unable to save your enquiry. Please try again.')
        return
      }
      setSuccessMessage(
        data.message ||
          'Thank you! An advisory specialist has received your request and will contact you within 2 hours.',
      )
      setValues(INITIAL)
      setErrors({})
    } catch (err) {
      setServerError(err.message || 'Unable to save your enquiry. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass = (field) =>
    `w-full h-12 px-4 rounded-lg bg-surface-container-high text-on-surface font-body text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-bright transition-colors ${
      errors[field] ? 'ring-2 ring-error' : ''
    }`

  return (
    <section
      className="relative w-full py-space-3xl bg-surface-container-lowest scroll-mt-20"
      id="lead-form"
    >
      <div className="max-w-[80rem] mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-surface-container p-8 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[100px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label text-label-md uppercase tracking-wider mb-space-md">
                  <Icon name="support_agent" className="text-[16px]" />
                  <span>Direct Advisory Desk</span>
                </div>
                <h2 className="font-headline text-headline-lg font-normal text-on-surface mb-space-sm leading-tight">
                  Let&apos;s Make Your Tax Journey Stress-Free.
                </h2>
                <p className="font-body text-body-md text-on-surface-variant mb-space-md">
                  Not sure where to start with your taxes? Tell us what you need, and our team will
                  help you understand the right next steps.
                </p>
                <p className="font-body text-body-sm text-on-surface-variant/80 italic mb-space-xl">
                  “Your enquiry matters to us. Expect professional guidance, clear communication,
                  and no unnecessary complications.”
                </p>
              </div>

              <div className="space-y-space-sm pt-space-md">
                {[
                  { icon: 'lock', label: '100% Confidentiality Guaranteed' },
                  { icon: 'bolt', label: 'Response within 2 hours' },
                  { icon: 'calendar_today', label: 'Free 30-min strategy call' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                      <Icon name={item.icon} className="text-[18px]" />
                    </div>
                    <span className="font-label text-label-lg text-on-surface">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-container-low rounded-2xl p-6 lg:p-8 shadow-xl">
              <form className="space-y-space-md" method="post" action="#" onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="font-label text-label-md text-on-surface-variant font-medium">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      className={fieldClass('fullName')}
                      placeholder="e.g., Rajesh Sharma"
                      value={values.fullName}
                      onChange={onChange('fullName')}
                      autoComplete="name"
                      disabled={submitting}
                    />
                    {errors.fullName && (
                      <p className="font-caption text-caption text-error" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-label text-label-md text-on-surface-variant font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={fieldClass('email')}
                      placeholder="e.g., rajesh@company.com"
                      value={values.email}
                      onChange={onChange('email')}
                      autoComplete="email"
                      disabled={submitting}
                    />
                    {errors.email && (
                      <p className="font-caption text-caption text-error" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mobileNumber" className="font-label text-label-md text-on-surface-variant font-medium">
                    Mobile Number
                  </label>
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    className={fieldClass('mobileNumber')}
                    placeholder="+91 98765 43210"
                    value={values.mobileNumber}
                    onChange={onChange('mobileNumber')}
                    autoComplete="tel"
                    disabled={submitting}
                  />
                  {errors.mobileNumber && (
                    <p className="font-caption text-caption text-error" role="alert">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>

                <button
                  className="w-full h-12 rounded-full bg-primary text-on-primary font-label text-label-lg shadow-lg shadow-primary/20 hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={submitting}
                >
                  <span>{submitting ? 'Submitting…' : 'Get My Free Consultation'}</span>
                  <Icon name="send" className="text-[18px]" />
                </button>

                {successMessage && (
                  <div
                    className="p-3 rounded-lg bg-tertiary/20 text-tertiary font-label text-label-md text-center"
                    role="status"
                  >
                    {successMessage}
                  </div>
                )}

                {serverError && (
                  <div
                    className="p-3 rounded-lg bg-error-container/40 text-error font-label text-label-md text-center"
                    role="alert"
                  >
                    {serverError}
                  </div>
                )}

                <div className="text-center font-caption text-caption text-on-surface-variant flex items-center justify-center gap-1.5">
                  <Icon name="lock" className="text-[16px] text-tertiary" />
                  <span>We respect your privacy. No spam, ever.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
