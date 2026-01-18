import React, { useState } from 'react';
import styles from './Course.module.css';
import { Heart, Camera, Palette, Eye, Award, Gift, Clock, Star } from 'lucide-react';

const MakeupCourse = () => {
  const [activeLesson, setActiveLesson] = useState(null);

  const lessons = [
    {
      number: "01",
      title: "היכרות ותיאום ציפיות",
      subtitle: "הבסיס להצלחה",
      items: [
        "שיחת הכרות אישית ותיאום ציפיות מהקורס",
        "הכרת סוגי המברשות ועולם האיפור",
        "חוברת ליווי ומשימות לביצוע להתנעת התהליך"
      ],
      icon: Heart,
      accent: "#d4a5a5"
    },
    {
      number: "02",
      title: "יסודות האיפור",
      subtitle: "בונים בסיס איתן",
      items: [
        "הכרת מבנה הפנים ומורפולוגיה",
        "התאמת חומרים, טקסטורות וגוונים",
        "איפור בסיס - יצירת בסיס נכון ועמיד לאורך זמן"
      ],
      icon: Palette,
      accent: "#c9b8a8"
    },
    {
      number: "03",
      title: "איפור כלות וערב",
      subtitle: "הקסם של הרגע הגדול",
      items: [
        "טכניקות איפור כלות עכשווית",
        "שילובי צבעים, אור וצל",
        "התאמה אישית לסוגי לקוחות וכלות"
      ],
      icon: Star,
      accent: "#b8a090"
    },
    {
      number: "04",
      title: "טכניקות עכשוויות",
      subtitle: "להישאר בחזית",
      items: [
        "איילינר רגיל ומעושן",
        "הדבקת ריסים",
        "טרנדים עדכניים מהשטח"
      ],
      icon: Eye,
      accent: "#a08878"
    },
    {
      number: "05",
      title: "צילום, עריכה ושיווק",
      subtitle: "להראות את העבודה שלך",
      items: [
        "איך לצלם לוק איפור מקצועי",
        "עריכת תמונות וסרטונים",
        "שיווק באינסטגרם ובניית נוכחות"
      ],
      icon: Camera,
      accent: "#907868"
    },
    {
      number: "06",
      title: "סיכום וצילום מקצועי",
      subtitle: "הרגע שלך לזרוח",
      items: [
        "יצירת לוק סיום אישי",
        "צילום מקצועי של העבודה שלך",
        "עריכת תוצרים וסגירת תהליך"
      ],
      icon: Award,
      accent: "#785858"
    }
  ];

  const highlights = [
    { icon: Gift, text: "חוברת ליווי אישי - במתנה" },
    { icon: Clock, text: "תיאום זמנים גמיש - פעם בשבוע" },
    { icon: Heart, text: "כל מפגש כולל עבודה עם מודליסטית" }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.introQuestion}>תמיד אהבת איפור והבנת שהגיע הזמן שלך להרוויח ממנו?</p>
          <div className={styles.logoMark}>
            <span className={styles.logoLine}></span>
            <span className={styles.logoLine}></span>
          </div>
          <h1 className={styles.mainTitle}>קורס איפור</h1>
          <h2 className={styles.brandTitle}>MAKEUP YOUR MIND</h2>
          <p className={styles.tagline}>הדרך שלך להפוך לאשת מקצוע</p>
        </header>

        <section className={styles.introSection}>
          <div className={styles.introCard}>
            <h3 className={styles.introTitle}>מטרת הקורס</h3>
            <p className={styles.introText}>
              הקורס מיועד למי שרוצה להתחיל את דרכה בעולם האיפור מאפס - 
              בלי ניסיון קודם, ועם המון רצון להתפתח.
            </p>
            <p className={styles.introText}>
              בנוי כליווי אישי אחד על אחד, המותאם בדיוק לקצב ולרמה של כל תלמידה, 
              כדי שתוכלי להתקדם בביטחון ולקבל את מלוא תשומת הלב והיחס האישי שמגיע לך.
            </p>
          </div>
        </section>

        <section className={styles.syllabusSection}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.titleDecor}></span>
            סילבוס הקורס
            <span className={styles.titleDecor}></span>
          </h3>
          
          <div className={styles.lessonsGrid}>
            {lessons.map((lesson, index) => {
              const IconComponent = lesson.icon;
              const isActive = activeLesson === index;
              
              return (
                <div 
                  key={index}
                  className={`${styles.lessonCard} ${isActive ? styles.active : ''}`}
                  style={{ '--accent-color': lesson.accent }}
                  onClick={() => setActiveLesson(isActive ? null : index)}
                >
                  <div className={styles.cardShine}></div>
                  <div className={styles.lessonNumber}>{lesson.number}</div>
                  
                  <div className={styles.lessonHeader}>
                    <IconComponent className={styles.lessonIcon} />
                    <div className={styles.lessonTitles}>
                      <h4 className={styles.lessonTitle}>{lesson.title}</h4>
                      <span className={styles.lessonSubtitle}>{lesson.subtitle}</span>
                    </div>
                  </div>
                  
                  <ul className={styles.lessonItems}>
                    {lesson.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles.lessonItem}>
                        <span className={styles.itemDot}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className={styles.cardGlow}></div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.highlightsSection}>
          <div className={styles.highlightsCard}>
            <h3 className={styles.highlightsTitle}>
              הערות חשובות
            </h3>
            <div className={styles.highlightsList}>
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className={styles.highlightItem}>
                    <IconComponent className={styles.highlightIcon} />
                    <span>{highlight.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p className={styles.footerText}>
              הלמידה מתקיימת באווירה אינטימית ונעימה, בליווי מקצועי צמוד, 
              תוך בניית בסיס איתן לעבודה עצמאית או להמשך לימודים מתקדמים.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MakeupCourse;