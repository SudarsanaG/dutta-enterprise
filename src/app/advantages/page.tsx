"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { ArrowLeftRight, Wrench, ShieldCheck, DollarSign, Monitor, Users } from 'lucide-react';
import styles from './advantage.module.css';

export default function Advantages() {
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
    const clients = [
        { id: 1, logo: '/bdo.jpeg', name: 'BDO' },
        { id: 2, logo: '/kec.webp', name: 'KEC' },
        { id: 3, logo: '/L&T c.webp', name: 'L&T Construction' },
        { id: 4, logo: '/L&T i.png', name: 'L&T Infrastructure' },
        { id: 5, logo: '/paschim.png', name: 'Paschim' },
        { id: 6, logo: '/policab.png', name: 'Policab' },
        { id: 7, logo: '/railway.png', name: 'Railway' },
        { id: 8, logo: '/wb agri.png', name: 'WB Agriculture' },
        { id: 9, logo: '/wb agro.jpeg', name: 'WB Agro' },
        { id: 10, logo: '/wb pwd.png', name: 'WB PWD' },
        { id: 11, logo: '/wb rural.jpg', name: 'WB Rural' },
        { id: 12, logo: '/client navo.jpg', name: 'Navo' },
    ];

    return (
        <div ref={sectionRef} className={styles.container}>
             <Header />
              <main className={styles.main}>
                <div className={`${styles.headerGrid} ${hasAnimated ? styles.animated : ''}`}>
                  <div className={styles.headerLeft}>
                    <div className={`${styles.whyUsLabel} ${hasAnimated ? styles.animated : ''}`}>WHY US</div>
                    <div className={`${styles.tagline} ${hasAnimated ? styles.animated : ''}`}>
                      <span className={styles.taglineBlue}>What Sets Us </span>
                      <span className={styles.taglineOrange}>Apart</span>
                    </div>
                  </div>
                  <div className={styles.headerRight}>
                    <Link href="/contact" className={styles.contactButton}>
                      CONTACT US
                      <span className={styles.buttonArrow}>↗</span>
                    </Link>
                  </div>
                </div>
        <div className={styles.cardsContainer}>
  
        <div className={`${styles.card} ${hasAnimated ? styles.animated : ''}`}>
          <div className={styles.cardHeader}>
            <ArrowLeftRight className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Comprehensive Approach</h2>
          </div>
          <p className={styles.cardContent}>
          The Comprehensive Approach focuses on creating cultures and mechanisms for communication, cooperation, and understanding both horizontally and vertically between nations and international organisations.
          </p>
        </div>

        <div className={`${styles.card} ${hasAnimated ? styles.animated : ''}`}>
          <div className={styles.cardHeader}>
            <Wrench className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Customized Solutions</h2>
          </div>
          <p className={styles.cardContent}>
          A &quot;customized solution&quot; at Management Systems is made up of the tools (one or more) chosen to best meet the needs of the client and how these tools are packaged and delivered both inside and to the client.
          </p>
        </div>

        <div className={`${styles.card} ${hasAnimated ? styles.animated : ''}`}>
          <div className={styles.cardHeader}>
            <ShieldCheck className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Experience & Expertise</h2>
          </div>
          <p className={styles.cardContent}>
          The mastery of a discipline&apos;s knowledge, abilities, and methodologies is referred to as content expertise. Graduate content expertise leads to students&apos; scholarly efforts producing new knowledge.
          </p>
        </div>

        <div className={`${styles.card} ${hasAnimated ? styles.animated : ''}`}>
          <div className={styles.cardHeader}>
            <DollarSign className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Cost Savings</h2>
          </div>
          <p className={styles.cardContent}>
          Savings are the advantages obtained from actions that lower an organization&apos;s overall outlay on assets, which have a direct bearing on its bottom line. Cost-saving measures can include increased productivity and negotiating lower supply purchase prices.
          </p>
        </div>

        <div className={`${styles.card} ${hasAnimated ? styles.animated : ''}`}>
          <div className={styles.cardHeader}>
            <Monitor className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Real-Time Monitoring </h2>
          </div>
          <p className={styles.cardContent}>
          Real-time monitoring is a method that lets you know what the queues and channels within a queue manager are doing right now. The data returned is current as of when the command was given.
          </p>
        </div>

        <div className={`${styles.card} ${hasAnimated ? styles.animated : ''}`}>
          <div className={styles.cardHeader}>
            <Users className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Access to Specialized Services</h2>
          </div>
          <p className={styles.cardContent}>
          It takes more than just installing ramps and enlarging doorways for wheelchair users to have access to services. All people with disabilities, including those who are blind, deaf, or have learning disabilities, should find it easier to use services.
          </p>
        </div>
      </div>
      
  </main>
  </div>

);
}
