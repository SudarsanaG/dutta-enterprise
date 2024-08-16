"use client"
// src/app/page.tsx
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from './ServicesPage.module.css';

export default function ServicesPage() {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.tagline}> OUR SERVICES</h1>
      <header/>
      <div className={styles.cardcontainer}>
        <h4 className={styles.card}>Integrated Facility Management Services</h4>
      
        <h4 className={styles.card}>Staffing Solutions and Payroll Management</h4>
      
        <h4 className={styles.card}>Private Security and Manned Guarding</h4>
     
        <h4 className={styles.card}>Catering</h4>
     
        <h4 className={styles.card}>Construction and Civil Work</h4>
     
        <h4 className={styles.card}>Other Services</h4>
      </div>
      
    </div>
  );
}
