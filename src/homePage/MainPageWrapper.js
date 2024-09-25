import styles from "./MainPageWrapper.module.css"
import {useEffect,useRef, useState} from "react"
import FirstScreenHome from "./screens/FirstScreenHome";
import NavBarNew from "../components/NewNav/NavBarNew";
import SecondScreenHome from "./screens/SecondScreenHome";
import ThirdScreenHome from "./screens/ThirdScreenHome";
import ByMe from "../components/ByMe/ByMe";
import AboutMe from "../components/me/Me";
import Place from "../components/place/Place";

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
<SecondScreenHome title="מקבץ מהכלות שסמכו עלי"/>
<AboutMe/>
<Place/>

<ByMe/>
</div>
</>


}
export default MainPageWrapper