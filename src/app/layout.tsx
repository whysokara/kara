import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { PostHogProvider } from '@/components/PostHogProvider'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: "kara",
  description: "Building fun things on the internet",
  metadataBase: new URL('https://kara-kappa.vercel.app'),
  icons: {
    icon: '/favicon.ico?v=1',
    apple: '/apple-touch-icon.png?v=1',
    shortcut: '/favicon-16x16.png?v=1',
  },
  manifest: '/site.webmanifest',
  themeColor: '#000000',
  openGraph: {
    type: 'website',
    url: 'https://kara-kappa.vercel.app',
    title: "kara",
    description: "Building fun things on the internet",
    siteName: 'kara',
    images: ["https://kara-kappa.vercel.app/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "kara",
    description: "Building fun things on the internet",
    images: ["https://kara-kappa.vercel.app/og-image.png"],
    creator: '@whysokara',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="text-gray-900">
        <PostHogProvider>
          <Header />
          <main>
            {children}
          </main>
        </PostHogProvider>
      </body>
    </html>
  )
}
