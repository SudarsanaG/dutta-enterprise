"use client";
import Header from '../../components/Header';
import styles from '../retail.module.css';

export default function retail() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline1}>Retail</div>
      </div>
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline1}>Retail Sector Services</h2>
            <p className={styles.subtagline2}>
              We provide services to retail outlets and branch offices in this sector. In addition to our regular service offerings, we provide certain specialized services that are customised for the client including administrative assistance and manned guarding.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../retail.jpg" alt="retail" className={styles.retail1}/>
          </div>
        </div>
      </main>
    </div>
  );
}
