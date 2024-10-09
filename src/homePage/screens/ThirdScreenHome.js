import styles from "./ThirdScreenHome.module.css"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"

import result1 from "../../images/שרון סרור המלצה 1.png"
import result2 from "../../images/שרון סרור המלצה 2.png"
import result3 from "../../images/שרון סרור המלצה 3.png"
import result4 from "../../images/שרון סרור המלצה 4.png"
import result5 from "../../images/שרון סרור המלצה 5.png"
import result6 from "../../images/שרון סרור המלצה 6.png"
import result7 from "../../images/שרון סרור המלצה 7.png"
import result8 from "../../images/שרון סרור המלצה 8.png"
import result9 from "../../images/שרון סרור המלצה 9.png"
import result10 from "../../images/שרון סרור המלצה 10.png"
import result11 from "../../images/שרון סרור המלצה 11.png"
import result12 from "../../images/שרון סרור המלצה 12.png"
import result14 from "../../images/שרון סרור המלצה 14.png"
import Button from "../../components/button/Button";


const ThirdScreenHome=(props)=>{
 
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3500,
        slidesToShow: window.innerWidth < 550 ? 1 : window.innerWidth <= 1050 ? 2 : window.innerWidth <= 1250 ? 3: 4,
        slidesToScroll:1,
  
      };

    const content = [
        {
          type: 'image',
          src: result1,
        },
        {
            type: 'image',
            src: result2,
          },
          {
            type: 'image',
            src: result3,
          },
          {
            type: 'image',
            src: result4,
          },
          {
            type: 'image',
            src: result5,
          },

        {
          type: 'image',
          src: result6,
        },
        {
          type: 'image',
          src: result7,
        },
        {
          type: 'image',
          src: result8,
        },
        {
          type: 'image',
          src: result9,
        },
        {
          type: 'image',
          src: result10,
        },
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
        {
          type: 'image',
          src: result14,
        },
        
    ];
return <>
<div className={styles.title}>{props.title}</div>
<div className={styles.description}>מוזמנת להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`שרון סרור איפור כלות המלצה מספר ${index + 1}`} />
              )}
  
            </div>
          ))}
        </Slider>
      </div>
  <Button text="שרון,בואי נדבר!" message={props.message}/>
    </>
}
export default ThirdScreenHome