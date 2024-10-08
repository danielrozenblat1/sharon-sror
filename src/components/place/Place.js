import React from 'react';
import { FaWaze, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import styles from './Place.module.css';

const Place = () => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phoneNumber = "+972545300087";
    const message = "היי שרון ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className={styles.header}>כמה פרטים קטנים וחשובים</div>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>מיקום הסטודיו שלי</h2>
          <p className={styles.address}>שביל הלילך ( רמח״ל 38 ב ) עכו</p>
          <p className={styles.navigationPrompt}>לחצי על האפליקציה שנוחה לך ונווטי ישירות אלי</p>
          <div className={styles.iconContainer}>
            <a href="https://waze.com/ul/hsvbgqd796" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaWaze className={styles.icon} />
            </a>
            <a href="https://maps.app.goo.gl/8pqfA1WuPSYhZhSu7?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaMapMarkerAlt className={styles.icon} />
            </a>
            <a href="tel:+972545300087" className={styles.iconLink}>
              <FaPhone className={styles.icon} />
            </a>
            <a href="#" onClick={handleWhatsAppClick} className={styles.iconLink}>
              <FaWhatsapp className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <h2 className={styles.title}>שעות הפעילות שלי:</h2>
          <p className={styles.hours}>
            ימי א-ה : 9:00-18:00<br />
            יום שישי : 9:00-15:00<br />
            יום שבת:סגור
          </p>
        </div>
        <div className={styles.box}>
          <h2 className={styles.title}>צרו איתי קשר:</h2>
          <p className={styles.contactInfo}>מספר הטלפון שלי: 0545300087</p>
          <div className={styles.iconContainer}>
            <a href="mailto:sharsror@walla.com" className={styles.iconLink}>
              <FaEnvelope className={styles.icon} />
            </a>
            <a href="https://www.tiktok.com/@sharonsror3" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaTiktok className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Place;