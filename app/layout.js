import './globals.css';

export const metadata = {
  title: 'Hilly Snowfall AI Prompts',
  description: 'Curated AI image prompts inspired by alpine adventures for a 23-year-old traveler.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
