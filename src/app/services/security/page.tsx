"use client";
import Header from '../../components/Header';
import styles from '../security.module.css';

export default function security() {
  return (
    <div className={styles.container}>
      
      <Header />
      <div className={styles.container1}>
      
        <div className={styles.tagline1}>Services</div>

      </div>
     
      <main className={styles.main}>
      <div className={styles.heading}>Private Security and Manned Guarding</div>
   
      <div className ={styles.about}>
          <div>
          <div className={styles.subtagline1}> Our range of integrated service offerings include private security and manned guarding.
            </div>
         <div className={styles.text}>
          <div className={styles.subtagline2}>Private Security and Manned Guarding are critical services within the broader security industry, providing protection for people, property, and assets. These services are essential for maintaining safety and order in various environments, from corporate offices and residential complexes to events and public spaces.Our private security and manned guarding services consist of providing security solutions including access control, surveillance, emergency services and patrols. 
          </div>
          <img src="../../dog.jpg" alt="private security" className={styles.security1}/>
         </div>
         </div>
         </div>
       
      

        
            <div className={styles.soft1}>
             
            <img src="../../private security.jpeg" alt="clean" className={styles.clean}/>
              <div>
              <div className={styles.bold}> 1.Access Control:</div>  
              <div className={styles.soft2}>We ensure that only authorized personnel are allowed to enter the facility and control the movement of people within the facility.
              </div>
              <div className={styles.bold}>2.Surveillance:</div>
              <div className={styles.soft3}>  We monitor the facility using CCTV and other surveillance systems and respond to any security breaches or incidents.
              </div>
             
              <div className={styles.bold}>3.Patrols: </div>
              <div className={styles.soft4}>We regularly patrol the facility to detect and deter any suspicious activity or potential security threats.
              </div>
              <div className={styles.bold}>4.Emergency response: </div>
              <div className={styles.soft5}>We provide services in case of emergencies including fire, medical emergencies, or criminal activity.
              </div>
              </div>
              
             </div>
            
          
           </main>
            </div>
  );
}        