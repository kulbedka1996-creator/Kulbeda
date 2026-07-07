import type { Metadata } from 'next'
import './globals.css'
import { TechCursor } from './TechCursor'

export const metadata: Metadata = {
  title: 'KULBEDA | Web & Presentation Designer',
  description:
    'Портфолио Анастасии Кульбеды: дизайн сайтов, лендинги, презентации, редизайн и AI-визуалы.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <TechCursor />
        {children}
      </body>
    </html>
  )
}
