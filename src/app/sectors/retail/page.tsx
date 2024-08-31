"use client";
import Header from '../../components/Header';
import styles from '../retail.module.css';

export default function retail() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SECTORS</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Retail</h2>
      
      <img src="../../retail.jpg" alt="retail" className={styles.retail}/>
     
        
          <div className={styles.subtagline1}>
            <img src="../../retail1.webp" alt="retail" className={styles.retail}/>
          <p>
          We provide services to retail outlets and branch offices in this sector. In addition to our regular service offerings, we provide certain specialized services that are customised for the client including administrative assistance and manned guarding.
          </p>
            </div>
            
            
            </main>
            </div>
  );
}        