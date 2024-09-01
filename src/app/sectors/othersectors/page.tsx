"use client";
import Header from '../../components/Header';
import styles from '../othersectors.module.css';

export default function othersectors() {
  return (
    <div className={styles.container}>
      
      <Header />
      <div className={styles.container1}>
      
      <div className={styles.tagline1}>Other Sectors</div>

    </div>
  
      
      <main className={styles.main}>
      <div className ={styles.about}>
          <div>
          <div className={styles.subtagline1}> Our services are not limited to the sectors mentioned above.We have more in store!</div>
          <div className={styles.subtagline2}>
          We also cater to customers operating in automobile sector, sports clubs, media and entertainment, real estate and IT/ ITES sectors. We are among the few integrated services companies that provides facility management services to commercial complexes and shopping malls across the country. Our client base also consists of companies in hospitality, media and entertainment sectors, and sites of spiritual and religious significance.
          </div>
         </div>
                 
      <img src="../../os.jpeg" alt="edu1" className={styles.edu1}/>
                       
      </div>
      
        
       
            
            
            </main>
            </div>
  );
}        