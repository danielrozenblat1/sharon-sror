import styles from "./MainPageWrapper.module.css"
import {useEffect,useRef, useState} from "react"
import FirstScreenHome from "./screens/FirstScreenHome";
import NavBarNew from "../components/NewNav/NavBarNew";
import SecondScreenHome from "./screens/SecondScreenHome";
import ThirdScreenHome from "./screens/ThirdScreenHome";
import ByMe from "../components/ByMe/ByMe";
import AboutMe from "../components/me/Me";
import Place from "../components/place/Place";
import ThirdScreenBrides from "../bridesPage/screens/ThirdScreenBrides";
import PrivacyPolicy from "../privacy/Privacy";

const MainPageWrapper=()=>{
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
{/* <NavBarNew/> */}
<FirstScreenHome scrolled={scrolled} />
<SecondScreenHome title="מקבץ מהכלות והלקוחות שסמכו עלי" message="היי שרון, אני מעונינת לשמוע פרטים לגבי "/>
<AboutMe/>
<Place/>
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
export default MainPageWrapper