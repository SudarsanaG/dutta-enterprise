"use client";
import Header from '../../components/Header';
import { UtensilsCrossed, Users, Award, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from '../staffing.module.css';

export default function Catering() {
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
        <div className={styles.tagline}>Catering</div>
      </div>
      <main className={styles.main}>
        <div ref={sectionRef} className={styles.introSection}>
          <div className={`${styles.headerGrid} ${hasAnimated ? styles.animated : ''}`}>
            <div className={styles.headerLeft}>
              <div className={`${styles.staffingLabel} ${hasAnimated ? styles.animated : ''}`}>CATERING</div>
              <div className={`${styles.tagline1} ${hasAnimated ? styles.animated : ''}`}>
                <span className={styles.taglineBlue}>Premium </span>
                <span className={styles.taglineOrange}>Catering Services</span>
              </div>
            </div>
            <div className={styles.headerRight}>
              <p className={`${styles.tagline2} ${hasAnimated ? styles.animated : ''}`}>Dutta Enterprise is a private corporate catering, banqueting, and events organization with a vision to provide heart-warming food combined with premium service. We provide delicious, inspiring, innovative food with cutting edge, spectacular presentation which enables us to be at the forefront of the industry. Our success is best attributed to our work style and relation with clients. Our ability and approach is one of partnership. We listen to clients&apos; specific needs and respect their suggestions, helping us in the constant drive towards progress and expansion.</p>
            </div>
          </div>
          <div className={styles.imageGallery}>
            <div className={styles.galleryItem}>
              <img src="../../catering1.jpg" alt="Catering Services" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="../../catering2.jpg" alt="Catering" className={styles.galleryImage}/>
            </div>
            <div className={styles.galleryItem}>
              <img src="../../CATERING.jpg" alt="Food Service" className={styles.galleryImage}/>
            </div>
          </div>
        </div>

        <div className={styles.servicesSection}>
          <div className={styles.innerContainer}>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <UtensilsCrossed />
                </div>
                <h3 className={styles.serviceTitle}>Corporate Catering</h3>
                <p className={styles.serviceContent}>
                  We provide delicious, inspiring, innovative food with cutting edge, spectacular presentation. Our corporate catering services are designed to meet the specific needs of businesses and organizations.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Innovative and delicious food</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Spectacular presentation</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Customized menu options</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Users />
                </div>
                <h3 className={styles.serviceTitle}>Banqueting and Events</h3>
                <p className={styles.serviceContent}>
                  We specialize in banqueting and events services, providing heart-warming food combined with premium service. Our team ensures excellence at both small and large catering projects.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Small and large event catering</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Premium service delivery</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Professional event management</span>
                  </div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Award />
                </div>
                <h3 className={styles.serviceTitle}>World-Class Hospitality</h3>
                <p className={styles.serviceContent}>
                  We have the infrastructure and specialized knowledge to ensure excellence. Our professionalism, enthusiasm, and attention to details ensure prompt catering and banqueting services. Our competitive prices and level of professionalism mean you can relax knowing you are in safe hands.
                </p>
                <div className={styles.serviceFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Professional and experienced team</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Attention to detail</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Competitive pricing</span>
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
