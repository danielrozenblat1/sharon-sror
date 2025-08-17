import React from 'react';
import { Clock, ClipboardList, LayoutDashboard, Tv, Users, UserCheck, Camera, FileSignature } from 'lucide-react';
import styles from './TrainingParts.module.css';
import sharon from "../../images/שרון השתלמויות.png"
const TrainingParts = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>ההשתלמות אורכת כ-3 שעות ומחולקת ל-3 חלקים</h1>
      
      <div className={styles.part}>
        <h2 className={styles.partTitle}>חלק 1 - שיחת אפיון</h2>
        <ul className={styles.itemList}>
          <li><Clock className={styles.icon} /> תיאום ציפיות מההשתלמות</li>
          <li><ClipboardList className={styles.icon} /> רשימת משימות לביצוע</li>
          <li><LayoutDashboard className={styles.icon} /> שיפור נראות הדף העסקי</li>
        </ul>
      </div>

      <div className={styles.part}>
        <h2 className={styles.partTitle}>חלק 2 - מעשי</h2>
        <ul className={styles.itemList}>
          <li><Tv className={styles.icon} /> למידת כל הטרנדים הכי חדשים באיפור</li>
          <li><Users className={styles.icon} /> למידת טכניקות איפור מתקדמות לכלות וערב (לבחירתך)</li>
          <li><UserCheck className={styles.icon} /> חיזוקים בטכניקות איפור תוך דגש על התנהלות מול הלקוחה</li>
        </ul>
      </div>

      <div className={styles.part}>
        <h2 className={styles.partTitle}>חלק 3 - עיצוב ועריכה</h2>
        <ul className={styles.itemList}>
          <li><Camera className={styles.icon} /> שיווק,וצילום נכון לרשתות החברתיות</li>
          <li><FileSignature className={styles.icon} /> פרסום ברשתות החברתיות על מנת ליצור חשיפה</li>
        </ul>
      </div>

      <div className={styles.additionalSection}>
        <h2 className={styles.additionalTitle}>וכמובן, יחס אישי ואוזן קשבת ממני לכל התייעצות</h2>
        <img src={sharon} alt="שרון סרור" className={styles.additionalImage} />
      </div>
    </div>
  );
};

export default TrainingParts;