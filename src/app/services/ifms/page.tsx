"use client";
import Header from '../../components/Header';
import styles from '../Ifms.module.css';

export default function Ifms() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SERVICES</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Integrated Facility Management Services</h2>
        <div className ={styles.about}>
          <p className={styles.subtagline1}>
          Our range of integrated service offerings include soft services such as housekeeping, sanitation, landscaping and gardening, hard services such as mechanical, electrical and plumbing services, solid, liquid and biomedical waste management, pest control, façade cleaning and effluent treatment and other services such as production support services, warehouse management.
         </p>
            
              <img src="../../ifms.jpg" alt="ifms" className={styles.ifms}/>
            </div>
            <h2 className={styles.softskills}>Soft Services</h2>
            <div className={styles.soft1}>
              <img src="../../clean.png" alt="clean" className={styles.clean}/>
              <div className={styles.softwork}>
              <div className={styles.soft2}>
              <div className={styles.bold}>Housekeeping and cleaning services:</div>  We offer a wide range of commercial and industrial cleaning services throughout India with specific focus on quality, efficiency, and sustainable service delivery models.
              </div>
              <div className={styles.soft3}>
              <div className={styles.bold}>Landscaping and gardening:</div>  We are responsible for the upkeep of landscapes and gardens at our customers’ locations through, trimming of grass, setting up of new gardens and general maintenance.
              </div>
              <div className={styles.soft4}>
              <div className={styles.bold}>Disinfecting and sanitizing services: </div> We thoroughly clean and disinfect the premises, including surfaces, equipment, and common areas. This typically involves the use of specialized cleaning agents, disinfectants, and equipment to remove dirt, grime, and bacteria.
              </div>
              </div>
            </div>



            <h2 className={styles.hardskills}>Hard Services</h2>
            <div className={styles.hard1}>
              
              <img src="../../pest.webp" alt="pest" className={styles.clean}/>

              <div className={styles.hardwork}>
              <div className={styles.hard2}>
              <div className={styles.bold}>Pest Control:</div> We offer pest control services to commercial establishments using government authorized treatments and solutions that follow modern practices in the industry and are in compliance with the environmental safety protocols and environmental, health and safety norms.
              </div>
              <div className={styles.hard3}>
              <div className={styles.bold}> Solid, Liquid, and Biomedical Waste Management:</div>  Our waste management includes the process collection of solid and biomedical waste from various sources, such as offices, restrooms, kitchens and public areas, transportation to designated disposal sites, treatment to reduce its environmental impact and then disposal or discharge depending on the nature of the waste. We also offered effluent treatment which comprises designing, building and commissioning of common effluent treatment plants, as well as their upgrade and expansion. Through this, we offer comprehensive liquid waste management solutions including supervised engineering and construction of the plant, and ancillary services such as security and pest control on the plant premises. In addition, we are required to establish effective quality control mechanisms such as regular sampling and testing with accredited laboratories at regular intervals. We also offer operation and maintenance services for these plants.
              </div>
              <div className={styles.hard4}>
              <div className={styles.bold}>Facade cleaning: </div> We offer cleaning and maintenance services for the external glass facades of buildings used by our customers.
              </div>
              </div>
            </div>

              
             
            
           
            </main>
            </div>
        
  );
}
