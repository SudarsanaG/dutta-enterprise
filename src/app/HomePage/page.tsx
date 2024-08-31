// src/app/page.tsx
import Link from 'next/link';
import Header from '../components/Header';
import styles from './HomePage.module.css'
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Your description here" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
      </Head>
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div>
          <h1 className={styles.tagline}>Integrated Facility Management Services</h1>
          <div className={styles.subtagline1}>~Facilities You Can Rely On, Results You Can Trust.</div>
          

        </div>
      </main>
    </div>
    </>
  );
}
