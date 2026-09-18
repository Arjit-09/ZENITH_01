import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800']
});

export const viewport: Viewport = {
  themeColor: '#0A1A2F',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: 'Zenith — Engineering Intelligent Digital Solutions',
  description: 'Zenith delivers enterprise-grade AI/ML, chatbot integration, full-stack, e-commerce, blockchain, and IoT solutions. Transform your business with cutting-edge technology.',
  keywords: [
    'AI ML projects',
    'chatbot integration',
    'full stack website',
    'ecommerce',
    'blockchain',
    'IoT',
    'Zenith',
    'web development'
  ],
  openGraph: {
    title: 'Zenith — Engineering Intelligent Digital Solutions',
    description: 'Transform your business with AI/ML, chatbot, full-stack, e-commerce, blockchain and IoT solutions.',
    type: 'website',
    url: 'https://zenith-portfolio.vercel.app'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
