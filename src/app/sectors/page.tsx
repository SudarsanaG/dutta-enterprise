"use client"
// src/app/page.tsx
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Hospital, 
  GraduationCap, 
  Building2, 
  Factory, 
  Store, 
  Briefcase 
} from 'lucide-react';
import styles from './sectorspage.module.css';

export default function Sectors() {
  const sectors = [
    {
      id: 1,
      icon: Hospital,
      heading: 'Hospitals and Healthcare',
      description: 'We provide services to hospitals and medical institutes in this sector.',
      link: '/sectors/hospitals',
      bgImage: 'hospital2.avif',
      className: styles.card1
    },
    {
      id: 2,
      icon: GraduationCap,
      heading: 'Education',
      description: 'We provide services to private and government schools and colleges (including medical colleges) in this sector.',
      link: '/sectors/education',
      bgImage: 'edu1.jpg',
      className: styles.card2
    },
    {
      id: 3,
      icon: Building2,
      heading: 'Public Administration',
      description: 'We provide services to municipal, state government and government offices, electricity board and district consumer forums.',
      link: '/sectors/publicadministration',
      bgImage: 'adm2.jpg',
      className: styles.card3
    },
    {
      id: 4,
      icon: Factory,
      heading: 'Industrial',
      description: 'We provide our services to manufacturing companies.',
      link: '/sectors/industrial',
      bgImage: 'indus.jpg',
      className: styles.card4
    },
    {
      id: 5,
      icon: Store,
      heading: 'Retail',
      description: 'We provide services to retail outlets and branch offices in this sector.',
      link: '/sectors/retail',
      bgImage: 'retail.jpg',
      className: styles.card5
    },
    {
      id: 6,
      icon: Briefcase,
      heading: 'Other Sectors',
      description: 'Explore our additional sectors.',
      link: '/sectors/othersectors',
      bgImage: 'os.jpeg',
      className: styles.card6
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div id="sectors" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.tagline1}> Our Sectors</h1>
      </div>
      <div className={styles.carouselContainer}>
        <Slider {...settings} className={`${styles.slider} sectors-carousel`}>
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <div key={sector.id} className={styles.slideWrapper}>
                <div className={sector.className}>
                  <div className={styles.cardIcon}>
                    <IconComponent />
                  </div>
                  <div className={styles.cardHeading}>{sector.heading}</div>
                  <div className={styles.cardContent}>
                    <p>{sector.description}</p>
                    <a href={sector.link} className={styles.readMore}>
                      Learn More <span className={styles.arrow}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
