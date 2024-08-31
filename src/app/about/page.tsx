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
        <Header />
      <main className={styles.main}>
                      
        <div className={styles.aboutpagephoto}>
          <img src="../../about1.png" alt="aboutpage" className={styles.aboutpage}/>
          <div >
        <div className={styles.tagline}> Providing best facilities management services since 15+ years</div>
          <div className={styles.subtagline1}>We are among select companies in India that have a wide geographic
          presence and customer base, catering to almost all end-user segments.
          </div>
          <div className={styles.subtagline2}>
          Dutta Enterprise is one of the leading integrated facilities
           management services agency, with a focus on healthcare, education,
            public administration (state government entities, municipal bodies and other government offices),
           railways and State Govt.
            Organisations, and retail sectors.
             We provide a comprehensive range of integrated facility
              management service offerings across multiple sectors, 
              
          </div>
         
        
          {!isExpanded && (
            <Link href="/about/detailed">
              <button className={styles.readMoreButton}>
             
                Read More
              </button>
            </Link>
          )}
          </div>
          </div>
          </main>
        </div>
     
    
  );
}
