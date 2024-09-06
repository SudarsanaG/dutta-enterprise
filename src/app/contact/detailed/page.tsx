import styles from './contact.detailed.module.css';

export default function ContactUs() {
  return (
    <>
        <div className={styles.container}>
        <div className={styles.contactSection}>
            <div className={styles.contactDetails}>
            <h3>Contact Details</h3>
                <div className={styles.contactDetailsInfo}>
                    <p>
                        <span className={styles.icon}>📍</span>
                        Dutta Enterprise, Radhamohanpur, Debra, Pschim Midnapur, West Bengal, 721160
                    </p>
                    <p>
                        <span className={styles.icon}>📞</span>
                        +91 99331 95417
                    </p>
                    <p>
                        <span className={styles.icon}>✉️</span>
                        info@duttaenterprise.com
                    </p>
                </div>
            </div>
            <form className={styles.form}>
            <input type="text" name="firstName" placeholder="First name *" className={styles.inputField} required />
            <input type="email" name="email" placeholder="E-mail *" className={styles.inputField} required />
            <input type="tel" name="phone" placeholder="Phone *" className={styles.inputField} required />
            <textarea name="message" placeholder="Your Message *" className={styles.textArea} required></textarea>
            <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
        </div>
        <div className={styles.map}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.651837048924!2d72.828562!3d19.0242207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce736baefb93%3A0x9dba28bbf2a92cd3!2sKrystal%20Integrated%20Services%20Ltd!5e0!3m2!1sen!2sin!4v1693582082751!5m2!1sen!2sin"
        width="100%"
        height="400"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  </>
  );
}
