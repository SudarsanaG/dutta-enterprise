"use client";
import Header from '../../components/Header';
import styles from '../hospitals.module.css';

export default function hospitals() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline1}>Hospitals and Healthcare</div>
      </div>
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline1}>Healthcare Sector Services</h2>
            <p className={styles.subtagline2}>
              We provide services to hospitals and medical institutes in this sector. In addition to our regular service offerings, we provide certain specialized services that are customised for the client including cleaning of intensive care units and sensitive areas, administrative assistance, emergency services, general staffing and maintenance of safety and security inside the hospital premises.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../hospital1.jpg" alt="hospitals" className={styles.edu1}/>
          </div>
        </div>
      </main>
    </div>
  );
}
