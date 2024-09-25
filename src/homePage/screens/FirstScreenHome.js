import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from "../../components/MainPageButton/MainPageButton"
import styles from "./FirstScreenHome.module.css"
import bride from "../../Icons/wired-outline-653-marriage-hover-pinch.json"
import makeup from "../../Icons/wired-outline-1587-cosmetic-brush-hover-pinch.json"

export default function FirstScreenHome() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>SHARON SRUR</h1>
        <p className={styles.subtitle}>איפור כלות || השתלמויות למאפרות</p>
        
        <Button text="אני כלה לעתיד" icon={bride} to="כלה"/>
        <Button text="אני מאפרת" icon={makeup} to="מאפרת"/>
        <ChevronDown className={styles.icon} size={36}/>
      </div>
    </div>
  );
}