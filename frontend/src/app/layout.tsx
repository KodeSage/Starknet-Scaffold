import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { StarknetProvider } from './components/StarknetProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Starknet Scaffold',
  description: 'Created with love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StarknetProvider>
          {children}
        </StarknetProvider>
      </body>
    </html>
  )
}