"use client";
import styles from './testimonials.module.css';

export default function Testimonials() {
    const clients = [
        { id: 1, logo: '/bdo.jpeg', name: 'BDO' },
        { id: 2, logo: '/kec.webp', name: 'KEC' },
        { id: 3, logo: '/L&T c.webp', name: 'L&T Construction' },
        { id: 4, logo: '/L&T i.png', name: 'L&T Infrastructure' },
        { id: 5, logo: '/paschim.png', name: 'Paschim' },
        { id: 6, logo: '/policab.png', name: 'Policab' },
        { id: 7, logo: '/railway.png', name: 'Railway' },
        { id: 8, logo: '/wb agri.png', name: 'WB Agriculture' },
        { id: 9, logo: '/wb agro.jpeg', name: 'WB Agro' },
        { id: 10, logo: '/wb pwd.png', name: 'WB PWD' },
        { id: 11, logo: '/wb rural.jpg', name: 'WB Rural' },
        { id: 12, logo: '/client navo.jpg', name: 'Navo' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.testimonialTitle}>Our Trusted Clients</div>
            <div className={styles.testimonialTrack}>
                <div className={styles.testimonialSlide}>
                    {clients.map((client) => (
                        <div key={client.id} className={styles.clientLogo}>
                            <img src={client.logo} alt={client.name} />
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {clients.map((client) => (
                        <div key={`duplicate-${client.id}`} className={styles.clientLogo}>
                            <img src={client.logo} alt={client.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


