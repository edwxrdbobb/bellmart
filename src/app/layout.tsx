import '@/assets/styles/main.css';
import { ThemeProvider } from '../context/ThemeContext';
import { ReactNode } from 'react';

import Navbar from '@/components/navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
            <header className="p-4 w-full">
              <Navbar />
            </header>
            <main className="container mx-auto px-4">
              {children}
            </main>
            <footer className="p-4 text-center">
              <p>© {new Date().getFullYear()} Your App Name</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
