import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'My Next.js Website',
  description: 'Welcome to my Next.js website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
