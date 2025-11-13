"use client";
import Header from '../../components/Header';
import styles from '../othersectors.module.css';

export default function othersectors() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline1}>Other Sectors</div>
      </div>
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline1}>Additional Sector Services</h2>
            <p className={styles.subtagline2}>
              Our services are not limited to the sectors mentioned above. We have more in store! We also cater to customers operating in automobile sector, sports clubs, media and entertainment, real estate and IT/ ITES sectors. We are among the few integrated services companies that provides facility management services to commercial complexes and shopping malls across the country.
            </p>
            <p className={styles.subtagline2}>
              Our client base also consists of companies in hospitality, media and entertainment sectors, and sites of spiritual and religious significance.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../os.jpeg" alt="other sectors" className={styles.edu1}/>
          </div>
        </div>
      </main>
    </div>
  );
}
