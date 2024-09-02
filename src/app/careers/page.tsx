"use client";
import React from 'react';
import styles from './careers.module.css';
import Header from '../components/Header';

export default function Careers() {
  return (
    <div className={styles.container}>
      <Header />
     
      <h2 className={styles.title}>Job Positions</h2>
      <main className={styles.main}>
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>SN</th>
                <th>Business</th>
                <th>Department</th>
                <th>Position</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dutta Enterprise</td>
                <td>Business Development (BDE)</td>
                <td>Executive</td>
                <td>Kolkata</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dutta Enterprise</td>
                <td>Business Development (BDE)</td>
                <td>Executive</td>
                <td>Bhubaneswar</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dutta Enterprise</td>
                <td>Business Development (BDE)</td>
                <td>Executive</td>
                <td>Tripura</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Dutta Enterprise</td>
                <td>Business Development (BDE)</td>
                <td>Executive</td>
                <td>Guwahati</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dutta Enterprise</td>
                <td>Business Development (BDE)</td>
                <td>Executive</td>
                <td>Shillong</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Dutta Enterprise</td>
                <td>Operation</td>
                <td>Area Manager</td>
                <td>Bhubaneswar</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Dutta Enterprise</td>
                <td>Operation</td>
                <td>Area Manager</td>
                <td>Kolkata</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Dutta Enterprise</td>
                <td>Operation</td>
                <td>Area Manager</td>
                <td>West Bengal</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Dutta Enterprise</td>
                <td>Operation</td>
                <td>Area Manager</td>
                <td>North Bengal</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Dutta Enterprise</td>
                <td>Institutional Sales (Tender)</td>
                <td>Executive</td>
                <td>Kolkata</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Dutta Enterprise</td>
                <td>Office Assistant</td>
                <td>Office Assistant</td>
                <td>Bhubaneswar</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <form className={styles.form}>
            <h3>To apply for a position, please fill out the form below</h3>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="text" placeholder="Phone" className={styles.input} />
            <input type="email" placeholder="Email Address" className={styles.input} />
            <input type="text" placeholder="Position" className={styles.input} />
            <textarea placeholder="Cover Letter" className={styles.textarea}></textarea>
            <input type="file" className={styles.fileInput} />
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </main>
    </div>
  );
}
