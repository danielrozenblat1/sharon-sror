import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainPageButton.module.css';
import {Player} from "@lordicon/react"
const Button = ({ text, icon, to }) => {
    const navigate = useNavigate();
    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);

    useEffect(() => {
      playerRef1?.current?.playFromBeginning();
      playerRef2?.current?.playFromBeginning();
    }, []);
  
    const handleComplete = (ref) => {
      setTimeout(() => {
        ref?.current?.playFromBeginning();
      }, 2000);
    };

    const handleClick = (e) => {
      e.preventDefault();
   
      navigate(to);
      window.scrollTo(0, 0);
    };

    return (
      <button className={styles.button} onClick={handleClick}>
        <div className={styles.leftIcon}>
   
        </div>
        <span className={styles.text}>{text}</span>
        <div className={styles.rightIcon}>
          <Player 
            icon={icon} 
            size="100%" 
            onComplete={() => handleComplete(playerRef2)} 
            ref={playerRef2} 
          />
        </div>
      </button>
    );
};

export default Button;