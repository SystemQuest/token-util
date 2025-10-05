import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SystemQuest Token Tool',
  description: 'Get your JWT token for testing and development',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
