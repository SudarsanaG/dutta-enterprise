"use client";
// components/Header.tsx
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

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
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
          >
            <span>SERVICES</span>
            <ul className={`${styles.dropdown} ${servicesDropdownOpen ? styles.show : ''}`}>
              <li className={styles.dropdownItem}>
                <Link href="/services/ifms">Integrated Facility Management Services</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/services/staffing">Staffing Solutions and Payroll Management</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/services/security">Private Security and Manned Guarding</Link>
              </li> <li className={styles.dropdownItem}>
                <Link href="/services/catering">Catering</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/services/civilwork">Construction and Civil Work</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/services/otherservices">Other Services</Link>
              </li>

            </ul>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => !isMobile && setSectorDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setSectorDropdownOpen(false)}
          >
            <span>SECTORS</span>
            <ul className={`${styles.dropdown} ${sectorDropdownOpen ? styles.show : ''}`}>
              <li className={styles.dropdownItem}>
                <Link href="/sector1">Hospitals and Healthcare</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sector2">Education</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sector3">Public Administration</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sector3">Industrial</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sector3">Retail</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sector3">Other Sectors</Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link href="#career">CAREER</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#clients">CLIENTS</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#contact">CONTACT</Link>
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
