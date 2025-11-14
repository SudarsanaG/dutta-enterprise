"use client";
import Header from '../../components/Header';
import { Shield, Eye, Search, AlertCircle, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from '../staffing.module.css';

export default function security() {
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
        <div className={styles.tagline}>Private Security and Manned Guarding</div>
      </div>
      <main className={styles.main}>
        <div ref={sectionRef} className={styles.introSection}>
          <div className={`${styles.headerGrid} ${hasAnimated ? styles.animated : ''}`}>
            <div className={styles.headerLeft}>
              <div className={`${styles.staffingLabel} ${hasAnimated ? styles.animated : ''}`}>SECURITY</div>
              <div className={`${styles.tagline1} ${hasAnimated ? styles.animated : ''}`}>
                <span className={styles.taglineBlue}>Comprehensive </span>
                <span className={styles.taglineOrange}>Security Solutions</span>
              </div>
            </div>
            <div className={styles.headerRight}>
              <p className={`${styles.tagline2} ${hasAnimated ? styles.animated : ''}`}>Private Security and Manned Guarding are critical services within the broader security industry, providing protection for people, property, and assets. These services are essential for maintaining safety and order in various environments, from corporate offices and residential complexes to events and public spaces. Our private security and manned guarding services consist of providing security solutions including access control, surveillance, emergency services and patrols.</p>
            </div>
          </div>
          <div className={styles.imageGallery} style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '80%', margin: '3rem auto 0' }}>
            <div className={styles.galleryItem}>
              <img src="../../dog.jpg" alt="Security Services" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="../../private security.jpeg" alt="Private Security" className={styles.galleryImage}/>
            </div>
          </div>
        </div>

        <div className={styles.servicesSection}>
          <div className={styles.innerContainer}>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Shield />
                </div>
                <h3 className={styles.serviceTitle}>Access Control</h3>
                <p className={styles.serviceContent}>
                  We ensure that only authorized personnel are allowed to enter the facility and control the movement of people within the facility.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Authorized personnel verification</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Movement control within facility</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Secure entry management</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Eye />
                </div>
                <h3 className={styles.serviceTitle}>Surveillance</h3>
                <p className={styles.serviceContent}>
                  We monitor the facility using CCTV and other surveillance systems and respond to any security breaches or incidents.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>CCTV monitoring systems</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>24/7 surveillance coverage</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Rapid incident response</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Search />
                </div>
                <h3 className={styles.serviceTitle}>Patrols</h3>
                <p className={styles.serviceContent}>
                  We regularly patrol the facility to detect and deter any suspicious activity or potential security threats.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Regular facility patrols</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Threat detection and prevention</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Proactive security measures</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <AlertCircle />
                </div>
                <h3 className={styles.serviceTitle}>Emergency Response</h3>
                <p className={styles.serviceContent}>
                  We provide services in case of emergencies including fire, medical emergencies, or criminal activity.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Fire emergency response</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Medical emergency assistance</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Criminal activity response</span>
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
