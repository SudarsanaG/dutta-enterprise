import './globals.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/page';

export const metadata = {
  title: 'Dutta Enterprise',
  descriptipon: 'Welcome to this site', // fix typo 'descriptipon' to 'description'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Corrected the favicon path */}
        <link rel="icon" href="/favicon.ico" />
        <title>Dutta Enterprise</title>
        <meta name="description" content="Welcome to this site" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
