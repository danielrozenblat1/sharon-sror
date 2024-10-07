import React from 'react';
import styles from "./SecondScreenTraining.module.css";
import { AlertCircle, Camera, Users, Book } from 'lucide-react';
import IconTextComponent from '../../components/can/Can';
import face from "../../Icons/wired-outline-1599-powder-makeup-face-hover-pinch.json"
import brush from "../../Icons/wired-outline-1587-cosmetic-brush-hover-pinch (1).json"
import social from "../../Icons/wired-outline-962-social-media-marketing-hover-pinch.json"
import TrainingSyllabus from '../../components/TrainingSillabus/TrainingSillabus';
import TrainingText from '../../components/trainingText/TrainingText';
import TrainingParts from '../../components/TrainingParts/TrainingParts';
const SecondScreenTraining = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>אני אגיד לך את האמת</div>
            <div className={styles.specialDescription}>
                <AlertCircle className={styles.icon} size={32} />
                <span>רוב המאפרות פוחדות לחשוף את הסודות שלהן</span>
                <AlertCircle className={styles.icon} size={32} />
            </div>
            <div className={styles.title}>אבל אני לא!</div>
            <div className={styles.title}>אצלי את הולכת לקבל:</div> 
            <ul className={styles.benefitsList}>
                <li><Book className={styles.icon} size={24} /><span>טכניקות חדשות לשיפור וחיזוק החלקים החלשים שלך</span></li>
                <li><Camera className={styles.icon} size={24} /><span>לצלם בצורה מעניינת שתגדיל את החשיפה שלך ברשתות</span></li>
                <li><Book className={styles.icon} size={24} /><span>כלים מעשיים עם משימות לטווח הקרוב להתחיל להשתפר</span></li>
          
                <li><Users className={styles.icon} size={24} /><span>יחס אישי ומעבר על כל החלקים הטכניים שאת רוצה להתחזק בהם</span></li>
                <li><Book className={styles.icon} size={24} /><span>תעודת הסמכה</span></li>
            </ul>
            <div className={styles.title}>וזה עובד ככה:</div>
           <TrainingSyllabus/>
            <div className={styles.title}>ממני תצאי כשאת</div>
            <div className={styles.row}>
            <IconTextComponent icon={brush} text="בטוחה ושולטת הרבה יותר ביכולות האיפור שלך"/>
            <IconTextComponent icon={face} text="מלאה בטכניקות חדשות לאיפור שעוד לא שמעת עליהן"/>
            <IconTextComponent icon={social} text="קיבלת כלים וידע לעיצוב התדמית שלך ברשתות החברתיות"/>
            </div>
            <TrainingParts/>
            <TrainingText/>
        </div>
    );
}

export default SecondScreenTraining;