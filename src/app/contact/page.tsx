// src/app/about/page.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from './contact.module.css';

export default function Contact() {
 
  return (
    <div className={styles.container}>
        <Header />
      <main className={styles.main}>
                    
       
        <div className={styles.tagline}> Interested in our facility management services?</div>
                     
        <Link href="/contact/detailed">
              <button className={styles.readMoreButton}>
             
               Get In Touch
              </button>
            </Link>    
          </main>
        </div>
     
    
  );
}
