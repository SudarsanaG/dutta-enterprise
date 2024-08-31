"use client";
import Header from '../../components/Header';
import styles from '../education.module.css';

export default function education() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SECTORS</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Education</h2>
      
      <img src="../../edu1.jpg" alt="edu1" className={styles.edu}/>
     
        
          <div className={styles.subtagline1}>
            <img src="../../edu2.jpg" alt="edu2" className={styles.edu2}/>
          <p>
          We provide services to private and government schools and colleges (including medical colleges) in this sector. In addition to our regular service offerings, we provide certain specialized services that are customised for the client including administrative assistance and maintenance of safety and security inside the school premises.
          </p>
            </div>
            
            
            </main>
            </div>
  );
}        