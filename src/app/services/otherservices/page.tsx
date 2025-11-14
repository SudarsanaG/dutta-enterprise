"use client";
import Header from '../../components/Header';
import { Trash2, Wrench, Building2, Trees, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from '../staffing.module.css';

export default function otherservices() {
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
        <div className={styles.tagline}>Other Services</div>
      </div>
      <main className={styles.main}>
        <div ref={sectionRef} className={styles.introSection}>
          <div className={`${styles.headerGrid} ${hasAnimated ? styles.animated : ''}`}>
            <div className={styles.headerLeft}>
              <div className={`${styles.staffingLabel} ${hasAnimated ? styles.animated : ''}`}>SERVICES</div>
              <div className={`${styles.tagline1} ${hasAnimated ? styles.animated : ''}`}>
                <span className={styles.taglineBlue}>Additional </span>
                <span className={styles.taglineOrange}>Services</span>
              </div>
            </div>
            <div className={styles.headerRight}>
              <p className={`${styles.tagline2} ${hasAnimated ? styles.animated : ''}`}>We provide a comprehensive range of additional services to support your business operations. Our services include waste management, building maintenance, property management, and landscaping services to ensure your facilities are well-maintained and efficient.</p>
            </div>
          </div>
          <div className={styles.imageGallery}>
            <div className={styles.galleryItem}>
              <img src="../../OTHER SERVICES.jpg" alt="Other Services" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="../../os.jpeg" alt="Services" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80" alt="Facility Services" className={styles.galleryImage}/>
            </div>
          </div>
        </div>

        <div className={styles.servicesSection}>
          <div className={styles.innerContainer}>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Trash2 />
                </div>
                <h3 className={styles.serviceTitle}>Waste Management</h3>
                <p className={styles.serviceContent}>
                  Waste management or waste disposal includes the processes and actions required to manage waste from its inception to its final disposal.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Comprehensive waste collection</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Proper disposal methods</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Environmental compliance</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Wrench />
                </div>
                <h3 className={styles.serviceTitle}>Building Maintenance</h3>
                <p className={styles.serviceContent}>
                  Building Technical Services, Utilities Operations & maintenance (BMS, HVAC, Electrical, Mechanical, Plumbing, Carpentry, Fire systems & Building life safety includes all preventative, remedial, and upgrades works required for the upkeep and improvement of buildings and their components.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>BMS, HVAC, and electrical systems</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Preventative and remedial maintenance</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Fire systems and safety compliance</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Building2 />
                </div>
                <h3 className={styles.serviceTitle}>Property Management</h3>
                <p className={styles.serviceContent}>
                  Property management is the operation, control, maintenance, and oversight of real estate and physical property. This can include residential, commercial, and land real estate.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Residential and commercial properties</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Property maintenance and oversight</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Comprehensive property operations</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Trees />
                </div>
                <h3 className={styles.serviceTitle}>Landscaping</h3>
                <p className={styles.serviceContent}>
                  Landscaping, decorating, catering services (including vending machines and water coolers), cleaning services, pest control, waste management and car parking.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Landscape design and maintenance</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Vending machines and water coolers</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Car parking management</span>
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
