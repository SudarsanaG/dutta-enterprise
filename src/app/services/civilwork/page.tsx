"use client";
import Header from '../../components/Header';
import { HardHat, Building, Wrench, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from '../staffing.module.css';

export default function civilwork() {
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
        <div className={styles.tagline}>Construction and Civil Work</div>
      </div>
      <main className={styles.main}>
        <div ref={sectionRef} className={styles.introSection}>
          <div className={`${styles.headerGrid} ${hasAnimated ? styles.animated : ''}`}>
            <div className={styles.headerLeft}>
              <div className={`${styles.staffingLabel} ${hasAnimated ? styles.animated : ''}`}>CONSTRUCTION</div>
              <div className={`${styles.tagline1} ${hasAnimated ? styles.animated : ''}`}>
                <span className={styles.taglineBlue}>Expert </span>
                <span className={styles.taglineOrange}>Construction Services</span>
              </div>
            </div>
            <div className={styles.headerRight}>
              <p className={`${styles.tagline2} ${hasAnimated ? styles.animated : ''}`}>We are fast growing Civil Engineering and construction company in the state of West Bengal. We have our head office at Paschim Midnapore (West Bengal). We are in the field of Civil Construction for almost 16 years. We have successfully completed and undertaken varieties of projects in West Bengal and other states, including Government Infrastructure Projects, Road and Building Projects, Industrial Projects, Residential Buildings and Commercial Complexes, Other Educational Institutions, Hostel and College Buildings and all types of Turnkey Projects. We have our in house dedicated team of Architectures, Expert Engineers for different segment Of Civil Engineering likewise Electrical, Plumbing, HVAC and other related services. We have committed team for QA/QC Engineers, who ensures quality of work at various stages of projects execution.</p>
            </div>
          </div>
          <div className={styles.imageGallery}>
            <div className={styles.galleryItem}>
              <img src="../../civilwork.jpg" alt="Civil Work" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="../../industrial.jpg" alt="Industrial Construction" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80" alt="Construction Site" className={styles.galleryImage}/>
            </div>
          </div>
        </div>

        <div className={styles.servicesSection}>
          <div className={styles.innerContainer}>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <HardHat />
                </div>
                <h3 className={styles.serviceTitle}>Infrastructure Projects</h3>
                <p className={styles.serviceContent}>
                  We specialize in government infrastructure projects, road and building projects, and industrial projects. Our expertise ensures quality execution and timely completion.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Government infrastructure projects</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Road and building construction</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Industrial project execution</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Building />
                </div>
                <h3 className={styles.serviceTitle}>Residential and Commercial</h3>
                <p className={styles.serviceContent}>
                  We undertake residential buildings, commercial complexes, educational institutions, hostel and college buildings with our dedicated team of architects and engineers.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Residential building construction</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Commercial complexes</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Educational institutions</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Wrench />
                </div>
                <h3 className={styles.serviceTitle}>Technical Services</h3>
                <p className={styles.serviceContent}>
                  Our in-house team includes expert engineers for Electrical, Plumbing, HVAC and other related services. We have committed QA/QC Engineers ensuring quality at every stage.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Electrical, Plumbing, and HVAC</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>QA/QC quality assurance</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Turnkey project solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
