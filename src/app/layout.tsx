import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './lib/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Burbujas quotes',
  description: 'developed by Nicolas Ostermann',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
