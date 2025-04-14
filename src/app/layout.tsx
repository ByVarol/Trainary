import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Trainary - Modern Fitness Çözümleri',
  description: 'Uzman programlar, beslenme tavsiyeleri ve antrenman takibi ile fitness yolculuğunuzu kişiselleştirin.',
  manifest: '/manifest.json',
  applicationName: 'Trainary',
  metadataBase: new URL('https://trainary.com'),
  appleWebApp: {
    capable: true,
    title: 'Trainary',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'Trainary - Modern Fitness Çözümleri',
    description: 'Uzman programlar, beslenme tavsiyeleri ve antrenman takibi ile fitness yolculuğunuzu kişiselleştirin.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop&q=80',
        width: 800,
        height: 600,
        alt: 'Trainary',
      },
    ],
    url: 'https://trainary.com/',
    siteName: 'Trainary',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    title: 'Trainary - Modern Fitness Çözümleri',
    description: 'Uzman programlar, beslenme tavsiyeleri ve antrenman takibi ile fitness yolculuğunuzu kişiselleştirin.',
    card: 'summary_large_image',
    images: [
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop&q=80',
    ],
  },
  // Content Security Policy
  other: {
    'content-security-policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://analytics.google.com; img-src 'self' https://images.unsplash.com https://randomuser.me data:; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self';"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Web Vitals performans ölçümü - güvenli yöntem */}
        <Script
          id="web-vitals"
          strategy="afterInteractive"
          src="/scripts/web-vitals.js"
        />
      </body>
    </html>
  )
} 