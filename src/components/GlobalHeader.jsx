import React from 'react'
import { useLocation } from 'react-router-dom'

import Header from './Header'

const pagesWithOwnHeader = [
  '/data-protection',
  '/terms',
  '/shipping-and-refunds',
  '/product-disclaimer',
]

export default function GlobalHeader() {
  const { pathname } = useLocation()

  if (pagesWithOwnHeader.includes(pathname)) {
    return null
  }

  return <Header />
}