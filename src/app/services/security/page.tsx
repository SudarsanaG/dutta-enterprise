"use client";
import Header from '../../components/Header';
import styles from '../security.module.css';

export default function security() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SERVICES</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Private Security & Manned Guarding</h2>
      <img src="../../SECURITY.jpg" alt="security" className={styles.security}/>
            
          <div className={styles.subtagline1}>
          Private Security and Manned Guarding are critical services within the broader security industry, providing protection for people, property, and assets. These services are essential for maintaining safety and order in various environments, from corporate offices and residential complexes to events and public spaces.
</div>
<h2 className={styles.cardtitle1}>Private Security </h2>
<div className={styles.subtagline2}>Private security refers to the range of services provided by security firms or individual contractors to protect clients from threats such as theft, vandalism, violence, and unauthorized access. Unlike public law enforcement, private security operates under a contract and focuses on the specific needs of clients.
    </div>
<h2 className={styles.cardtitle1}>Manned Guarding</h2>
<div className={styles.subtagline2}> Manned guarding is a specific service within private security that involves the deployment of security personnel on-site to provide a physical security presence. Manned guarding is essential in situations where a human presence is required to deter crime, manage access, or respond to incidents.
    </div>
    <div className={styles.dog}>
    <img src="../../private security.jpeg" alt="private security" className={styles.security1}/>
    <img src="../../dog.jpg" alt="private security" className={styles.security1}/>
    </div>
<div className={styles.text}>
    <div className={styles.bold}>Access Control:</div> We ensure that only authorized personnel are allowed to enter the facility and control the movement of people within the facility.
    <div className={styles.bold}>Surveillance:</div> We monitor the facility using CCTV and other surveillance systems and respond to any security breaches or incidents.
    <div className={styles.bold}>Patrols:</div> We regularly patrol the facility to detect and deter any suspicious activity or potential security threats.
    <div className={styles.bold}>Emergency response: </div>We provide services in case of emergencies including fire, medical emergencies, or criminal activity.

</div>
            
              
            </main>
            </div>
  );
}        