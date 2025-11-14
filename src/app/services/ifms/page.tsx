"use client";
import Header from '../../components/Header';
import { useState, useEffect, useRef } from 'react';
import styles from '../staffing.module.css';
import ifmsStyles from '../Ifms.module.css';

export default function Ifms() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline}>Integrated Facility Management Services</div>
      </div>
      <main className={styles.main}>
        <div ref={sectionRef} className={styles.introSection}>
          <div className={`${styles.headerGrid} ${hasAnimated ? styles.animated : ''}`}>
            <div className={styles.headerLeft}>
              <div className={`${styles.staffingLabel} ${hasAnimated ? styles.animated : ''}`}>IFMS</div>
              <div className={`${styles.tagline1} ${hasAnimated ? styles.animated : ''}`}>
                <span className={styles.taglineBlue}>Integrated </span>
                <span className={styles.taglineOrange}>Solutions</span>
              </div>
            </div>
            <div className={styles.headerRight}>
              <p className={`${styles.tagline2} ${hasAnimated ? styles.animated : ''}`}>Our range of integrated service offerings include soft services as well as hard services. It include soft services such as housekeeping, sanitation, landscaping and gardening, hard services such as mechanical, electrical and plumbing services, solid, liquid and biomedical waste management, pest control, façade cleaning and effluent treatment and other services such as production support services, warehouse management.</p>
            </div>
          </div>
          <div className={styles.imageGallery}>
            <div className={styles.galleryItem}>
              <img src="../../ifms.jpg" alt="IFMS" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="../../clean.jpg" alt="Cleaning Services" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="../../facade.jpg" alt="Facade Cleaning" className={styles.galleryImage}/>
            </div>
          </div>
        </div>
          
            <div className={ifmsStyles.softServicesSection}>
              <div className={ifmsStyles.innerContainer}>
                <h2 className={ifmsStyles.softskills}>Soft Services</h2>
                <div className={ifmsStyles.cardsContainer}>
                  <div className={ifmsStyles.serviceCard}>
                    <div className={ifmsStyles.cardTitle}>1. Housekeeping and cleaning services</div>
                    <div className={ifmsStyles.cardContent}>We offer a wide range of commercial and industrial cleaning services throughout India with specific focus on quality, efficiency, and sustainable service delivery models.</div>
                  </div>
                  
                  <div className={ifmsStyles.serviceCard}>
                    <div className={ifmsStyles.cardTitle}>2. Landscaping and gardening</div>
                    <div className={ifmsStyles.cardContent}>We are responsible for the upkeep of landscapes and gardens at our customers&apos; locations through, trimming of grass, setting up of new gardens and general maintenance.</div>
                  </div>
                 
                  <div className={ifmsStyles.serviceCard}>
                    <div className={ifmsStyles.cardTitle}>3. Disinfecting and sanitizing services</div>
                    <div className={ifmsStyles.cardContent}>We thoroughly clean and disinfect the premises, including surfaces, equipment, and common areas. This typically involves the use of specialized cleaning agents, disinfectants, and equipment to remove dirt, grime, and bacteria.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={ifmsStyles.hardServicesSection}>
              <div className={ifmsStyles.innerContainerHard}>
                <h2 className={ifmsStyles.hardskills}>Hard Services</h2>
                <div className={ifmsStyles.cardsContainer}>
                  <div className={ifmsStyles.serviceCard}>
                    <div className={ifmsStyles.cardTitle}>1. Pest Control</div>
                    <div className={ifmsStyles.cardContent}>We offer pest control services to commercial establishments using government authorized treatments and solutions that follow modern practices in the industry and are in compliance with the environmental safety protocols and environmental, health and safety norms.</div>
                  </div>
                  
                  <div className={ifmsStyles.serviceCard}>
                    <div className={ifmsStyles.cardTitle}>2. Solid, Liquid, and Biomedical Waste Management</div>
                    <div className={ifmsStyles.cardContent}>We provide comprehensive waste management services including collection, transportation, treatment, and disposal of solid, liquid, and biomedical waste from various sources. Our services also include designing, building, and operating effluent treatment plants, along with quality control testing and maintenance services.</div>
                  </div>
                  
                  <div className={ifmsStyles.serviceCard}>
                    <div className={ifmsStyles.cardTitle}>3. Facade cleaning</div>
                    <div className={ifmsStyles.cardContent}>We offer cleaning and maintenance services for the external glass facades of buildings used by our customers.</div>
                  </div>
                </div>
              </div>
            </div>

              
             
            
           
            </main>
            
            </div>
        
  );
}
