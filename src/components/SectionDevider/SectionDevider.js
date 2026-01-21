import React from 'react';
import styles from './SectionDevider.module.css';

const SectionDivider = ({ 
  title, 
  subtitle, 
  variant = 'default' // 'default', 'elegant', 'bold'
}) => {
  return (
    <div className={`${styles.dividerWrapper} ${styles[variant]}`}>
      <div className={styles.dividerContent}>
        {/* Decorative top elements */}
        <div className={styles.decorativeTop}>
          <span className={styles.decorLine}></span>
          <div className={styles.decorDiamond}></div>
          <span className={styles.decorLine}></span>
        </div>
        
        {/* Main title */}
        <h2 className={styles.sectionTitle}>{title}</h2>
        
        {/* Subtitle */}
        {subtitle && (
          <p className={styles.sectionSubtitle}>{subtitle}</p>
        )}
        
        {/* Decorative bottom elements */}
        <div className={styles.decorativeBottom}>
          <span className={styles.dotLeft}></span>
          <span className={styles.centerLine}></span>
          <span className={styles.dotRight}></span>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className={styles.floatingDecor}>
        <span className={styles.floatCircle}></span>
        <span className={styles.floatCircle}></span>
      </div>
    </div>
  );
};

export default SectionDivider;