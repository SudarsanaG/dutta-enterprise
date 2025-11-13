"use client";
import Header from '../../components/Header';
import { Trash2, Wrench, Building2, Trees } from 'lucide-react';
import styles from '../otherservices.module.css';

export default function otherservices() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline1}>Other Services</div>
      </div>
      
      <main className={styles.main}>
        <div className={styles.servicesSection}>
          <div className={styles.innerContainer}>
            <h2 className={styles.sectionTitle}>Our Additional Services</h2>
            <div className={styles.cardsContainer}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Trash2 />
                </div>
                <div className={styles.cardTitle}>1. Waste Management</div>
                <div className={styles.cardContent}>
                  Waste management or waste disposal includes the processes and actions required to manage waste from its inception to its final disposal.
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Wrench />
                </div>
                <div className={styles.cardTitle}>2. Building Maintenance</div>
                <div className={styles.cardContent}>
                  Building Technical Services, Utilities Operations & maintenance (BMS, HVAC, Electrical, Mechanical, Plumbing, Carpentry, Fire systems & Building life safety includes all preventative, remedial, and upgrades works required for the upkeep and improvement of buildings and their components.
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Building2 />
                </div>
                <div className={styles.cardTitle}>3. Property Management</div>
                <div className={styles.cardContent}>
                  Property management is the operation, control, maintenance, and oversight of real estate and physical property. This can include residential, commercial, and land real estate.
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Trees />
                </div>
                <div className={styles.cardTitle}>4. Landscaping</div>
                <div className={styles.cardContent}>
                  Landscaping, decorating, catering services (including vending machines and water coolers), cleaning services, pest control, waste management and car parking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
