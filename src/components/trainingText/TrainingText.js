import React from 'react';
import styles from './TrainingText.module.css';
import { AlertCircle, Star } from 'lucide-react';
import certificate from "../../images/שרון סרור מאפרות 1.png"
const TrainingText = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>מאפרת יקרה</h1>
      <p className={styles.description}>
      בתור מאפרת שהייתה הולכת בכל פעם להשתלמוית ומתאכזבת בכל פעם מחדש
      </p>
      <div className={styles.specialDescription}>
                <AlertCircle className={styles.icon} size={32} />
                <span>הבנתי שללמוד עוד טכניקה זה פשוט לא מספיק!</span>
                <AlertCircle className={styles.icon} size={32} />
            </div>
            <p className={styles.description}>
    אף אחד לא הכין אותי לרגע שהבנתי
      </p>
      <div className={styles.specialDescription}>
                <AlertCircle className={styles.icon} size={32} />
                <span>שכל הסיפור לא מתחיל ונגמר רק באיפור</span>
                <AlertCircle className={styles.icon} size={32} />
            </div>

      <p className={styles.description}>
      היות ואני עקשנית פיצחתי את השיטה בעבודה קשה והתמדה מרובה
      </p>
      <h2 className={styles.specialDescription}>
                <span>והיום אני עוזרת לאחרות לממש את החלום שלהן</span>
            </h2>
            <p className={styles.description}>
     בעזרת כלים שצברתי והיו כל כך נחוצים לי בתחילת דרכי!
      </p>
            <div className={styles.center}><img className={styles.image} src={certificate}/></div>
   
      <h2 className={styles.description}>היום את יוצאת לדרך חדשה שבה תקבלי את כל הכלים והסודות וסוף סוף תתחילי ליישם ולראות תוצאות</h2>

    </div>
  );
};

export default TrainingText;