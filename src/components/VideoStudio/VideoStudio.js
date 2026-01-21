import styles from "./VideoStudio.module.css"
import sharonStudio from "../../videos/שרון אוירה כלות.mp4"
// הוסיפי את הסרטונים הנוספים כאן:
import video2 from "../../videos/שרון כלות חדש אוירה.mp4"
import video3 from "../../videos/שרון כלות חדש אוירה 2.mp4"

const VideoStudio = () => {
  return (
    <>
      <div className={styles.title}>טעימה מהאווירה היומיומית איתי ככלה</div>
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video} 
            src={sharonStudio} 
            alt="שרון סרור איפור כלות וערב" 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls
          />
        </div>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video} 
            src={video2} // שני video2 לסרטון השני
            alt="שרון סרור איפור כלות וערב" 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls
          />
        </div>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video} 
            src={video3} // שני video3 לסרטון השלישי
            alt="שרון סרור איפור כלות וערב" 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls
          />
        </div>
      </div>
    </>
  )
}

export default VideoStudio