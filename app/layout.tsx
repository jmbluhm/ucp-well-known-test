import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://jordans-tomato-store.vercel.app'),
  title: "Jordan's Tomato Store - Fresh, Locally Grown Tomatoes",
  description: 'Premium locally grown tomatoes delivered fresh to your door. Family-owned since 2020.',
  keywords: 'tomatoes, organic tomatoes, local farm, fresh produce, heirloom tomatoes, beefsteak tomatoes, cherry tomatoes, roma tomatoes, farm delivery, organic vegetables',
  authors: [{ name: "Jordan's Tomato Store" }],
  creator: "Jordan's Tomato Store",
  publisher: "Jordan's Tomato Store",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jordans-tomato-store.vercel.app',
    siteName: "Jordan's Tomato Store",
    title: "Jordan's Tomato Store - Fresh, Locally Grown Tomatoes",
    description: 'Premium locally grown tomatoes delivered fresh to your door. Family-owned since 2020.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Jordan's Tomato Store - Fresh Organic Tomatoes",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jordan's Tomato Store - Fresh, Locally Grown Tomatoes",
    description: 'Premium locally grown tomatoes delivered fresh to your door. Family-owned since 2020.',
    images: ['/og-image.jpg'],
  },
  other: {
    'commerce-api': 'available',
    'subscription-service': 'enabled',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6' }}>
        {children}
      </body>
    </html>
  );
}
