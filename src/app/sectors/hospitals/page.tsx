"use client";
import Header from '../../components/Header';
import styles from '../hospitals.module.css';

export default function hospitals() {
  return (
    <div className={styles.container}>
      
      <Header />
      <div className={styles.container1}>
      
      <div className={styles.tagline1}>Sectors</div>

    </div>
  
      
      <main className={styles.main}>
      <div className={styles.heading}>Hospitals and Healthcare</div>
      <div className ={styles.about}>
          <div>
          <div className={styles.subtagline1}>  We provide services to hospitals and medical institutes in this sector.</div>
          <div className={styles.subtagline2}>
          In addition to our regular service offerings, we provide certain specialized services that are customised for the client including cleaning of intensive care units and sensitive areas, administrative assistance, emergency services, general staffing and maintenance of safety and security inside the hospital premises.
          </div>
         </div>
                 
      <img src="../../hospital1.jpg" alt="edu1" className={styles.edu1}/>
                       
      </div>
      
        
       
            
            
            </main>
            </div>
  );
}        