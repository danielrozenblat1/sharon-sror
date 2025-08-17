import ByMe from "../components/ByMe/ByMe";
import FormScreen from "../components/form/FormScreen";
import AboutMe from "../components/me/Me";
import NavBarNew from "../components/NewNav/NavBarNew";
import FirstScreenBrides from "./screens/FirstScreenBrides";
import SecondScreenBrides from "./screens/SecondScreenBrides";
import ThirdScreenBrides from "./screens/ThirdScreenBrides";
import styles from "./BridesPageWrapper.module.css"
import {useEffect,useRef, useState} from "react"
import Place from "../components/place/Place";
import ThirdScreenHome from "../homePage/screens/ThirdScreenHome";
import SecondScreenHome from "../homePage/screens/SecondScreenHome";
import VideoStudio from "../components/VideoStudio/VideoStudio";
import PrivacyPolicy from "../privacy/Privacy";

const BridesPageWrapper=()=>{
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
<FirstScreenBrides/>
<SecondScreenBrides/>
<SecondScreenHome title="מקבץ כלות ולקוחות שעברו דרכי"/>
<VideoStudio/>
<FormScreen/>
<AboutMe/>
<ThirdScreenBrides/>
<Place/>
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
export default BridesPageWrapper