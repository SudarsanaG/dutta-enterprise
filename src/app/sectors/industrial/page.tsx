"use client";
import Header from '../../components/Header';
import styles from '../industrial.module.css';

export default function industrial() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SECTORS</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Industrial</h2>
      
      <img src="../../indus.jpg" alt="indus" className={styles.indus}/>
     
        
          <div className={styles.subtagline1}>
            <img src="../../industrial.jpg" alt="industrial" className={styles.industrial}/>
          <p>
          We provide our services to manufacturing companies.</p>
            </div>
            
            
            </main>
            </div>
  );
}        