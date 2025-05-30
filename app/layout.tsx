import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { BackgroundBlur } from '@/components/BackgroundBlur';
import './debug.css'; // Import the new CSS file
import ActiveSectionContextProvider from '@/context/active-section-context';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Felix Drawe | Portfolio',
  description: 'Felix Drawe is a web developer with 1 year of experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} dark:text-opacity-90 relative bg-gray-50 pt-28 text-gray-950 sm:pt-36 dark:bg-gray-900 dark:text-gray-50`}
      >
        <BackgroundBlur />
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
