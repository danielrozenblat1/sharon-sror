import React, { useRef, useEffect, useState } from 'react';
import styles from "./FirstScreenTraining.module.css";
import { ChevronDown } from 'lucide-react';
import Loader from '../../components/loader/Loader';

const FirstScreenTraining = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const topLeftImageRef = useRef(null);
  const topRightImageRef = useRef(null);
  const middleLeftImageRef = useRef(null);
  const middleRightImageRef = useRef(null);

  useEffect(() => {
    const imageRefs = [topLeftImageRef, topRightImageRef, middleLeftImageRef, middleRightImageRef];
    let loadedCount = 0;

    const checkAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === imageRefs.length) {
        setImagesLoaded(true);
      }
    };

    imageRefs.forEach(ref => {
      if (ref.current) {
        const computedStyle = window.getComputedStyle(ref.current);
        const backgroundImage = computedStyle.backgroundImage;
        if (backgroundImage && backgroundImage !== 'none') {
          const imageUrl = backgroundImage.slice(4, -1).replace(/["']/g, "");
          const img = new Image();
          img.onload = checkAllImagesLoaded;
          img.onerror = checkAllImagesLoaded; // Count errors as loaded to avoid infinite loading
          img.src = imageUrl;
        } else {
          checkAllImagesLoaded(); // If no background image, consider it as loaded
        }
      } else {
        checkAllImagesLoaded(); // If ref is not available, consider it as loaded
      }
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (topLeftImageRef.current && topRightImageRef.current) {
        topLeftImageRef.current.style.transform = `rotate(-20deg) translateY(${scrollY * 0.15}px)`;
        topRightImageRef.current.style.transform = `rotate(20deg) translateY(${scrollY * 0.15}px)`;
      }
      
      if (middleLeftImageRef.current && middleRightImageRef.current) {
        middleLeftImageRef.current.style.transform = `rotate(-20deg) translateY(${-scrollY * 0.15}px)`;
        middleRightImageRef.current.style.transform = `rotate(20deg) translateY(${-scrollY * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return <Loader />;
  }

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