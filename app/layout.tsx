import type { Metadata } from 'next'
import { Geist, Geist_Mono, Permanent_Marker, Archivo_Black, Chakra_Petch } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const fontMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
})

const fontBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-black',
})

const fontTech = Chakra_Petch({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-tech',
})

export const metadata: Metadata = {
  title: 'Studio 801 | Game Art Outsourcing Company',
  description: 'Premier game art outsourcing studio dedicated to crafting exceptional visual experiences. We partner with game developers worldwide to bring creative visions to life.',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" translate="no" suppressHydrationWarning>
      <body className={`font-sans antialiased ${fontMarker.variable} ${fontBlack.variable} ${fontTech.variable}`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
