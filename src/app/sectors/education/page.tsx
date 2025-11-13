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
        <div className={styles.about}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline1}>Education Sector Services</h2>
            <p className={styles.subtagline2}>
              We provide services to private and government schools and colleges (including medical colleges) in this sector. In addition to our regular service offerings, we provide certain specialized services that are customised for the client including administrative assistance and maintenance of safety and security inside the school premises.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../edu1.jpg" alt="education" className={styles.edu1}/>
          </div>
        </div>
      </main>
    </div>
  );
}
