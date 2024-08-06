"use client"
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

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleSectorDropdown = () => {
    setSectorDropdownOpen(!sectorDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <span onClick={isMobile ? toggleServicesDropdown : undefined}>
              Services
            </span>
            <ul
              className={`${styles.dropdown} ${
                servicesDropdownOpen ? styles.show : ''
              }`}
              onMouseEnter={() => !isMobile && setServicesDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setServicesDropdownOpen(false)}
            >
              <li className={styles.dropdownItem}>
                <Link href="/service1">Service 1</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/service2">Service 2</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/service3">Service 3</Link>
              </li>
            </ul>
            {isMobile && (
              <div className={styles.accordion}>
                <div
                  className={`${styles.accordionItem} ${
                    servicesDropdownOpen ? styles.active : ''
                  }`}
                  onClick={toggleServicesDropdown}
                >
                  Services
                  <div className={styles.accordionContent}>
                    <Link href="/service1">Service 1</Link>
                    <Link href="/service2">Service 2</Link>
                    <Link href="/service3">Service 3</Link>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className={styles.navItem}>
            <span onClick={isMobile ? toggleSectorDropdown : undefined}>
              Sectors
            </span>
            <ul
              className={`${styles.dropdown} ${
                sectorDropdownOpen ? styles.show : ''
              }`}
              onMouseEnter={() => !isMobile && setSectorDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setSectorDropdownOpen(false)}
            >
              <li className={styles.dropdownItem}>
                <Link href="/sector1">Sector 1</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sector2">Sector 2</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/sector3">Sector 3</Link>
              </li>
            </ul>
            {isMobile && (
              <div className={styles.accordion}>
                <div
                  className={`${styles.accordionItem} ${
                    sectorDropdownOpen ? styles.active : ''
                  }`}
                  onClick={toggleSectorDropdown}
                >
                  Sectors
                  <div className={styles.accordionContent}>
                    <Link href="/sector1">Sector 1</Link>
                    <Link href="/sector2">Sector 2</Link>
                    <Link href="/sector3">Sector 3</Link>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="#contact">Career</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#contact">Clients</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#contact">Contact</Link>
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
