const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8088'

export async function submitEnquiry(payload) {
  const response = await fetch(`${API_BASE}/api/enquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  let data = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    const message =
      data?.message ||
      'Unable to save your enquiry right now. Please try again shortly.'
    const error = new Error(message)
    error.status = response.status
    error.data = data
    throw error
  }

  return data
}
