import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UCP Discovery Test',
  description: 'Minimal Next.js app for testing UCP discovery on Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6' }}>
        {children}
      </body>
    </html>
  );
}
