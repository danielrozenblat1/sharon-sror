import Button from "../../components/button/Button"
import FAQItem from "../../components/questions/Questions"
import styles from "./ThirdScreenTraining.module.css"

const ThirdScreenTraining=()=>{

   

return <>
      <div className={styles.title}>שאלות נפוצות</div>
   <FAQItem question="כמה מאפרות לומדות בהשתלמות?" answer="יש שתי מאפרות בכל השתלמות ככה שאת מקבלת ממני את היחס הכי אישי שיש והכי מדוייק אלייך"/>
   <FAQItem question="כמה זמן ההשתלמות אורכת?" answer="ההשתלמות היא מפגש אחד של 6 שעות ממוקדות"/>
   <FAQItem question="איפה עוברת ההשתלמות?" answer="ההשתלמות עוברת אצלי בסטודיו"/>
   <FAQItem question="את עובדת בשבת?" answer="לא, אני חושבת שמגיע לנו יום מנוחה אחד בשבוע (לי ולציוד שלי) "/>
   <FAQItem question="יש ליווי אחת על אחת?" answer={<>הליווי קיים אבל העלות ליחס אישי לגמרי תהיה גבוהה יותר - תלחצי על הכפתור כאן ונדבר על הכל <br/> <Button text="שרון בואי נדבר!" message="היי שרון, אשמח לשמוע עוד פרטים בנוגע לליווי אחת על אחת"/></>}/>
</>


}
export default ThirdScreenTraining