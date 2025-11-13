"use client";
import Header from '../../components/Header';
import styles from '../industrial.module.css';

export default function industrial() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline1}>Industrial</div>
      </div>
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline1}>Industrial Sector Services</h2>
            <p className={styles.subtagline2}>
              We provide our services to manufacturing companies. These services include the management of physical assets, such as machinery and infrastructure, ensuring optimal performance through regular maintenance and monitoring. IFMS also oversees security systems, energy management, and waste management, promoting sustainability and cost-effectiveness.
            </p>
            <p className={styles.subtagline2}>
              Additionally, it facilitates compliance with industry regulations by tracking safety protocols and environmental standards. By integrating these services, IFMS allows industries to focus on their core operations while improving overall productivity, reducing downtime, and minimizing operational risks.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../industrial.jpg" alt="industrial" className={styles.edu1}/>
          </div>
        </div>
      </main>
    </div>
  );
}
