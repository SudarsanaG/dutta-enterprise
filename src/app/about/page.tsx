// src/app/about/page.tsx
"use client";
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
       <h1 className={styles.tagline}>Dutta Enterprise: WHO WE ARE?</h1>
             <Header />
      <main className={styles.main}>
        <div className={styles.aboutpagephoto}>
         
          <p className={styles.subtagline1}>
          DUTTA ENTERPRISE is one of the leading integrated facilities management services agency, with a focus on healthcare, education, public administration (state government entities, municipal bodies and other government offices), railways and State Govt. Organisations, and retail sectors. We provide a comprehensive range of integrated facility management service offerings across multiple sectors, and consequently are among select companies in India that have a wide geographic presence and customer base, catering to almost all end-user segments.
           
          </p>
          <img src="../../about page.webp" alt="about" className={styles.aboutpagephoto1}/>
         </div>
          {!isExpanded && (
            <Link href="/about/detailed">
              <button className={styles.readMoreButton}>
             
                Read More
              </button>
            </Link>
          )}
        
      </main>
    </div>
  );
}
