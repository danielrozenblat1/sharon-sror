import React from 'react';
import styles from './Place.module.css';

const Place = () => {
  return <>
  <div className={styles.header}>כמה פרטים קטנים וחשובים</div>
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>מיקום הסטודיו שלי</h2>
        <p className={styles.address}>וילה לילך, עכו</p>
      </div>
      <div className={styles.box}>
        <h2 className={styles.title}>שעות הפעילות שלי:</h2>
        <p className={styles.hours}>
          ימי א-ה 9:18<br />
          יום שישי 9:15<br />
          יום שבת: מנוחה
        </p>
      </div>
    </div>
  </>
};

export default Place;