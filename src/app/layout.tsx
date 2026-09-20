import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: 'ZENITH — ML/AI Engineering Collective',
  description: 'ZENITH is a collective of ML/AI Engineers specializing in GenAI, Computer Vision, Full-Stack Web, and IoT solutions.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, height: '100%', overflow: 'hidden', background: '#000000' }}>
      <body style={{ margin: 0, padding: 0, height: '100%', overflow: 'hidden', background: '#000000' }}>
        {children}
      </body>
    </html>
  );
}
