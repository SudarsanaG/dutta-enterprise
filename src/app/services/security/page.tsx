"use client";
import Header from '../../components/Header';
import { Shield, Eye, Search, AlertCircle } from 'lucide-react';
import styles from '../security.module.css';

export default function security() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline1}>Private Security and Manned Guarding</div>
      </div>
     
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline1}>Comprehensive Security Solutions</h2>
            <p className={styles.subtagline2}>
              Private Security and Manned Guarding are critical services within the broader security industry, providing protection for people, property, and assets. These services are essential for maintaining safety and order in various environments, from corporate offices and residential complexes to events and public spaces. Our private security and manned guarding services consist of providing security solutions including access control, surveillance, emergency services and patrols.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../dog.jpg" alt="private security" className={styles.security1}/>
          </div>
        </div>

        <div className={styles.servicesSection}>
          <div className={styles.innerContainer}>
            <div className={styles.cardsContainer}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Shield />
              </div>
              <h3 className={styles.cardTitle}>1. Access Control</h3>
              <p className={styles.cardContent}>
                We ensure that only authorized personnel are allowed to enter the facility and control the movement of people within the facility.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Eye />
              </div>
              <h3 className={styles.cardTitle}>2. Surveillance</h3>
              <p className={styles.cardContent}>
                We monitor the facility using CCTV and other surveillance systems and respond to any security breaches or incidents.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Search />
              </div>
              <h3 className={styles.cardTitle}>3. Patrols</h3>
              <p className={styles.cardContent}>
                We regularly patrol the facility to detect and deter any suspicious activity or potential security threats.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <AlertCircle />
              </div>
              <h3 className={styles.cardTitle}>4. Emergency Response</h3>
              <p className={styles.cardContent}>
                We provide services in case of emergencies including fire, medical emergencies, or criminal activity.
              </p>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
