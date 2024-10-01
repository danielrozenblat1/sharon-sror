import React from 'react';
import styles from "./SecondScreenHome.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import result1 from "../../images/שרון סרור כלות 1.png";
import result2 from "../../images/שרון סרור כלות 2.png";
import result3 from "../../images/שרון סרור כלות 3.png";
import result4 from "../../images/שרון סרור כלות 4.png";
import result5 from "../../images/שרון סרור כלות 5.png";
import result6 from "../../images/שרון סרור כלות 6.png";
import result7 from "../../images/שרון סרור כלות 7.png";
import result8 from "../../images/שרון סרור כלות 8.png";
import result9 from "../../images/שרון סרור כלות 9.png";
import result10 from "../../images/שרון סרור כלות 10.png";
import result11 from "../../images/שרון סרור כלות 11.png";
import result12 from "../../images/שרון סרור כלות 12.png";
import result13 from "../../images/שרון סרור כלות 13.png";
import result14 from "../../images/שרון סרור כלות 14.png";
import result15 from "../../images/שרון סרור כלות 15.png";
import result16 from "../../images/שרון סרור כלות 16.png";
import result17 from "../../images/שרון סרור כלות 17.png";
import Button from '../../components/button/Button';

const CustomArrow = ({ className, style, onClick, direction }) => (
    <div
        className={`${className} ${styles.customArrow} ${styles[direction]}`}
        style={{ ...style,}}
        onClick={onClick}
    >
        {direction === 'prev' ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
            </svg>
        )}
    </div>
);

const SecondScreenHome = (props) => {
    const sliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: window.innerWidth < 550 ? 1 : window.innerWidth < 850 ? 2 : 3,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        dots: false,
        arrows: true,

      
        customPaging: function(i) {
            return (
                <div className={styles.customDot}></div>
            );
        }
    };

    const content = [
        { type: 'image', src: result1 },
        { type: 'image', src: result2 },
        { type: 'image', src: result3 },
        { type: 'image', src: result4 },
        { type: 'image', src: result5 },
        { type: 'image', src: result6 },
        { type: 'image', src: result7 },
        { type: 'image', src: result8 },
        { type: 'image', src: result9 },
        { type: 'image', src: result10 },
        { type: 'image', src: result11 },
        { type: 'image', src: result12 },
        { type: 'image', src: result13 },
        { type: 'image', src: result14 },
        
        { type: 'image', src: result15 },
        { type: 'image', src: result16 },
        { type: 'image', src: result17 },
    
    ];

    return (
        <>
            <div className={styles.carouselWrapper}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>מוזמנת להחליק ולהתרשם</div>
                <div className={styles.sliderContainer}>
                    <Slider {...sliderSettings}>
                        {content.map((item, index) => (
                            <div key={index} className={styles.slideWrapper}>
                                {item.type === 'image' && (
                                    <img 
                                        src={item.src} 
                                        className={`${styles.image2} ${styles.responsiveImage}`}
                                        alt={`שרון סרור איפור כלות ${index + 1}`} 
                                    />
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Button text="שרון, בואי נדבר" message="היי שרון, ראיתי את הכלות שאיפרת ואני רוצה לשמוע עוד פרטים"/>
        </>
    );
}

export default SecondScreenHome;