"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from './advantage.module.css';
export default function Advantages() {
    return (
        <div className={styles.container}>
             <Header />
              <main className={styles.main}>
                <div className={styles.tagline}>Why Choose Us?</div>
        <div className={styles.cardsContainer}>
  
        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
          <h2 className={styles.cardTitle}>Comprehensive Approach</h2>
       
          </div>
          <p className={styles.cardContent}>
          The Comprehensive Approach focuses on creating cultures and mechanisms for communication, cooperation, and understanding both horizontally and vertically between nations and international organisations.
          </p>
        
          
        </div>

        {/* Mission Card */}
        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
          <h2 className={styles.cardTitle}>Customized Solutions</h2>
       
          </div>
          <p className={styles.cardContent}>
          A “customized solution” at Management Systems is made up of the tools (one or more) chosen to best meet the needs of the client and how these tools are packaged and delivered both inside and to the client.
       </p>
       
         
        </div>

        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
          <h2 className={styles.cardTitle}>Experience & Expertise</h2>
        
          </div>
          <p className={styles.cardContent}>
          The mastery of a discipline’s knowledge, abilities, and methodologies is referred to as content expertise. Graduate content expertise leads to students’ scholarly efforts producing new knowledge.
       </p>
       
         
        </div>

        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
          <h2 className={styles.cardTitle}>Cost Savings</h2>
         
          </div>
          <p className={styles.cardContent}>
          Savings are the advantages obtained from actions that lower an organization’s overall outlay on assets, which have a direct bearing on its bottom line. Cost-saving measures can include increased productivity and negotiating lower supply purchase prices.
       </p>
       
         
        </div>

        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
          <h2 className={styles.cardTitle}>Real-Time Monitoring & Reporting</h2>
        
          </div>
          <p className={styles.cardContent}>
          Real-time monitoring is a method that lets you know what the queues and channels within a queue manager are doing right now. The data returned is current as of when the command was given.
       </p>
       
         
        </div>

        <div className={styles.card}>
          <div className={styles.cardContentContainer}>
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
