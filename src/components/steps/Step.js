import React from 'react';
import styles from './Step.module.css';

const LessonBubble = ({ lessonNumber, title, description }) => {
  return (
    <div className={styles.bubble}>
 
      <div className={styles.content}>
        <h3 className={styles.title}>{lessonNumber}.{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default LessonBubble;