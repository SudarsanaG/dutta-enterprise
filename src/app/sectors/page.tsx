"use client"
// src/app/page.tsx
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from './sectorspage.module.css';

export default function Sectors() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <h1 className={styles.tagline1}>Sectors</h1>
        
        </div>
      <div className={styles.cardcontainer}>
        <div className={styles.card1}>
        <div className={styles.cardHeading}>Hospitals and Healthcare</div>
          <div className={styles.cardContent}>
     <div className ={styles.civilworktagline}>We provide services to hospitals and medical institutes in this sector. </div>
     <p></p>
            <a href="/sectors/hospitals" className={styles.readMore}>Read More</a>
          </div>
        </div>

        <div className={styles.card2}>
          <div className={styles.cardHeading}>Education</div>
          <div className={styles.cardContent}>
            <p> We provide services to private and government schools and colleges (including medical colleges) in this sector.</p>
            <a href="/sectors/education" className={styles.readMore}>Read More</a>
          </div>
        </div>

        <div className={styles.card3}>
          <div className={styles.cardHeading}>Public Administration</div>
          <div className={styles.cardContent}>
            <p>We provide services to municipal, state government and government offices, electricity board and district consumer forums.</p>
            <a href="/sectors/publicadministration" className={styles.readMore}>Read More</a>
          </div>
        </div>

        <div className={styles.card4}>
        <div className={styles.cardHeading}>Industrial</div>
          <div className={styles.cardContent}>
            <p>  We provide our services to manufacturing companies.</p>
            <a href="/sectors/industrial" className={styles.readMore}>Read More</a>
          </div>
        </div>

        <div className={styles.card5}>
        <div className={styles.cardHeading}>Retail</div>
          <div className={styles.cardContent}>
            <p>We provide services to retail outlets and branch offices in this sector.</p>
            <a href="/sectors/retail" className={styles.readMore}>Read More</a>
          </div>
        </div>

        <div className={styles.card6}>
        <div className={styles.cardHeading}>Other Sectors</div>
          <div className={styles.cardContent}>
            <p>Explore our additional sectors.</p>
            <a href="/sectors/othersectors" className={styles.readMore}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
