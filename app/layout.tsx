import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jordan's Tomato Store - Fresh, Locally Grown Tomatoes",
  description: 'Premium locally grown tomatoes delivered fresh to your door. Family-owned since 2020.',
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
