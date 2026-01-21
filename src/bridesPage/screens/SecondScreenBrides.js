import React from 'react';
import styles from "./SecondScreenBrides.module.css";
import { AlertCircle, Camera, Users, Book } from 'lucide-react';
import IconTextComponent from '../../components/can/Can';
import wedding from  "../../Icons/wired-lineal-653-marriage-hover-pinch.json"
import ThirdScreenHome from '../../homePage/screens/ThirdScreenHome';
import LessonBubble from '../../components/steps/Step';
const SecondScreenBrides = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.title}>אצלי כל כלה</div>
            <div className={styles.row}>

            <IconTextComponent icon={wedding} text="מקבלת איפור שמותאם לה אישית לאחר שיחת ייעוץ ותיאום ציפיות"/>
            <IconTextComponent icon={wedding} text="יוצאת רק כשהיא מרוצה מאיך שהיא נראית"/>
            <IconTextComponent icon={wedding} text="מקבלת את המקום לתת דגשים,הערות ורצונות מיוחדים"/>
            </div>
            <div className={styles.title}>זה קורה ככה:</div>
            <div className={styles.row}>
                <LessonBubble lessonNumber="1" title="שיחת הכרות" description="לפני שנתחיל לאפיין את האיפור האידיאלי עבורך אני צריכה להבין מי את , איך את מדמיינת את האיפור שלך ולקבל המחשה ויזואלית"/>
                <LessonBubble lessonNumber="2" title="פגישת ייעוץ" description="בפגישה נכיר ואשאל כמה שאלות כדי להתאים את סגנון האיפור לאופי שלך"/>
                <LessonBubble lessonNumber="3" title="היום הגדול" description="ביום החתונה שלך אני איתך! מאפרת אותך,מלווה אותך בהתארגנות, בהכנות וברגעים הכי מאושרים בחיים"/>
            </div>
        </div>
    );
}

export default SecondScreenBrides;