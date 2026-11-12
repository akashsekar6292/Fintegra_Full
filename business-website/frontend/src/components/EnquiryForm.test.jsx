import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EnquiryForm from './EnquiryForm'

vi.mock('../lib/api', () => ({
  submitEnquiry: vi.fn(),
}))

import { submitEnquiry } from '../lib/api'

describe('EnquiryForm', () => {
  beforeEach(() => {
    submitEnquiry.mockReset()
  })

  it('shows client validation errors and does not submit', async () => {
    const user = userEvent.setup()
    render(<EnquiryForm />)

    await user.click(screen.getByRole('button', { name: /get my free consultation/i }))

    expect(await screen.findByText(/full name is required/i)).toBeInTheDocument()
    expect(submitEnquiry).not.toHaveBeenCalled()
  })

  it('submits, shows success, and clears fields only after confirmed save', async () => {
    submitEnquiry.mockResolvedValue({
      success: true,
      message: 'Thank you! An advisory specialist has received your request and will contact you within 2 hours.',
    })

    const user = userEvent.setup()
    render(<EnquiryForm />)

    await user.type(screen.getByLabelText(/full name/i), 'Rajesh Sharma')
    await user.type(screen.getByLabelText(/email address/i), 'rajesh@company.com')
    await user.type(screen.getByLabelText(/mobile number/i), '9876543210')
    await user.click(screen.getByRole('button', { name: /get my free consultation/i }))

    await waitFor(() => {
      expect(submitEnquiry).toHaveBeenCalledWith({
        fullName: 'Rajesh Sharma',
        email: 'rajesh@company.com',
        mobileNumber: '9876543210',
      })
    })

    expect(
      await screen.findByText(/advisory specialist has received your request/i),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toHaveValue('')
    expect(screen.getByLabelText(/email address/i)).toHaveValue('')
    expect(screen.getByLabelText(/mobile number/i)).toHaveValue('')
  })

  it('keeps field values when the API returns an error', async () => {
    submitEnquiry.mockRejectedValue(new Error('Unable to save your enquiry right now.'))

    const user = userEvent.setup()
    render(<EnquiryForm />)

    await user.type(screen.getByLabelText(/full name/i), 'Neha Kulkarni')
    await user.type(screen.getByLabelText(/email address/i), 'neha@example.com')
    await user.type(screen.getByLabelText(/mobile number/i), '9876543210')
    await user.click(screen.getByRole('button', { name: /get my free consultation/i }))

    expect(await screen.findByText(/unable to save your enquiry/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toHaveValue('Neha Kulkarni')
  })
})
