"use client"
// src/app/page.tsx
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from './ServicesPage.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
     
        <h1 className={styles.tagline1}>  Services We Provide</h1>
        </div>
      <div className={styles.cardcontainer}>
        <div className={styles.card1}>
        <div className={styles.cardHeading}>Integrated Facility Management Services</div>
          <div className={styles.cardContent}>
            <p>Comprehensive management solutions for facilities.</p>
            <a href="/services/ifms" className={styles.readMore}>View Service</a>
          </div>
        </div>

        <div className={styles.card2}>
          <div className={styles.cardHeading}>Staffing Solutions and Payroll Management</div>
          <div className={styles.cardContent}>
            <p>End-to-end staffing and payroll management solutions.</p>
            <a href="/services/staffing" className={styles.readMore}>View Service</a>
          </div>
        </div>

        <div className={styles.card3}>
          <div className={styles.cardHeading}>Private Security and Manned Guarding</div>
          <div className={styles.cardContent}>
            <p>Professional security services and personnel.</p>
            <a href="/services/security" className={styles.readMore}>View Service</a>
          </div>
        </div>

        <div className={styles.card4}>
        <div className={styles.cardHeading}>Catering</div>
          <div className={styles.cardContent}>
            <p>High-quality catering services for all events.</p>
            <a href="/services/catering" className={styles.readMore}>View Service</a>
          </div>
        </div>

        <div className={styles.card5}>
        <div className={styles.cardHeading}>Construction and Civil Work</div>
          <div className={styles.cardContent}>
            <p>Expert construction and civil engineering services.</p>
            <a href="/services/civilwork" className={styles.readMore}>View Service</a>
          </div>
        </div>

        <div className={styles.card6}>
        <div className={styles.cardHeading}>Other Services</div>
          <div className={styles.cardContent}>
            <p>Explore our additional services.</p>
            <a href="/services/otherservices" className={styles.readMore}>View Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
