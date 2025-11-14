// src/app/about/detailed/page.tsx
"use client";
import Header from '../../components/Header';
import { ArrowRight } from 'lucide-react';
import styles from '../DetailedAboutPage.module.css';

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
  Our range of service offerings include soft services such as housekeeping, sanitation, landscaping &amp; gardening, hard services such as mechanical, electrical &amp; plumbing services, solid, liquid &amp; biomedical waste management, pest control &amp; fa&ccedil;ade cleaning management services. We also provide staffing solutions &amp; payroll management to our customers, as well as private security &amp; manned guarding services &amp; catering services.
  The wide range of our integrated facility management services segment allows us to provide a bundled solution of services to each customer, tailored to its specific needs &amp; requirements, making us a one-stop integrated solution for customers.
</p>

            </div>
            
              <img src="../../about.jpg" alt="about" className={styles.about1}/>
            </div>

          <div className={styles.whyChooseUsSection}>
            <div className={styles.whyChooseUsContainer}>
              <div className={styles.whyChooseUsTitle}>
                <span className={styles.titleBlue}>Why</span> <span className={styles.titleBlack}>Choose Us?</span>
              </div>
              <div className={styles.whyChooseUsCards}>
                <div className={styles.whyChooseUsCard}>
                  <div className={styles.whyChooseUsCardHeader}>
                    <ArrowRight className={styles.whyChooseUsArrow} />
                    <h2 className={styles.whyChooseUsCardTitle}>Comprehensive Approach</h2>
                  </div>
                  <p className={styles.whyChooseUsCardContent}>
                    The Comprehensive Approach focuses on creating cultures and mechanisms for communication, cooperation, and understanding both horizontally and vertically between nations and international organisations.
                  </p>
                </div>

                <div className={styles.whyChooseUsCard}>
                  <div className={styles.whyChooseUsCardHeader}>
                    <ArrowRight className={styles.whyChooseUsArrow} />
                    <h2 className={styles.whyChooseUsCardTitle}>Customized Solutions</h2>
                  </div>
                  <p className={styles.whyChooseUsCardContent}>
                    A &quot;customized solution&quot; at Management Systems is made up of the tools (one or more) chosen to best meet the needs of the client and how these tools are packaged and delivered both inside and to the client.
                  </p>
                </div>

                <div className={styles.whyChooseUsCard}>
                  <div className={styles.whyChooseUsCardHeader}>
                    <ArrowRight className={styles.whyChooseUsArrow} />
                    <h2 className={styles.whyChooseUsCardTitle}>Experience &amp; Expertise</h2>
                  </div>
                  <p className={styles.whyChooseUsCardContent}>
                    The mastery of a discipline&apos;s knowledge, abilities, and methodologies is referred to as content expertise. Graduate content expertise leads to students&apos; scholarly efforts producing new knowledge.
                  </p>
                </div>

                <div className={styles.whyChooseUsCard}>
                  <div className={styles.whyChooseUsCardHeader}>
                    <ArrowRight className={styles.whyChooseUsArrow} />
                    <h2 className={styles.whyChooseUsCardTitle}>Cost Savings</h2>
                  </div>
                  <p className={styles.whyChooseUsCardContent}>
                    Savings are the advantages obtained from actions that lower an organization&apos;s overall outlay on assets, which have a direct bearing on its bottom line. Cost-saving measures can include increased productivity and negotiating lower supply purchase prices.
                  </p>
                </div>

                <div className={styles.whyChooseUsCard}>
                  <div className={styles.whyChooseUsCardHeader}>
                    <ArrowRight className={styles.whyChooseUsArrow} />
                    <h2 className={styles.whyChooseUsCardTitle}>Real-Time Monitoring &amp; Reporting</h2>
                  </div>
                  <p className={styles.whyChooseUsCardContent}>
                    Real-time monitoring is a method that lets you know what the queues and channels within a queue manager are doing right now. The data returned is current as of when the command was given.
                  </p>
                </div>

                <div className={styles.whyChooseUsCard}>
                  <div className={styles.whyChooseUsCardHeader}>
                    <ArrowRight className={styles.whyChooseUsArrow} />
                    <h2 className={styles.whyChooseUsCardTitle}>Access to Specialized Services</h2>
                  </div>
                  <p className={styles.whyChooseUsCardContent}>
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
                  Forming new alliances in order to take advantage of emerging technologies. Make full use of the company&apos;s resources to come up with innovative new products and services. Utilise the already established clientele as a springboard for selling additional services to existing customers.
                </p>
              </div>
            </div>
          </div>

          
          <div className={styles.certificatesSection}>
            <div className={styles.certificates}>
              Certificates
            </div>
            <div className={styles.certificates1}>
              <img src="../../certificate1.jpg" alt="certificate1" className={styles.certificates2}/>
              <img src="../../certificate2.jpg" alt="certificate2" className={styles.certificates2}/>
              <img src="../../certificate3.jpg" alt="certificate3" className={styles.certificates2}/>
            </div>
          </div>
          

        
    </main>
    </div>

  );
}
