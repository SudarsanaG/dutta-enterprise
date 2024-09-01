"use client";
import Header from '../../components/Header';
import styles from '../pubadm.module.css';

export default function publicadministration() {
  return (
    <div className={styles.container}>
      
      <Header />
      <div className={styles.container1}>
      
      <div className={styles.tagline1}>Public Administration</div>

    </div>
  
      
      <main className={styles.main}>
      <div className ={styles.about}>
          <div>
          <div className={styles.subtagline1}>  Our services cover public administration sector too.</div>
          <div className={styles.subtagline2}>
          We provide services to municipal, state government and government offices, electricity board and district consumer forums. In addition to our regular service offerings, we provide certain specialized services that are customised for the client including manpower.
         
          </div>
         </div>
                 
      <img src="../../adm2.jpg" alt="edu1" className={styles.edu1}/>
                       
      </div>
      
        
       
            
            
            </main>
            </div>
  );
}        