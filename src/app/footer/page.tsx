// src/app/components/Footer.tsx
"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './footer.module.css';

export default function Footer() {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Radhamohanpur', '_blank');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <h3>Links</h3>
          <div className={styles.contactInfo}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about/detailed">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/sectors">Sectors</Link></li>
                <li><Link href="/career">Career</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <div className={styles.contactInfo}>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />Dutta House, Dutta Enterprise, Radhamohanpur, Debra, Paschim Midnapur, West Bengal, 721160</p>
            <p><FontAwesomeIcon icon={faPhone} className={styles.icon} /> +91 99331 95417</p>
            <p><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> duttatendr@rediffmail.com</p>
          </div>
        </div>
        <div className={styles.map} onClick={handleMapClick}>
          <img src="../../map-animation.gif" alt="Office Locations Map" className={styles.mapImage} />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Dutta Enterprise. All Rights Reserved</p>
        <div className={styles.socialLinks}>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="../../facebook.png" alt="Facebook" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="../../twitter.png" alt="Twitter" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
