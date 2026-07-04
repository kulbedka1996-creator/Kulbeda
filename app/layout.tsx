import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cool Beta Designer | Anastasia Kulbeda',
  description:
    'UX/UI designer for poetic websites, landing pages, Tilda builds, redesigns, and AI visuals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
