"use client";
import Header from '../../components/Header';
import styles from '../retail.module.css';

export default function retail() {
  return (
    <div className={styles.container}>
      
      <Header />
      <div className={styles.container1}>
      
      <div className={styles.tagline1}>Sectors</div>

    </div>
  
      
      <main className={styles.main}>
      <div className={styles.heading}>Retail</div>
      <div className ={styles.about}>
          <div>
          <div className={styles.subtagline1}>  We provide services to retail outlets and branch offices in this sector.</div>
          <div className={styles.subtagline2}>
          In addition to our regular service offerings, we provide certain specialized services that are customised for the client including administrative assistance and manned guarding.
          </div>
         </div>
                 
      <img src="../../retail.jpg" alt="edu1" className={styles.edu1}/>
                       
      </div>
      
        
       
            
            
            </main>
            </div>
  );
}        