"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [sectorDropdownOpen, setSectorDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    if (isMobile) {
      setServicesDropdownOpen(!servicesDropdownOpen);
    }
  };

  const toggleSectorDropdown = () => {
    if (isMobile) {
      setSectorDropdownOpen(!sectorDropdownOpen);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.jpg" alt="Logo" />
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">HOME</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about/detailed">ABOUT</Link>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => !isMobile && setServicesDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setServicesDropdownOpen(false)}
            onClick={toggleServicesDropdown}  // Handle click for mobile
          >
            <span>SERVICES</span>
            <ul className={`${styles.dropdown} ${servicesDropdownOpen ? styles.show : ''}`}>
              <li className={styles.dropdownItem1}>
                <Link href="/services/ifms">Integrated Facility Management Services</Link>
              </li>
              <li className={styles.dropdownItem1}>
                <Link href="/services/staffing">Staffing Solutions and Payroll Management</Link>
              </li>
              <li className={styles.dropdownItem1}>
                <Link href="/services/security">Private Security and Manned Guarding</Link>
              </li>
              <li className={styles.dropdownItem1}>
                <Link href="/services/catering">Catering</Link>
              </li>
              <li className={styles.dropdownItem1}>
                <Link href="/services/civilwork">Construction and Civil Work</Link>
              </li>
              <li className={styles.dropdownItem1}>
                <Link href="/services/otherservices">Other Services</Link>
              </li>
            </ul>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => !isMobile && setSectorDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setSectorDropdownOpen(false)}
            onClick={toggleSectorDropdown}  // Handle click for mobile
          >
            <span>SECTORS</span>
            <ul className={`${styles.dropdown} ${sectorDropdownOpen ? styles.show : ''}`}>
              <li className={styles.dropdownItem}>
                <Link href="/sectors/hospitals">Hospitals and Healthcare</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sectors/education">Education</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sectors/publicadministration">Public Administration</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sectors/industrial">Industrial</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sectors/retail">Retail</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sectors/othersectors">Other Sectors</Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link href="/careers">CAREER</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/clients">CLIENTS</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact/detailed">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
}
