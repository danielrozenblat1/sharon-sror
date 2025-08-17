import React from 'react';
import styles from './Me.module.css';
import sharon from "../../images/שרון סרור תדמית 2.png"
import mac from "../../images/מאק לוגו.png"
import ThirdScreenHome from '../../homePage/screens/ThirdScreenHome';
import VideoGallery from '../studioVideos/StudioVideos';
import macVideo from "../../videos/שרון סרור מאק.mp4"
import sharonTraining from "../../videos/שרון סרור השתלמות.mp4"
import sharonPhotoes from "../../videos/שרון סרור צילום.mp4"
import sharonSadna from "../../videos/שרון סרור סדנא.mp4"
import { useLocation } from 'react-router-dom';
const AboutMe = () => {
  const location = useLocation();
  const getMessage = () => {
    
    const decodedPath = decodeURIComponent(location.pathname);
    console.log(decodedPath)
    switch (decodedPath) {
      case '/מאפרת':
        return 'היי שרון , אני מעונינת בהשתלמות למאפרות האם אפשר לקבל פרטים נוספים ?';
      case '/כלה':
        return 'היי שרון ,  אני מעונינת לשמוע פרטים לגבי איפור כלה';
      default:
        return 'היי שרון, אשמח לשמוע פרטים לגבי';
    }
  };
  const videos=[   { src:macVideo, alt: 'שרון סרור הרצאה מאק' },{ src:sharonTraining, alt: 'שרון סרור השתלמות' },{ src:sharonPhotoes, alt: 'שרון סרור צילום' },{ src:sharonSadna, alt: 'שרון סרור סדנא' },]
  return <>
      <div className={styles.header} id="מי אני">קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={sharon} alt="שרון סרור" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>שרון סרור</h1>

        <p className={styles.description}>
מאפרת מקצועית כבר למעלה מ-6 שנים, חיה ונושמת את תחום האיפור,בנוסף להיותי מאפרת כלות וערב העברתי סדנאות,הרצאות והשתלמויות  למאות מאפרות ואני בטוחה שיש לי לתת לך את כל הכלים שאת צריכה כדי להרים את העסק שלך למקום שאת רוצה שהוא יגיע , לחיזוק החלקים שאת פחות שולטת בהם ולקבלת ידע ששאר המאפרות מפחדות לחשוף!   
        </p>


      </div>
 
    </div>
    <div className={styles.subtitle}>שיתפתי פעולה והעברתי הרצאות ב</div>
    <div className={styles.center}>
        <img src={mac} alt="mac" className={styles.mac} />
      </div>
      <div className={styles.subtitle}>אני לא מפחדת לחשוף את כל הסודות והטכניקות שלי</div>
      <VideoGallery videos={videos}/>
      <div className={styles.subtitle}>איך הגעתי לתחום האיפור אתן שואלות?</div>
      <div className={styles.content}>
      <p className={styles.explain}>
      הסיפור שלי מתחיל לפני מספר שנים, נרשמתי ללימודי תואר שני בניהול מערכות ציבור וחוויתי משבר, נאלצתי לבטל את הלימודים ולחשב מסלול מחדש. במהלך אותה תקופה, עברתי תהליך פנימי של חיפוש עצמי וגיבוש הייעוד שלי. התמודדתי עם הפער בין הרצון הפנימי לבין הציפיות של החברה והסביבה. לאחר תקופה של התחזקות באמונה, הגעתי להחלטה ללמוד איפור - התחום שבאמת רציתי. נרשמתי ללימודי איפור, ותוך חצי שנה סיימתי בהצטיינות. עבדתי כשכירה במקביל להתפתחות כעצמאית ותוך מספר חודשים הפכתי לעצמאית מצליחה. לאחר 6 שנים בתחום האיפור והשתלמויות רבות, החלטתי לחשוף את הידע שלי ולתת לאחרות את הכלים להצליח בתחום.   
        </p>
</div>
      <div className={styles.subtitle}>וזה רק מקבץ ממה שיש למי שעברה אצלי לומר</div>
      <ThirdScreenHome message={getMessage()}/>

    </>
};

export default AboutMe;