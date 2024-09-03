"use client";
import Header from '../../components/Header';
import styles from '../industrial.module.css';

export default function industrial() {
  return (
    <div className={styles.container}>
      
      <Header />
      <div className={styles.container1}>
      
      <div className={styles.tagline1}>Sectors</div>

    </div>
  
      
      <main className={styles.main}>
      <div className={styles.heading}>Industrial</div>
      <div className ={styles.about}>
          <div>
          <div className={styles.subtagline1}> We provide our services to manufacturing companies.</div>
         <div className={styles.subtagline2}> These services include the management of physical assets, such as machinery and infrastructure, ensuring optimal performance through regular maintenance and monitoring. IFMS also oversees security systems, energy management, and waste management, promoting sustainability and cost-effectiveness. Additionally, it facilitates compliance with industry regulations by tracking safety protocols and environmental standards. By integrating these services, IFMS allows industries to focus on their core operations while improving overall productivity, reducing downtime, and minimizing operational risks.
              </div> 
              </div>  
      <img src="../../industrial.jpg" alt="edu1" className={styles.edu1}/>
                       
      </div>
      
        
       
            
            
            </main>
            </div>
  );
}        