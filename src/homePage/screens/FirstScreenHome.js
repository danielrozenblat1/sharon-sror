import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from "../../components/MainPageButton/MainPageButton";
import Loader from '../../components/loader/Loader';
import styles from "./FirstScreenHome.module.css";
import bride from "../../Icons/wired-outline-653-marriage-hover-pinch.json";
import makeup from "../../Icons/wired-outline-1587-cosmetic-brush-hover-pinch.json";
import middleImage from "../../images/שרון סרור.png"
export default function FirstScreenHome() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <Loader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>SHARON SROR</h1>
        <p className={styles.subtitle}>MAKEUP ARTIST AND MENTOR</p>
        
        <Button text="אני כלה לעתיד" icon={bride} to="כלה"/>
        <Button text="אני מאפרת" icon={makeup} to="מאפרת"/>
        {/* <ChevronDown className={styles.icon} size={36}/> */}
      </div>
    </div>
  );
}