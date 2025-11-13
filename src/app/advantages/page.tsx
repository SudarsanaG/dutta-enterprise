"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { ArrowRight } from 'lucide-react';
import styles from './advantage.module.css';

export default function Advantages() {
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
        <div className={styles.container}>
             <Header />
              <main className={styles.main}>
                <div className={styles.tagline}>
                  <span className={styles.taglineRed}>Why</span> <span className={styles.taglineBlack}>Choose Us?</span>
                </div>
        <div className={styles.cardsContainer}>
  
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ArrowRight className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Comprehensive Approach</h2>
          </div>
          <p className={styles.cardContent}>
          The Comprehensive Approach focuses on creating cultures and mechanisms for communication, cooperation, and understanding both horizontally and vertically between nations and international organisations.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ArrowRight className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Customized Solutions</h2>
          </div>
          <p className={styles.cardContent}>
          A {'"'}customized solution{'"'} at Management Systems is made up of the tools (one or more) chosen to best meet the needs of the client and how these tools are packaged and delivered both inside and to the client.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ArrowRight className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Experience & Expertise</h2>
          </div>
          <p className={styles.cardContent}>
          The mastery of a discipline{'\''}s knowledge, abilities, and methodologies is referred to as content expertise. Graduate content expertise leads to students{'\''} scholarly efforts producing new knowledge.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ArrowRight className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Cost Savings</h2>
          </div>
          <p className={styles.cardContent}>
          Savings are the advantages obtained from actions that lower an organization{'\''}s overall outlay on assets, which have a direct bearing on its bottom line. Cost-saving measures can include increased productivity and negotiating lower supply purchase prices.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ArrowRight className={styles.arrowIcon} />
            <h2 className={styles.cardTitle}>Real-Time Monitoring & Reporting</h2>
          </div>
          <p className={styles.cardContent}>
          Real-time monitoring is a method that lets you know what the queues and channels within a queue manager are doing right now. The data returned is current as of when the command was given.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ArrowRight className={styles.arrowIcon} />
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
