"use client";
import Header from '../../components/Header';
import styles from '../civilwork.module.css';

export default function civilwork() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SERVICES</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Construction & Civilwork</h2>
      
      <img src="../../civilwork.JPG" alt="civilwork" className={styles.civilwork}/>
     <div className ={styles.civilworktagline}>We are into construction and civil work with Central and State Government.</div>
        
          <div className={styles.subtagline1}>
          <p>
          We are fast growing Civil Engineering and construction company in the state of West Bengal having registered and Head Office at Paschim Midnapore (West Bengal). We are in the field of Civil Construction for almost 16 years. We have successfully completed and undertaken varieties of projects in West Bengal and other states, including Government Infrastructure Projects, Road and Building Projects, Industrial Projects, Residential Buildings and Commercial Complexes, , Other Educational Institutions, Hostel and College Buildings and all types of Turnkey Projects.
         We have our in house dedicated team of Architectures, Expert Engineers for different segment Of Civil Engineering likewise Electrical, Plumbing, HVAC and other related services. We have committed team for QA/QC Engineers, who ensures quality of work at various stages of projects execution.

         </p>
            </div>
            
            
            </main>
            </div>
  );
}        