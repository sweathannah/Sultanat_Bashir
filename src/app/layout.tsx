import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Shared/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Sultanat',
    default: 'Sultanat | Frontend Developer',
  },
  description: 'Personal portfolio featuring interactive web platforms, creative developments, and visual memories.',
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain when deploying
  openGraph: {
    title: 'Sultanat | Frontend Developer & Designer',
    description: 'Personal portfolio featuring interactive web platforms and creative developments.',
    url: 'https://yourdomain.com',
    siteName: 'Sultanat Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Place your preview banner in public/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Sultanat Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sultanat | Frontend Developer & Designer',
    description: 'Personal portfolio featuring interactive web platforms and creative developments.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-purple-500 selection:text-white`}>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}