// src/app/page.tsx
import Link from 'next/link';
import Header from '../../components/Header';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div>
          <h1 className={styles.tagline}>INTEGRATED FACILITY MANAGEMENT SERVICES</h1>
          <p className={styles.subtagline1}>-Since 15 years</p>
        </div>
      </main>
    </div>
  );
}
