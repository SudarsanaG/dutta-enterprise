"use client";
import Header from '../../components/Header';
import styles from '../catering.module.css';

export default function catering() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container1}>
        <div className={styles.tagline1}>Catering</div>
      </div>
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline1}>Premium Catering Services</h2>
            <p className={styles.subtagline2}>
              Dutta Enterprise is a private corporate catering, banqueting, and events organization with a vision to provide heart-warming food combined with premium service. We provide delicious, inspiring, innovative food with cutting edge, spectacular presentation which enables us to be at the forefront of the industry.
            </p>
            <p className={styles.subtagline2}>
              Our success is best attributed to our work style and relation with clients. Our ability and approach is one of partnership. We listen to clients&apos; specific needs and respect their suggestions, helping us in the constant drive towards progress and expansion. This allows for a fully entrepreneurial and innovative style and enables both parties to deliver and exceed overall expectations.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../catering2.jpg" alt="catering" className={styles.catering2}/>
          </div>
        </div>

        <div className={styles.text}>
          <div className={styles.introContent}>
            <h2 className={styles.subtagline3}>World-Class Hospitality</h2>
            <p className={styles.subtagline2}>
              As the owner of Dutta Enterprise, I aim at developing the company into a world-class hospitality organization. We have the infrastructure and specialized knowledge to ensure excellence at both small and large catering and banqueting projects. Our professionalism, enthusiasm, and attention to details, prompt catering and banqueting services. Not to mention our competitive prices will ensure that our clients come back time and again. The level of professionalism and experience provided means you can relax knowing you are in safe hands with Dutta Enterprise hospitality.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="../../catering1.jpg" alt="catering" className={styles.catering2}/>
          </div>
        </div>
      </main>
    </div>
  );
}
