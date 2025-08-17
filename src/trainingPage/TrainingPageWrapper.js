import ThirdScreenBrides from "../bridesPage/screens/ThirdScreenBrides";
import ByMe from "../components/ByMe/ByMe";
import FormScreen from "../components/form/FormScreen";
import AboutMe from "../components/me/Me";
import NavBarNew from "../components/NewNav/NavBarNew";
import VideoGallery from "../components/studioVideos/StudioVideos";
import PrivacyPolicy from "../privacy/Privacy";
import FirstScreenTraining from "./screens/FirstScreenTraining";
import SecondScreenTraining from "./screens/SecondScreenTraining";
import ThirdScreenTraining from "./screens/ThirdScreenTraining";
import styles from "./TrainingPageWrapper.module.css"
import {useEffect,useRef, useState} from "react"

const TrainingPageWrapper=()=>{
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }};
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

return <>
<div className={styles.background}>
<NavBarNew/>
<FirstScreenTraining/>
<SecondScreenTraining/>
<FormScreen/>
<AboutMe/>

<ThirdScreenBrides/>
<PrivacyPolicy 
  ownerName="שרון סרור" 
  email="sharonsror@walla.com" 
  phone="+972 54-530-0087" 
  domain="https://sharonsror.co.il/" 
/>
<ByMe/>
</div>
</>


}
export default TrainingPageWrapper