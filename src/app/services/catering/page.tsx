"use client";
import Header from '../../components/Header';
import styles from '../catering.module.css';

export default function catering() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SERVICES</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Catering</h2>
      
            
     
                  <div className={styles.subtagline1}>
         
          <div className={styles.text1}>DUTTA ENTERPRISE is a private corporate catering, banqueting, and events organization with a vision to provide heart-warming food combined with premium service. We provide delicious, inspiring, innovative food with cutting edge, spectacular presentation which enables us to be at the forefront of the industry.
         </div>
        
          <img src="../../catering2.jpg" alt="catering1" className={styles.catering1}/>
</div>

<div className={styles.text}> 
<img src="../../catering1.jpg" alt="catering1" className={styles.catering1}/>
  Our success is best attributed to our work style and relation with clients. Our ability and approach is one of partnership. We listen to clients' specific needs and respect their suggestions, helping us in the constant drive towards progress and expansion. This allows for a fully entrepreneurial and innovative style and enables both parties to deliver and exceed overall expectations. 
As the owner of Dutta Enterprise, I aim at developing the company into a world-class hospitality organization. We have the infrastructure and specialized knowledge to ensure excellence at both small and large catering and banqueting projects. Our professionalism, enthusiasm, and attention to details, prompt catering and banqueting services. not to mention our competitive prices will ensure that our clients come back time and again. The level of professionalism and experience provided means you can relax knowing you are in safe hands with Dutta Enterprise hospitality.

            </div>

            
            
            </main>
            </div>
  );
}        