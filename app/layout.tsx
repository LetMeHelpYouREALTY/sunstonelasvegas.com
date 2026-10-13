import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'

import { JsonLd } from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import {
  localBusinessJsonLd,
  realEstateAgentJsonLd,
} from '@/lib/structured-data'
import { SITE_LOGO, SITE_URL } from '@/lib/site'

import './globals.css'

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Capella at Sunstone Homes for Sale',
    template: '%s',
  },
  description:
    'Dr. Jan Duffy represents buyers and sellers at Capella at Sunstone in Las Vegas 89143. Builder prices retrieved October 12, 2026 start at $599,950.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Capella at Sunstone Homes for Sale',
    description:
      'Homes for sale in Capella at Sunstone, Las Vegas 89143, with Dr. Jan Duffy.',
    url: SITE_URL,
    siteName: SITE_LOGO,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capella at Sunstone Homes for Sale',
    description:
      'Homes for sale in Capella at Sunstone, Las Vegas 89143, with Dr. Jan Duffy.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1HCM0VVVP8"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1HCM0VVVP8');
          `}
        </Script>
        <JsonLd id="realestateagent-schema" data={realEstateAgentJsonLd} />
        <JsonLd id="localbusiness-schema" data={localBusinessJsonLd} />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
