"use client";
import Header from '../../components/Header';
import styles from '../civilwork.module.css';

export default function civilwork() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline1}>Construction and Civil Work</div>
      </div>
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline1}>Expert Construction Services</h2>
            <p className={styles.subtagline2}>
              We are fast growing Civil Engineering and construction company in the state of West Bengal. We have our head office at Paschim Midnapore (West Bengal). We are in the field of Civil Construction for almost 16 years. We have successfully completed and undertaken varieties of projects in West Bengal and other states, including Government Infrastructure Projects, Road and Building Projects, Industrial Projects, Residential Buildings and Commercial Complexes, Other Educational Institutions, Hostel and College Buildings and all types of Turnkey Projects.
            </p>
            <p className={styles.subtagline2}>
              We have our in house dedicated team of Architectures, Expert Engineers for different segment Of Civil Engineering likewise Electrical, Plumbing, HVAC and other related services. We have committed team for QA/QC Engineers, who ensures quality of work at various stages of projects execution.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../civilwork.jpg" alt="civilwork" className={styles.civilwork}/>
          </div>
        </div>
      </main>
    </div>
  );
}
