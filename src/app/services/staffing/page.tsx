"use client";
import Header from '../../components/Header';
import styles from '../staffing.module.css';

export default function staffing() {
  return (
    <div className={styles.container}>
      
      <Header />
      <h1 className={styles.tagline}> SERVICES</h1>
      
      <main className={styles.main}>
      <h2 className={styles.cardtitle}>Staffing Solutions & Payroll Management</h2>
        <div className ={styles.about}>
          <p className={styles.subtagline1}>
          These services generally comprise recruitment, payroll, and human resource services. As part of our staffing solutions and payroll management services, we provide skilled, semi-skilled and unskilled manpower to our customers as per their requirements. We also seek to ensure all staff are properly trained and equipped to carry out their duties, and that they have the necessary permits and licenses, where required.
          Staffing solutions involve recruiting, hiring, and managing employees to meet a company's workforce needs. Payroll management involves handling all aspects of employee compensation, including salaries, wages, bonuses, deductions, and taxes. Effective payroll management ensures that employees are paid accurately and on time while complying with legal and regulatory requirements. 
          </p>
            
              <img src="../../payroll.jpeg" alt="payroll" className={styles.payroll}/>
            </div>
            </main>
            </div>
  );
}        