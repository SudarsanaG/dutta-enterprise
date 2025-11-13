// src/app/about/detailed/page.tsx
"use client";
import Header from '../../components/Header';
import { ArrowRight } from 'lucide-react';
import styles from '../DetailedAboutPage.module.css';
import advantageStyles from '../../advantages/advantage.module.css';

export default function DetailedAboutPage() {
  return (
    <div className={styles.container}>
      
      <Header />
      <div className={styles.container1}>
      
        <div className={styles.tagline1}>About Us</div>

      </div>
      <main className={styles.main}>
        
        <div className ={styles.about}>
          <div> <div className={styles.subtagline2}>Get To Know Us Better!</div>
       
          <p className={styles.subtagline1}>
          Our range of service offerings include soft services such as housekeeping, sanitation, landscaping and gardening, hard services such as mechanical, electrical and plumbing services, solid, liquid and biomedical waste management, pest control and façade cleaning management services. We also provide staffing solutions and payroll management to our customers, as well as private security and manned guarding services and catering services.
                 
          The wide range of our integrated facility management services segment allows us to provide a bundled solution of services to each customer, tailored to its specific needs and requirements, making us a one-stop integrated solution for customers.
            </p>
            </div>
            
              <img src="../../about.jpg" alt="about" className={styles.about1}/>
            </div>

          <div className={advantageStyles.container} style={{ background: 'white', minHeight: 'auto' }}>
            <div className={advantageStyles.main}>
              <div className={advantageStyles.tagline}>
                <span className={advantageStyles.taglineRed}>Why</span> <span className={advantageStyles.taglineBlack}>Choose Us?</span>
              </div>
              <div className={advantageStyles.cardsContainer}>
                <div className={advantageStyles.card}>
                  <div className={advantageStyles.cardHeader}>
                    <ArrowRight className={advantageStyles.arrowIcon} />
                    <h2 className={advantageStyles.cardTitle}>Comprehensive Approach</h2>
                  </div>
                  <p className={advantageStyles.cardContent}>
                    The Comprehensive Approach focuses on creating cultures and mechanisms for communication, cooperation, and understanding both horizontally and vertically between nations and international organisations.
                  </p>
                </div>

                <div className={advantageStyles.card}>
                  <div className={advantageStyles.cardHeader}>
                    <ArrowRight className={advantageStyles.arrowIcon} />
                    <h2 className={advantageStyles.cardTitle}>Customized Solutions</h2>
                  </div>
                  <p className={advantageStyles.cardContent}>
                    A "customized solution" at Management Systems is made up of the tools (one or more) chosen to best meet the needs of the client and how these tools are packaged and delivered both inside and to the client.
                  </p>
                </div>

                <div className={advantageStyles.card}>
                  <div className={advantageStyles.cardHeader}>
                    <ArrowRight className={advantageStyles.arrowIcon} />
                    <h2 className={advantageStyles.cardTitle}>Experience & Expertise</h2>
                  </div>
                  <p className={advantageStyles.cardContent}>
                    The mastery of a discipline's knowledge, abilities, and methodologies is referred to as content expertise. Graduate content expertise leads to students' scholarly efforts producing new knowledge.
                  </p>
                </div>

                <div className={advantageStyles.card}>
                  <div className={advantageStyles.cardHeader}>
                    <ArrowRight className={advantageStyles.arrowIcon} />
                    <h2 className={advantageStyles.cardTitle}>Cost Savings</h2>
                  </div>
                  <p className={advantageStyles.cardContent}>
                    Savings are the advantages obtained from actions that lower an organization's overall outlay on assets, which have a direct bearing on its bottom line. Cost-saving measures can include increased productivity and negotiating lower supply purchase prices.
                  </p>
                </div>

                <div className={advantageStyles.card}>
                  <div className={advantageStyles.cardHeader}>
                    <ArrowRight className={advantageStyles.arrowIcon} />
                    <h2 className={advantageStyles.cardTitle}>Real-Time Monitoring & Reporting</h2>
                  </div>
                  <p className={advantageStyles.cardContent}>
                    Real-time monitoring is a method that lets you know what the queues and channels within a queue manager are doing right now. The data returned is current as of when the command was given.
                  </p>
                </div>

                <div className={advantageStyles.card}>
                  <div className={advantageStyles.cardHeader}>
                    <ArrowRight className={advantageStyles.arrowIcon} />
                    <h2 className={advantageStyles.cardTitle}>Access to Specialized Services</h2>
                  </div>
                  <p className={advantageStyles.cardContent}>
                    It takes more than just installing ramps and enlarging doorways for wheelchair users to have access to services. All people with disabilities, including those who are blind, deaf, or have learning disabilities, should find it easier to use services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.visionMissionSection}>
            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <div className={styles.cardContentContainer}>
                  <img src="../../logo1.png" alt="logo1" className={styles.logo1}/>
                  <h2 className={styles.cardTitle}>Vision</h2>
                </div>
                <p className={styles.cardContent}>
                  To emerge as the most preferred partner for our valuable customers to secure, maintain, and manage their valuable assets by offering a range of customised solutions through world-class technology and quality-driven and convenient infrastructure management services.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardContentContainer}>
                  <img src="../../logo2.png" alt="logo2" className={styles.logo2}/>
                  <h2 className={styles.cardTitle}>Mission</h2>
                </div>
                <p className={styles.cardContent}>
                  Forming new alliances in order to take advantage of emerging technologies. Make full use of the company&apos;s resources to come up with innovative new products and services. Utilise the already established clientele as a springboard for selling additional services to existing customers
                </p>
              </div>
            </div>
          </div>

          
          <div className={styles.certificates}>
          Certificates
          </div>
          <div className={styles.certificates1}>
          <img src="../../certificate1.jpg" alt="certificate1" className={styles.certificates2}/>
          <img src="../../certificate2.jpg" alt="certificate2" className={styles.certificates2}/>
          <img src="../../certificate3.jpg" alt="certificate3" className={styles.certificates2}/>
          </div>
          

        
    </main>
    </div>

  );
}
