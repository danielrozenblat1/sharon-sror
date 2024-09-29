import React from 'react';
import styles from './Me.module.css';
import sharon from "../../images/שרון סרור.png"
import mac from "../../images/מאק לוגו.png"
import ThirdScreenHome from '../../homePage/screens/ThirdScreenHome';
import VideoGallery from '../studioVideos/StudioVideos';
import macVideo from "../../videos/שרון סרור מאק.mp4"
import sharonTraining from "../../videos/שרון סרור השתלמות.mp4"
import sharonPhotoes from "../../videos/שרון סרור צילום.mp4"
const AboutMe = () => {
  const videos=[   { src:macVideo, alt: 'שרון סרור הרצאה מאק' },{ src:sharonTraining, alt: 'שרון סרור השתלמות' },{ src:sharonPhotoes, alt: 'שרון סרור צילום' },]
  return <>
      <div className={styles.header} id="מי אני">קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={sharon} alt="שרון סרור" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>שרון סרור</h1>

        <p className={styles.description}>
מאפרת מקצועית כבר למעלה מ-20 שנה, חיה ונושמת את תחום האיפור,בנוסף להיותי מאפרת כלות וערב העברתי סדנאות,הרצאות והשתלמויות  למאות מאפרות ואני בטוחה שיש לי לתת לך את כל הכלים שאת צריכה כדי להרים את העסק שלך למקום שאת רוצה שהוא יגיע , לחיזוק החלקים שאת פחות שולטת בהם ולקבלת ידע ששאר המאפרות מפחדות לחשוף!   
        </p>


      </div>
 
    </div>
    <div className={styles.subtitle}>שיתפתי פעולה והעברתי הרצאות ב</div>
    <div className={styles.center}>
        <img src={mac} alt="mac" className={styles.mac} />
      </div>
      <div className={styles.subtitle}>אני לא מפחדת לחשוף את כל הסודות והטכניקות שלי</div>
      <VideoGallery videos={videos}/>
      <div className={styles.subtitle}>וזה רק מקבץ ממה שיש למי שעברה אצלי לומר</div>
      <ThirdScreenHome/>
    </>
};

export default AboutMe;