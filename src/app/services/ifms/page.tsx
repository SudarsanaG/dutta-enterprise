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
          
            <h2 className={styles.softskills}>Soft Services</h2>
            <div className={styles.soft1}>
             
              <div>
              
              <div className={styles.bold}> 1.Housekeeping and cleaning services:</div>  
              <div className={styles.soft2}>We offer a wide range of commercial and industrial cleaning services throughout India with specific focus on quality, efficiency, and sustainable service delivery models.
              </div>
              
              <div className={styles.bold}>2.Landscaping and gardening:</div>
              <div className={styles.soft3}>  We are responsible for the upkeep of landscapes and gardens at our customers’ locations through, trimming of grass, setting up of new gardens and general maintenance.
              </div>
             
              <div className={styles.bold}>3.Disinfecting and sanitizing services: </div>
              <div className={styles.soft4}> We thoroughly clean and disinfect the premises, including surfaces, equipment, and common areas. This typically involves the use of specialized cleaning agents, disinfectants, and equipment to remove dirt, grime, and bacteria.
              </div>
              </div>
             
              <img src="../../clean.jpg" alt="clean" className={styles.clean}/>
             
            </div>



            <h2 className={styles.hardskills}>Hard Services</h2>
            <div className={styles.hard1}>
              
             

              <div className={styles.hardwork}>
             
              <div className={styles.bold}>1.Pest Control:</div> 
              <div className={styles.hard2}>We offer pest control services to commercial establishments using government authorized treatments and solutions that follow modern practices in the industry and are in compliance with the environmental safety protocols and environmental, health and safety norms.
              </div>
              
              <div className={styles.bold}> 2.Solid, Liquid, and Biomedical Waste Management:</div> 
              <div className={styles.hard3}> Our waste management includes the process collection of solid and biomedical waste from various sources, such as offices, restrooms, kitchens and public areas, transportation to designated disposal sites, treatment to reduce its environmental impact and then disposal or discharge depending on the nature of the waste. We also offered effluent treatment which comprises designing, building and commissioning of common effluent treatment plants, as well as their upgrade and expansion. Through this, we offer comprehensive liquid waste management solutions including supervised engineering and construction of the plant, and ancillary services such as security and pest control on the plant premises. In addition, we are required to establish effective quality control mechanisms such as regular sampling and testing with accredited laboratories at regular intervals. We also offer operation and maintenance services for these plants.
              </div>
              
              <div className={styles.bold}>3.Facade cleaning: </div> 
              <div className={styles.hard4}>We offer cleaning and maintenance services for the external glass facades of buildings used by our customers.
              </div>
              </div>
              <img src="../../pest.webp" alt="pest" className={styles.clean}/>
            </div>

              
             
            
           
            </main>
            
            </div>
        
  );
}
