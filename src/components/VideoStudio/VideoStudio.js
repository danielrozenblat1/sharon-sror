
import styles from "./VideoStudio.module.css"
import sharonStudio from "../../videos/שרון אוירה כלות.mp4"
const VideoStudio=()=>{
return <>
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
        </div>
</>
}
export default VideoStudio