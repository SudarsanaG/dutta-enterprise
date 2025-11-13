"use client";
import Header from '../components/Header';
import styles from './clients.module.css';

export default function Clients() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.heroContent}>
          <div className={styles.tagline1}>Our Clients</div>
          <p className={styles.tagline2}>&quot;Management is doing things right; leadership is doing the right things.&quot;</p>
          <p className={styles.tagline}>We have clients both in government and corporate sectors.</p>
        </div>
      </div>
      <main className={styles.main}>

        <div className={styles.clientsSection}>
          <div className={styles.cardsContainer}>
            <div className={styles.clientCard}>
              <img src="../../bdo.jpeg" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../kec.webp" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../L&T c.webp" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../L&T i.png" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../paschim.png" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../policab.png" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../railway.png" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../wb agri.png" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../wb agro.jpeg" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../wb pwd.png" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../wb rural.jpg" alt="client" className={styles.clientLogo}/>
            </div>
            <div className={styles.clientCard}>
              <img src="../../client navo.jpg" alt="client" className={styles.clientLogo}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
