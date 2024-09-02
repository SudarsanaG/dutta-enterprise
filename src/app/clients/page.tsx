"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from './clients.module.css';
export default function Advantages() {
    return (
        <div className={styles.container}>
             <Header />
             <div className={styles.container1}>
      
      <div className={styles.tagline1}>Clients</div>

    </div>
        <main className={styles.main}>
        <div className={styles.tagline}>We have clients both in government and corporate sectors.</div>
        <div className={styles.cardsContainer}>
        <img src="../../bdo.jpeg" alt="clients" className={styles.clients}/>
        <img src="../../kec.webp" alt="clients" className={styles.clients}/>
        <img src="../../L&T c.webp" alt="clients" className={styles.clients}/>
        <img src="../../L&T i.png" alt="clients" className={styles.clients}/>
        <img src="../../paschim.png" alt="clients" className={styles.clients}/>
        <img src="../../policab.png" alt="clients" className={styles.clients}/>
        <img src="../../railway.png" alt="clients" className={styles.clients}/>
        <img src="../../wb agri.png" alt="clients" className={styles.clients}/>
        <img src="../../wb agro.jpeg" alt="clients" className={styles.clients}/>
        <img src="../../wb pwd.png" alt="clients" className={styles.clients}/>
        <img src="../../wb rural.jpg" alt="clients" className={styles.clients}/>
        </div>
      
     
      
  </main>
  </div>

);
}
