import type { Metadata, Viewport } from 'next';
import '@fontsource/bebas-neue/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/jetbrains-mono/400.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Medisetti Prudhvi · Developer Portfolio',
  description: 'Medisetti Prudhvi — Full-Stack Developer | AI Developer | Web Developer | Problem Solver.',
  openGraph: {
    title: 'Medisetti Prudhvi · Portfolio',
    description: 'Full-Stack Developer | AI Developer | Web Developer | Problem Solver.',
    images: ['/stills/face.jpg'],
  },
};

export const viewport: Viewport = { themeColor: '#000000', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
