"use client";
import Header from '../../components/Header';
import styles from '../othersectors.module.css';

export default function othersectors() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SECTORS</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Other Sectors</h2>
      
      <img src="../../os.jpeg" alt="os" className={styles.os}/>
     
        
          <div className={styles.subtagline1}>
            <img src="../../other sector.jpeg" alt="other sector" className={styles.othersector}/>
          <p>
          We also cater to customers operating in automobile sector, sports clubs, media and entertainment, real estate and IT/ ITES sectors. We are among the few integrated services companies that provides facility management services to commercial complexes and shopping malls across the country. Our client base also consists of companies in hospitality, media and entertainment sectors, and sites of spiritual and religious significance.
          </p>
            </div>
            
            
            </main>
            </div>
  );
}        