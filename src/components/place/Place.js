import React from 'react';
import { FaWaze, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Place.module.css';

const Place = () => {
  return <>
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
    </div>
  </>;
};

export default Place;