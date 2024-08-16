"use client";
import Header from '../../components/Header';
import styles from '../otherservices.module.css';

export default function otherservices() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SERVICES</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Other Services</h2>
      <img src="../../OTHER SERVICES.jpg" alt="otherservices" className={styles.os}/>
            
         

<div className={styles.text}>
    <div className={styles.bold}>Waste Management:</div> Waste management or waste disposal includes the processes and actions required to manage waste from its inception to its final disposal.
    <div className={styles.bold}>Building Maintenance:</div> Building Technical Services, Utilities Operations & maintenance (BMS, HVAC, Electrical, Mechanical, Plumbing, Carpentry, Fire systems & Building life safety includes all preventative, remedial, and upgrades works required for the upkeep and improvement of buildings and their components.
    <div className={styles.bold}>Property Management:</div> Property management is the operation, control, maintenance, and oversight of real estate and physical property. This can include residential, commercial, and land real estate.
    <div className={styles.bold}>Landscaping:</div>Landscaping, decorating, catering services (including vending machines and water coolers),cleaning services, pest control, waste management and car parking.

</div>
   

            
              
            </main>
            </div>
  );
}        