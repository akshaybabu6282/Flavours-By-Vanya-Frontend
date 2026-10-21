import React from 'react'

export default function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen items-center justify-center bg-black text-white"
    >
      <div className="flex flex-col items-center gap-4">
        <span
          aria-hidden="true"
          className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-green-500"
        />

        <p
          className="text-sm text-gray-400"
          style={{
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Loading Vanya...
        </p>
      </div>
    </div>
  )
}