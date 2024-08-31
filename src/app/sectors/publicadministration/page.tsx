"use client";
import Header from '../../components/Header';
import styles from '../pubadm.module.css';

export default function publicadministration() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SECTORS</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Public Administration</h2>
      
      <img src="../../adm1.png" alt="adm1" className={styles.adm}/>
     
        
          <div className={styles.subtagline1}>
            <img src="../../adm2.jpg" alt="adm2" className={styles.adm2}/>
          <p>
          We provide services to municipal, state government and government offices, electricity board and district consumer forums. In addition to our regular service offerings, we provide certain specialized services that are customised for the client including manpower.
          </p>
            </div>
            
            
            </main>
            </div>
  );
}        