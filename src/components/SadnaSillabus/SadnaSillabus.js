import React, { useEffect, useRef } from 'react';
import { Sparkles, Palette, Layers, ShoppingBag, Clock, Wand2 } from 'lucide-react';
import styles from './SadnaSillabus.module.css';

const PersonalWorkshop = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealed);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = containerRef.current?.querySelectorAll('[data-reveal]');
    
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const workshopDetails = [
    { 
      icon: Sparkles,
      title: "הכנה של העור", 
      description: "למידת טכניקות הכנת העור המושלמת לאיפור יומיומי ולערב"
    },
    { 
      icon: Palette,
      title: "איפור יומיומי ולערב", 
      description: "לימוד איפור יומיומי תוך כדי התאמה לסגנון שלך והדגמה של איפור לערב"
    },
    { 
      icon: Layers,
      title: "מינימום מוצרים - מקסימום תוצאות", 
      description: "איך להתאפר בעזרת מינימום מוצרים ואביזרים עבור תיק איפור אישי"
    },
    { 
      icon: ShoppingBag,
      title: "סידור תיק איפור אישי", 
      description: "המלצות למוצרים מותאמים אישית, רשימת קניות והתאמת גוונים"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '972545300087';
    const message = 'היי שרון, הגעתי מהדף שלך, אשמח לשמוע עוד על הסדנה';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Workshop Badge - Visual indicator this is a workshop */}
      <div className={styles.workshopBadge} data-reveal>
        <Wand2 className={styles.badgeIcon} />
        <span>מפגש אחד אינטנסיבי</span>
      </div>

      <div className={styles.header}>
        <h2 className={styles.mainTitle} data-reveal>סדנת איפור אישית</h2>
        
        <div className={styles.durationTag} data-reveal>
          <Clock size={20} strokeWidth={1.5} />
          <span>שעה וחצי</span>
        </div>
        
        <p className={styles.intro} data-reveal>
          בסדנה האישית שלי את תלמדי את כל הטכניקות הנדרשות לאיפור מושלם - מהכנת העור ועד איפור ערב מלא. 
          נתאים את הכל לסגנון האישי שלך ונבנה תיק איפור חכם עם מינימום מוצרים ומקסימום תוצאות.
        </p>
      </div>

      <div className={styles.detailsGrid}>
        {workshopDetails.map((detail, index) => {
          const IconComponent = detail.icon;
          return (
            <div 
              key={index} 
              className={`${styles.detailCard} ${styles[`card${index + 1}`]}`}
              data-reveal
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.icon} strokeWidth={0.5} size={64} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{detail.title}</h3>
                <p className={styles.cardDescription}>{detail.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.highlights} data-reveal>
        <div className={styles.highlight}>הטכניקות מותאמות אישית לסגנון שלך</div>
      </div>

      <button 
        className={styles.ctaButton} 
        onClick={handleWhatsAppClick}
        data-reveal
      >
        אני רוצה להירשם לסדנה
      </button>
    </div>
  );
};

export default PersonalWorkshop;