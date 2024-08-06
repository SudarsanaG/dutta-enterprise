"use client"
// src/app/page.tsx
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.textbox}>
          <h1 className={styles.tagline}>ABOUT US</h1>
          <p className={styles.subtagline1}>
            We are one of the leading integrated facilities management services Agency, with a focus on healthcare, education, public administration (state government entities, municipal bodies and other government offices), Railways and State Govt. Organisations, and retail sectors.
            {!isExpanded && '...'}
            {isExpanded && (
              <>
                {' '}
                We provide a comprehensive range of integrated facility management service offerings across multiple sectors, and consequently are among select companies in India that have a wide geographic presence and customer base, catering to almost all end-user segments.
              </>
            )}
          </p>
          <button onClick={toggleReadMore} className={styles.readMoreButton}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </main>
    </div>
  );
}
