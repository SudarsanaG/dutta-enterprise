"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './contactSection.module.css';

export default function ContactSection() {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Radhamohanpur', '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2 className={styles.title}>Contact Us</h2>
          <div className={styles.contactDetails}>
            <p className={styles.contactItem}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <span>Dutta House, Dutta Enterprise, Radhamohanpur, Debra, Paschim Midnapur, West Bengal, 721160</span>
            </p>
            <p className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <span>+91 99331 95417</span>
            </p>
            <p className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <span><a href="mailto:info@duttaenterprise.com" className={styles.emailLink}>info@duttaenterprise.com</a></span>
            </p>
          </div>
        </div>
        <div className={styles.map} onClick={handleMapClick}>
          <img src="/map-animation.gif" alt="Office Locations Map" className={styles.mapImage} />
        </div>
      </div>
    </div>
  );
}


