'use client'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DISABLE_REDIRECT !== 'true') {
      window.location.href = 'https://donationdelight.com/'
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {process.env.NODE_ENV === 'production' ? (
        <p>Redirecting to Donation Delight...</p>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">Development Environment</h1>
          <p className="text-gray-600">
            You are currently in development mode. <br />
            It will auto redirect to https://donationdelight.com/ in production mode.
          </p>
        </div>
      )}
    </div>
  )
}

export default Home
