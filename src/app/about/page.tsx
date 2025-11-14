// src/app/about/page.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div ref={sectionRef} className={styles.container}>
        <Header />
      <main className={styles.main}>
                      
        <div className={styles.aboutpagephoto}>
          <div className={styles.imageCollage}>
            <div className={styles.collageItem}>
              <img src="/about.jpg" alt="About Dutta Enterprise" className={`${styles.collageImage} ${styles.collageImage1} ${hasAnimated ? styles.animated : ''}`}/>
            </div>
            <div className={styles.collageItem}>
              <img src="/hospital2.avif" alt="Healthcare Services" className={`${styles.collageImage} ${styles.collageImage2} ${hasAnimated ? styles.animated : ''}`}/>
            </div>
            <div className={styles.collageItem}>
              <img src="/ifms.jpg" alt="Facility Management" className={`${styles.collageImage} ${styles.collageImage3} ${hasAnimated ? styles.animated : ''}`}/>
            </div>
            <div className={styles.collageItem}>
              <img src="/clean.jpg" alt="Professional Services" className={`${styles.collageImage} ${styles.collageImage4} ${hasAnimated ? styles.animated : ''}`}/>
            </div>
          </div>
          <div className={styles.contentSection}>
            <div className={`${styles.tagline} ${hasAnimated ? styles.animated : ''}`}> Providing best facilities management services since 15+ years</div>
            <div className={`${styles.subtagline1} ${hasAnimated ? styles.animated : ''}`}>We are among select companies in India that have a wide geographic
            presence and customer base, catering to almost all end-user segments.
            </div>
            <div className={`${styles.subtagline2} ${hasAnimated ? styles.animated : ''}`}>
            Dutta Enterprise is one of the leading integrated facilities
             management services agency, with a focus on healthcare, education,
              public administration (state government entities, municipal bodies and other government offices),
             railways and State Govt.
              Organisations, and retail sectors.
               We provide a comprehensive range of integrated facility
                management service offerings across multiple sectors, 
                
            </div>
           
          
            {!isExpanded && (
              <Link href="/about/detailed" className={`${styles.readMoreButton} ${hasAnimated ? styles.animated : ''}`}>
                About Us
              </Link>
            )}
          </div>
        </div>
          </main>
        </div>
     
    
  );
}
