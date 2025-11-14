// src/app/about/page.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from './contact.module.css';

export default function Contact() {
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
 
  return (
    <div ref={sectionRef} className={styles.container}>
        <Header />
      <main className={styles.main}>
                    
       
        <div className={`${styles.tagline} ${hasAnimated ? styles.animated : ''}`}>
          <span className={styles.taglineBlue}>Interested in our </span>
          <span className={styles.taglineOrange}>facility management </span>
          <span className={styles.taglineBlue}>services?</span>
        </div>
                     
        <Link href="/contact/detailed">
              <button className={`${styles.readMoreButton} ${hasAnimated ? styles.animated : ''}`}>
             
               Get In Touch
              </button>
            </Link>    
          </main>
        </div>
     
    
  );
}
