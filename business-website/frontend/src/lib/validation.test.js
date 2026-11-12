import { describe, expect, it } from 'vitest'
import { validateEnquiry } from './validation'

describe('validateEnquiry', () => {
  it('accepts a valid enquiry payload', () => {
    const result = validateEnquiry({
      fullName: 'Rajesh Sharma',
      email: 'rajesh@company.com',
      mobileNumber: '+91 98765 43210',
    })
    expect(result.valid).toBe(true)
    expect(result.errors).toEqual({})
  })

  it('rejects empty and invalid fields', () => {
    const result = validateEnquiry({
      fullName: '',
      email: 'bad',
      mobileNumber: '123',
    })
    expect(result.valid).toBe(false)
    expect(result.errors.fullName).toBeTruthy()
    expect(result.errors.email).toBeTruthy()
    expect(result.errors.mobileNumber).toBeTruthy()
  })
})
