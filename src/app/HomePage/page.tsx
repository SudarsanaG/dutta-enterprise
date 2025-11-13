"use client";
import Link from 'next/link';
import Header from '../components/Header';
import styles from './HomePage.module.css'
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of images for the slider - all conveying facility management services
  const images = [
    '/cov1.webp',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=80', // Modern office building
  ];

  // Text content for each slide
  const slideContent = [
    {
      tagline: 'Integrated Facility Management Services',
      subtitle: '~Facilities You Can Rely On, Results You Can Trust.',
    },
    {
      tagline: 'Comprehensive Facility Solutions',
      subtitle: '~Excellence in Every Service, Trust in Every Detail.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <div 
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <img src={image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
            </div>
          ))}
        </div>
        <button className={styles.prevButton} onClick={goToPrevious} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={styles.nextButton} onClick={goToNext} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.overlay}></div>
      <Header />
      <main className={styles.main}>
        <div key={currentIndex} className={styles.contentWrapper}>
          <h1 className={styles.tagline}>{slideContent[currentIndex].tagline}</h1>
          <div className={styles.subtagline1}>{slideContent[currentIndex].subtitle}</div>
          <div className={styles.buttonContainer}>
            <Link href="/services" className={styles.heroButton}>
              OUR SERVICES
              <span className={styles.arrow}>→</span>
            </Link>
            <Link href="/sectors" className={styles.heroButton}>
              OUR SECTORS
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
