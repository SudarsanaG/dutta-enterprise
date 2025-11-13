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
        <div className={styles.about}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline1}>Public Administration Services</h2>
            <p className={styles.subtagline2}>
              Our services cover public administration sector too. We provide services to municipal, state government and government offices, electricity board and district consumer forums. In addition to our regular service offerings, we provide certain specialized services that are customised for the client including manpower.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../adm2.jpg" alt="public administration" className={styles.edu1}/>
          </div>
        </div>
      </main>
    </div>
  );
}
