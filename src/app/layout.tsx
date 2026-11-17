import type { Metadata } from 'next';
import { Poppins, Sora } from 'next/font/google';
import Navbar from '../components/Shared/Navbar';
import ThemeProvider from '../components/Shared/ThemeProvider';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Sultanat',
    default: 'Sultanat | Frontend Developer',
  },
  description: 'Building things that look good and Work',
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain when deploying
  openGraph: {
    title: 'Sultanat | Frontend Developer',
    description: 'Building things that look good and Work',
    url: 'https://yourdomain.com',
    siteName: 'Sultanat Bashir Portfolio',
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
    title: 'Sultanat | Frontend Developer',
    description: 'Building things that look good and Work',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className={`${poppins.className} text-zinc-900 dark:text-white antialiased selection:bg-[#9A91E9] selection:text-white transition-colors duration-300 bg-[#FAFAFA] dark:bg-[#0F0F0F]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="py-24 min-h-screen bg-[#FAFAFA] dark:bg-[#0F0F0F]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}