"use client";
import Header from '../../components/Header';
import styles from '../Ifms.module.css';


export default function Ifms() {
  return (
    <div className={styles.container}>
      
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline1}>Integrated Facility Management Services</div>
      </div>
      <main className={styles.main}>
      
        <div className ={styles.about}>
          <div>
          <div className={styles.subtagline1}> Our range of integrated service offerings include soft services as well as hard services.</div>
          <div className={styles.subtagline2}>
          It include soft services such as housekeeping, sanitation, landscaping and gardening, hard services such as mechanical, electrical and plumbing services, solid, liquid and biomedical waste management, pest control, façade cleaning and effluent treatment and other services such as production support services, warehouse management.
         </div>
         </div>
            
              <img src="../../ifms.jpg" alt="ifms" className={styles.ifms}/>
            </div>
          
            <div className={styles.softServicesSection}>
              <div className={styles.innerContainer}>
                <h2 className={styles.softskills}>Soft Services</h2>
                <div className={styles.cardsContainer}>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardTitle}>1. Housekeeping and cleaning services</div>
                    <div className={styles.cardContent}>We offer a wide range of commercial and industrial cleaning services throughout India with specific focus on quality, efficiency, and sustainable service delivery models.</div>
                  </div>
                  
                  <div className={styles.serviceCard}>
                    <div className={styles.cardTitle}>2. Landscaping and gardening</div>
                    <div className={styles.cardContent}>We are responsible for the upkeep of landscapes and gardens at our customers' locations through, trimming of grass, setting up of new gardens and general maintenance.</div>
                  </div>
                 
                  <div className={styles.serviceCard}>
                    <div className={styles.cardTitle}>3. Disinfecting and sanitizing services</div>
                    <div className={styles.cardContent}>We thoroughly clean and disinfect the premises, including surfaces, equipment, and common areas. This typically involves the use of specialized cleaning agents, disinfectants, and equipment to remove dirt, grime, and bacteria.</div>
                  </div>
                </div>
              </div>
            </div>



            <div className={styles.hardServicesSection}>
              <div className={styles.innerContainerHard}>
                <h2 className={styles.hardskills}>Hard Services</h2>
                <div className={styles.cardsContainer}>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardTitle}>1. Pest Control</div>
                    <div className={styles.cardContent}>We offer pest control services to commercial establishments using government authorized treatments and solutions that follow modern practices in the industry and are in compliance with the environmental safety protocols and environmental, health and safety norms.</div>
                  </div>
                  
                  <div className={styles.serviceCard}>
                    <div className={styles.cardTitle}>2. Solid, Liquid, and Biomedical Waste Management</div>
                    <div className={styles.cardContent}>We provide comprehensive waste management services including collection, transportation, treatment, and disposal of solid, liquid, and biomedical waste from various sources. Our services also include designing, building, and operating effluent treatment plants, along with quality control testing and maintenance services.</div>
                  </div>
                  
                  <div className={styles.serviceCard}>
                    <div className={styles.cardTitle}>3. Facade cleaning</div>
                    <div className={styles.cardContent}>We offer cleaning and maintenance services for the external glass facades of buildings used by our customers.</div>
                  </div>
                </div>
              </div>
            </div>

              
             
            
           
            </main>
            
            </div>
        
  );
}
