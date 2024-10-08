import Button from "../../components/button/Button"
import FAQItem from "../../components/questions/Questions"
import styles from "./ThirdScreenBrides.module.css"

const ThirdScreenBrides=()=>{

   

return <>
      <div className={styles.title}>שאלות נפוצות</div>
   <FAQItem question="כמה מאפרות לומדות בהשתלמות?" answer="ההשתלמות היא 1:1 ככה שאת מקבלת ממני את היחס הכי אישי שיש והכי מדוייק עבורך"/>
   <FAQItem question="כמה זמן ההשתלמות אורכת?" answer="ההשתלמות היא מפגש אחד של 3 שעות ממוקדות"/>
   <FAQItem question="איפה עוברת ההשתלמות?" answer="ההשתלמות עוברת אצלי בסטודיו"/>
   <FAQItem question="עובדת בשבת?" answer="חוץ מהעובדה שאני שומרת שבת, אני חושבת שמגיע לנו יום מנוחה אחד בשבוע (לי ולציוד שלי) "/>
   <FAQItem question="את מגיעה לכלות?" answer="כן, אני מגיעה לאזור תל אביב וצפונה"/>
   <FAQItem question="האם את גם מסרקת?" answer="אני עצמי רק מאפרת, אני עובדת עם מסרקים ומסרקות מקצועיים שמגיעים אלי לסטודיו"/>
   <FAQItem question="האם ניתן להגיע להתארגן אצלך?" answer="כמובן! הסטודיו שלי נמצא בעכו ומתאים להתארגנות של כלה ו4 מלוות איתה, בסטודיו יש עמדת שיער למסרק/ת ,עמדת איפור,עמדת קפה וישיבה וכמובן - אווירה טובה  "/>
   <FAQItem question="האם חובה לקחת  ליווי כלה לאולם?" answer="לא חובה לקחת ליווי כלה, כמובן שזה משתנה מאחת לאחת ותלוי בסוג העור, מזג אויר ואופי הכלה. כמובן כל כלה מקבלת ממני ערכת טאצ'אפים "/>
   {/* <FAQItem question="יש ליווי אחת על אחת?" answer={<>הליווי קיים אבל העלות ליחס אישי לגמרי תהיה גבוהה יותר - תלחצי על הכפתור כאן ונדבר על הכל <br/> <Button text="שרון בואי נדבר!" message="היי שרון, אשמח לשמוע עוד פרטים בנוגע לליווי אחת על אחת"/></>}/> */}
</>


}
export default ThirdScreenBrides