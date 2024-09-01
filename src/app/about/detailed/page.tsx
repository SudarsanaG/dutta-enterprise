// src/app/about/detailed/page.tsx
"use client";
import Header from '../../components/Header';
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
          Our range of service offerings include soft services such as housekeeping, sanitation, landscaping and gardening, hard services such as mechanical, electrical and plumbing services, solid, liquid and biomedical waste management, pest control and façade cleaning management services. We also provide staffing solutions and payroll management to our customers, as well as private security and manned guarding services and catering services.
                 
          The wide range of our integrated facility management services segment allows us to provide a bundled solution of services to each customer, tailored to its specific needs and requirements, making us a one-stop integrated solution for customers.
            </p>
            </div>
            
              <img src="../../about.jpg" alt="about" className={styles.about1}/>
            </div>

          <div className={styles.cardsContainer}>
          {/* Vision Card */}
          <div className={styles.card}>
            <div className={styles.cardContentContainer}>
            <h2 className={styles.cardTitle}>Vision</h2>
            <img src="../../logo1.png" alt="logo1" className={styles.logo1}/>
            </div>
            <p className={styles.cardContent}>
            To emerge as the most preferred partner for our valuable customers to secure, maintain, and manage their valuable assets by offering a range of customised solutions through world-class technology and quality-driven and convenient infrastructure management services.
            </p>
          
            
          </div>

          {/* Mission Card */}
          <div className={styles.card}>
            <div className={styles.cardContentContainer}>
            <h2 className={styles.cardTitle}>Mission</h2>
            <img src="../../logo2.png" alt="logo2" className={styles.logo2}/>
            </div>
            <p className={styles.cardContent}>
            Forming new alliances in order to take advantage of emerging technologies. Make full use of the company's resources to come up with innovative new products and services. Utilise the already established clientele as a springboard for selling additional services to existing customers
         </p>
         
           
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
