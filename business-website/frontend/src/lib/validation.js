const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MOBILE_RE = /^[+]?[0-9][0-9\s-]{8,18}[0-9]$/

export function validateEnquiry({ fullName, email, mobileNumber }) {
  const errors = {}

  const name = (fullName || '').trim()
  if (!name) {
    errors.fullName = 'Full name is required'
  } else if (name.length < 2 || name.length > 100) {
    errors.fullName = 'Full name must be between 2 and 100 characters'
  }

  const mail = (email || '').trim()
  if (!mail) {
    errors.email = 'Email is required'
  } else if (!EMAIL_RE.test(mail) || mail.length > 255) {
    errors.email = 'Email must be a valid address'
  }

  const mobile = (mobileNumber || '').trim()
  if (!mobile) {
    errors.mobileNumber = 'Mobile number is required'
  } else if (!MOBILE_RE.test(mobile) || mobile.length < 10 || mobile.length > 20) {
    errors.mobileNumber =
      'Mobile number must be 10–15 digits and may include +, spaces, or dashes'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
