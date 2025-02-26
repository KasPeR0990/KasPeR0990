import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Kasper Hallenius',
  description: 'Hey, I\'m Kasper! A 15-year-old high school student from Sweden with lots of passions but right now I\'m deepdiving into AI and coding. I enjoy building projects and exploring new technologies in my free time.',
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