import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vgyan.io',
  description: 'Welcome to Vgyan.io, where cutting-edge technology meets comprehensive exam preparation. Dive into a reservoir ofup-to-date current affairs, editorial breakdowns, and in-depth notes, all curated and presented by our advanced AI. Gear up for UPSC and other competitive exams with a unique edge that keeps you a step ahead.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
