// // ContactForm.js
import React from 'react';
import styles from './ContactForm.module.css'; // Import CSS Module

function ContactForm() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <h1 className={styles.h1}>Let's get in touch</h1>
                    <p>We're open for any suggestion</p>
                    <div className={styles.contactInfo}>
                        <p>Address : Tunisia, Sfax</p>
                        <p>Email: info@taskroom.com</p>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <h2 className={styles.h2}>Get in touch</h2>
                    <form>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
