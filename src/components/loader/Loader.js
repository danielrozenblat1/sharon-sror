import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return <>
  <div className={styles.container}>
    <div className={styles.loader}>
      <span className={styles.loaderText}>טוען...</span>
      <span className={styles.load}></span>
    </div>
    </div>
    </>
};

export default Loader;