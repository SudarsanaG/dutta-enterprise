"use client";
import Header from '../../components/Header';
import styles from '../hospitals.module.css';

export default function hospitals() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SECTORS</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Hospitals & Healthcare</h2>
      
      <img src="../../hospital1.jpg" alt="hospital1" className={styles.hospital}/>
     <div className ={styles.civilworktagline}>We provide services to hospitals and medical institutes in this sector. </div>
        
          <div className={styles.subtagline1}>
            <img src="../../hospital2.avif" alt="hospital2" className={styles.hospital2}/>
          <p>
          In addition to our regular service offerings, we provide certain specialized services that are customised for the client including cleaning of intensive care units and sensitive areas, administrative assistance, emergency services, general staffing and maintenance of safety and security inside the hospital premises.
          </p>
            </div>
            
            
            </main>
            </div>
  );
}        