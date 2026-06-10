import type { Metadata, Viewport } from 'next'
import { Montserrat, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _montserrat = Montserrat({ 
  subsets: ["latin", "latin-ext"],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const _cinzel = Cinzel({ 
  subsets: ["latin", "latin-ext"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luminița Grigoraș | Avocat Drept Civil și Comercial',
  description: 'Cabinet de avocat specializat în drept civil, comercial și litigii. Luminița Grigoraș oferă consultanță juridică profesională și reprezentare în instanță.',
  generator: 'v0.app',
  keywords: ['avocat', 'drept civil', 'drept comercial', 'consultanță juridică', 'litigii', 'Luminița Grigoraș'],
  authors: [{ name: 'Luminița Grigoraș' }],
  openGraph: {
    title: 'Luminița Grigoraș | Avocat Drept Civil și Comercial',
    description: 'Cabinet de avocat specializat în drept civil, comercial și litigii. Consultanță juridică profesională.',
    type: 'website',
    locale: 'ro_RO',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
