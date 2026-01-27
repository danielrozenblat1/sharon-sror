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
import sharonNars from "../../videos/שרון עם נארס.MP4"
import { useLocation } from 'react-router-dom';
import nars from "../../images/נארס לוגו.png"
import nyx from "../../images/nyx לוגו.png"
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
  
  const videos = [
    { src: macVideo, alt: 'שרון סרור הרצאה מאק' },
    { src: sharonTraining, alt: 'שרון סרור השתלמות' },
    { src: sharonPhotoes, alt: 'שרון סרור צילום' },
    { src: sharonSadna, alt: 'שרון סרור סדנא' },
    { src: sharonNars, alt: 'שרון סרור עם נארס' },
  ]
  
  return <>
    <div className={styles.header} id="מי אני">קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={sharon} alt="שרון סרור" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>שרון סרור</h1>

        <p className={styles.description}>
          אני מאפרת מקצועית עם ניסיון של מעל 7 שנים בליווי מאפרות, בתחום הכלות ובהפקות ביוטי. <br/> אני חיה ונושמת איפור - ומאמינה שכל אחת יכולה ללמוד את הכלים הנכונים ולהפוך את האהבה ליופי למקצוע מכניס וממלא! <br/> את דרכי בעולם האיפור התחלתי בדיוק כמו רבות - עם חלום, תשוקה גדולה, אותו סיימתי בהצטיינות, והרשמה לבית ספר לאיפור מקצועי ליופי אבל מהר מאוד הבנתי שהלימודים, חשובים ככל שיהיו, לא באמת הכינו אותי לרגע האמיתי - לעבודה בשטח, למפגש עם לקוחות, להתמודדות עם אתגרים, וגם לטכניקות שכבר לא רלוונטיות למציאות של היום. במהלך השנים עברתי דרך מקצועית משמעותית - שכללה אינספור השתלמויות, קורסים מתקדמים, ואפילו לימודי צילום ועריכה - כדי להבין את כל התמונה. היום, מתוך הניסיון האישי שלי כמאפרת כלות, נשים ואירועים - אני מעבירה את הידע הזה הלאה למאפרות מתחילות ולמאפרות שרוצות לעלות רמה. אני מלמדת את מה שלא כתוב בספרים - את העבודה האמיתית, את השטח, את מה שחשוב באמת כדי להצליח ולהתבלט בתחום הזה. יחד נלמד לא רק טכניקה, אלא גם גישה, בניית ביטחון, הצבת מטרות ויעדים - כדי שתצאי לדרך שלך חזקה, מקצועית, ועם ארגז כלים שלם.
        </p>
      </div>
    </div>
    
    <div className={styles.subtitle}>שיתפתי פעולה והעברתי הרצאות ב</div>
    <div className={styles.center}>
      <img src={mac} alt="mac" className={styles.mac} />
            <img src={nars} alt="nars" className={styles.mac} />
             <img src={nyx} alt="nyx" className={styles.mac} />
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