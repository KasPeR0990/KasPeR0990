import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Kasper Hallenius',
  description: 'Hey, I\'m Kasper! A 15-year-old high school student from Sweden with lots of passions but right now I\'m deepdiving into AI and coding. I enjoy building projects and exploring new technologies in my free time.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=GeistMono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
