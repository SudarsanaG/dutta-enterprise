"use client";
import Header from '../../components/Header';
import styles from '../education.module.css';

export default function education() {
  return (
    <div className={styles.container}>
      
      <Header />
      <div className={styles.container1}>
      
      <div className={styles.tagline1}>Education</div>

    </div>
  
      
      <main className={styles.main}>
      <div className ={styles.about}>
          <div>
          <div className={styles.subtagline1}>  We provide services to private and government schools and colleges (including medical colleges) in this sector.</div>
          <div className={styles.subtagline2}>
          In addition to our regular service offerings, we provide certain specialized services that are customised for the client including administrative assistance and maintenance of safety and security inside the school premises.
          </div>
         </div>
                 
      <img src="../../edu1.jpg" alt="edu1" className={styles.edu1}/>
                       
      </div>
      
        
       
            
            
            </main>
            </div>
  );
}        