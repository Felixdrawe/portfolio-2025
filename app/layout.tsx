import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BackgroundBlur } from '@/components/BackgroundBlur';
import Header from '@/components/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Felix Drawe | Portfolio',
  keywords: [
    'Portfolio',
    'Felix Drawe',
    'Web Developer',
    'Berlin',
    'Germany',
    'Web Development',
    'Frontend Developer',
  ],
  // authors: [{ name: 'Felix Drawe', url: 'https://felixdrawe.com' }],
  // creator: 'Felix Drawe',
  // openGraph: {
  //   title: 'Felix Drawe | Portfolio',
  //   description:
  //     'Portfolio of Felix Drawe, a web developer specializing in modern web technologies.',
  //   url: 'https://felixdrawe.com',
  //   siteName: 'Felix Drawe | Portfolio',
  //   images: [
  //     {
  //       url: 'https://felixdrawe.com/og-image.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Felix Drawe Portfolio',
  //     },
  //   ],
  // },

  description:
    'Felix Drawe is a web developer based in Berlin Germany specializing in modern web technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 overflow-x-hidden h-[5000px]`}>
        <BackgroundBlur />
        <Header />
        {children}
      </body>
    </html>
  );
}
