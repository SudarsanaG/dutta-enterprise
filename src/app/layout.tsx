import './globals.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/page';

export const metadata = {
  title: 'Dutta Enterprise',
 descriptipon: 'Welcome to this site',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../public/logo.ico" />
        <title>Dutta Enterprise</title>
        <meta name="Welcome to this site" content="Dutta Enterprise" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
