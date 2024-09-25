import React, { useRef, useEffect } from 'react';
import styles from "./FirstScreenTraining.module.css";
import { ChevronDown } from 'lucide-react';

const FirstScreenTraining = () => {
  const topLeftImageRef = useRef(null);
  const topRightImageRef = useRef(null);
  const middleLeftImageRef = useRef(null);
  const middleRightImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Move side images down slightly on scroll
      if (topLeftImageRef.current && topRightImageRef.current) {
        topLeftImageRef.current.style.transform = `rotate(-20deg) translateY(${scrollY * 0.15}px)`;
        topRightImageRef.current.style.transform = `rotate(20deg) translateY(${scrollY * 0.15}px)`;
      }
      
      // Move middle images up slightly on scroll
      if (middleLeftImageRef.current && middleRightImageRef.current) {
        middleLeftImageRef.current.style.transform = `rotate(-20deg) translateY(${-scrollY * 0.15}px)`;
        middleRightImageRef.current.style.transform = `rotate(20deg) translateY(${-scrollY * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.explainContainer}>
        <div className={styles.imageContainer}>
          <div ref={topLeftImageRef} className={styles.topLeftImage}></div>
          <div ref={topRightImageRef} className={styles.topRightImage}></div>
          <div ref={middleLeftImageRef} className={styles.middleLeftImage}></div>
          <div ref={middleRightImageRef} className={styles.middleRightImage}></div>
        </div>
        <div className={styles.explain}>
          כאן את תגלי איך להפוך את העסק שלך למכונה משומנת
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>כי את יכולה לעסוק במה שאת הכי אוהבת</div>
          <div className={styles.description}>ולהרוויח הרבה יותר!</div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={40} color="#472e1b" />
      </div>
    </div>
  );
};

export default FirstScreenTraining;