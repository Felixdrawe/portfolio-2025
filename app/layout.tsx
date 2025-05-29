import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { BackgroundBlur } from '@/components/BackgroundBlur';
import './debug.css'; // Import the new CSS file

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Felix Drawe | Personal Portfolio',
  description: 'Felix Drawe is a web developer with 1 year of experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}>
        <BackgroundBlur />
        <Header />
        {children}
      </body>
    </html>
  );
}

// min-h-[200rem]
