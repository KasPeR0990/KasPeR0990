import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Kasper Hallenius',
  description: 'Personal website of Kasper Hallenius',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}