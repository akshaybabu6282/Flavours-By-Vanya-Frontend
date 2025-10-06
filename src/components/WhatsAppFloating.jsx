import React from 'react'

export default function WhatsAppFloating({ productName }) {
  const phone = '917907662508' // your number with country code
  const text = productName
    ? `Hi, I would like to order ${productName}`
    : 'Hi, I would like to place an order'
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-center gap-2">
      {/* Blinking text */}
      <span className="text-green-500 font-semibold animate-pulse text-sm">
        Chat & Buy Now!
      </span>

      {/* WhatsApp button */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 shadow-lg hover:scale-105 transition-transform"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.52 3.48C18.2 1.16 15.05 0 11.72 0 5.26 0 .01 5.25.01 11.72c0 2.07.55 4.1 1.6 5.88L0 24l6.5-1.54a11.73 11.73 0 0 0 5.22 1.3h.01c6.46 0 11.71-5.25 11.71-11.72 0-3.33-1.16-6.48-3.42-8.78zM11.72 21.1c-1.63 0-3.23-.44-4.62-1.27l-.33-.2-3.85.91.82-3.75-.22-.35a9.38 9.38 0 0 1-1.43-4.91c0-5.15 4.19-9.34 9.34-9.34 2.49 0 4.82.97 6.56 2.73a9.17 9.17 0 0 1 2.7 6.57c0 5.14-4.19 9.33-9.32 9.33zm5.4-7.33c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.08-.79.37c-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.13.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.68.61.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.08-.13-.3-.2-.6-.35z"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  )
}
