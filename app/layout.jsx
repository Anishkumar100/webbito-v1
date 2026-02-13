import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'Webbito - Premium Software Development & Digital Agency',
  description: 'Expert web development, app development, UI/UX design, and digital marketing services. Transform your business with cutting-edge technology solutions.',
  keywords: ['web development', 'app development', 'digital agency', 'UI/UX design', 'e-commerce'],
  authors: [{ name: 'Webbito' }],
  openGraph: {
    title: 'Webbito - Premium Software Development & Digital Agency',
    description: 'Expert web development, app development, UI/UX design, and digital marketing services.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
