import React from 'react';
import styles from './TrainingSillabus.module.css';

const TrainingSyllabus = () => {
  const stages = [
    { 
      number: "01",
      title: "הכרות עם עולם האיפור המקצועי", 
      description: "למידת יסודות האיפור, הכרת כלים וטכניקות בסיסיות"
    },
    { 
      number: "02",
      title: "טכניקות איפור מתקדמות", 
      description: "שכלול המיומנויות, למידת טכניקות מורכבות ועבודה עם מגוון סוגי עור"
    },
    { 
      number: "03",
      title: "התמחות באיפור כלות", 
      description: "התמקדות באיפור כלות, טכניקות לאיפור עמיד ומותאם לאירועים מיוחדים"
    },
    { 
      number: "04",
      title: "בניית תיק עבודות ומיתוג אישי", 
      description: "יצירת פורטפוליו מקצועי, פיתוח מיתוג אישי ואסטרטגיות שיווק"
    }
  ];

  return (
    <div className={styles.container}>

      <div className={styles.stagesContainer}>
        {stages.map((stage, index) => (
          <div key={index} className={`${styles.stage} ${styles[`stage${index + 1}`]}`}>
            <div className={styles.stageNumber}>{stage.number}</div>
            <div className={styles.stageContent}>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDescription}>{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingSyllabus;