"use client";
import Header from '../../components/Header';
import { Users, FileText, DollarSign, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from '../staffing.module.css';

export default function Staffing() {
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
        <div className={styles.tagline}>Staffing Solutions and Payroll Management</div>
      </div>
      <main className={styles.main}>
        <div ref={sectionRef} className={styles.introSection}>
          <div className={`${styles.headerGrid} ${hasAnimated ? styles.animated : ''}`}>
            <div className={styles.headerLeft}>
              <div className={`${styles.staffingLabel} ${hasAnimated ? styles.animated : ''}`}>STAFFING</div>
              <div className={`${styles.tagline1} ${hasAnimated ? styles.animated : ''}`}>
                <span className={styles.taglineBlue}>Comprehensive </span>
                <span className={styles.taglineOrange}>Solutions</span>
              </div>
            </div>
            <div className={styles.headerRight}>
              <p className={`${styles.tagline2} ${hasAnimated ? styles.animated : ''}`}>Staffing solutions and payroll management services generally comprise recruitment, payroll, and human resource services. We provide skilled, semi-skilled and unskilled manpower to our customers as per their requirements, ensuring all staff are properly trained and equipped to carry out their duties.</p>
            </div>
          </div>
          <div className={styles.imageGallery}>
            <div className={styles.galleryItem}>
              <img src="../../payroll.jpeg" alt="Payroll Management" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="../../payroll1.jpg" alt="Payroll Management" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="../../payroll2.jpg" alt="Payroll Management" className={styles.galleryImage}/>
            </div>
          </div>
        </div>

        <div className={styles.servicesSection}>
          <div className={styles.innerContainer}>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Users />
                </div>
                <h3 className={styles.serviceTitle}>Staffing Solutions</h3>
                <p className={styles.serviceContent}>
                  Our comprehensive staffing solutions cover the entire employee lifecycle, from initial recruitment and onboarding to ongoing management and development. We work closely with our clients to understand their specific requirements, organizational culture, and business objectives to provide the most suitable candidates.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Thorough screening and background verification</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Skill assessment and interviews</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Performance monitoring and development</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <DollarSign />
                </div>
                <h3 className={styles.serviceTitle}>Payroll Management</h3>
                <p className={styles.serviceContent}>
                  Our payroll management services are designed to streamline the compensation process and ensure accuracy and compliance. We handle all aspects of payroll processing, including salary calculations, tax deductions, provident fund contributions, and statutory compliance.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Accurate salary calculations</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Tax deductions and compliance</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Provident fund management</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <FileText />
                </div>
                <h3 className={styles.serviceTitle}>Human Resource Services</h3>
                <p className={styles.serviceContent}>
                  We provide comprehensive human resource services, including employee relations, benefits administration, leave management, and policy implementation. Our HR services help organizations maintain a positive work environment and ensure compliance with labor laws.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Employee relations management</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Benefits administration</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Leave and policy management</span>
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