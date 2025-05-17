import './globals.css';
import React from 'react';
import { GeistMono } from 'geist/font/mono';

export const metadata = {
  title: 'kasper hallenius',
  description: 'hey, i\'m kasper! a 15 y/o interested in tech and building stuff.',};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistMono.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}