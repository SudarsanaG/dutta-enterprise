import './globals.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/page';
export const metadata = {
  title: 'Dutta Enterprise',
  description: 'Dutta Enterprise',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../public/favicon.ico" />
        <title>Dutta Enterprise</title>
        <meta name="description" content="Dutta Enterprise" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
