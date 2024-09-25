
import styles from './FormScreen.module.css';
import { useState,useRef } from 'react';
const FormScreen = () => {
    const [submitted ,setSubmitted]=useState(false)
    const nameRef=useRef('')
      const phoneRef=useRef('')
      const emailRef=useRef('')
       const reciver="" 
  
      const submitHandler=async(e)=>{
        e.preventDefault()
        const name=nameRef?.current?.value
        const phone=phoneRef?.current?.value
        const email=emailRef?.current?.value
        if(name.trim().length<=2){
        
        alert("אנא הכניסי שם מלא ")
        return;
        }
        if(phone.trim().length!==10){
        
        alert("אנא הכניסי מספר טלפון הכולל 10 ספרות ")
        return;
            }
            if(!email.includes("@")){
             
                alert("אנא הכניסי מייל תקין ")
                return;
                }

       const formData={
        name:name,
        phone:phone,
        email:email,
        
        reciver:reciver
       }
    const response= await fetch('https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
       })
            
            if(response.ok){
  
            alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
            nameRef.current.value=""
            phoneRef.current.value=""
            emailRef.current.value=""
           setSubmitted(true)
            }
        
    }
  return <>
    <div className={styles.title} id="צרי קשר">הכל מתחיל כאן!</div>
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="מה השם שלך?"
          ref={nameRef}

        />
        <input
          type="tel"
          className={styles.input}
          placeholder="מה המספר שלך?"
          ref={phoneRef}
        />
        <input
          type="email"
          className={styles.input}
          placeholder="מה המייל שלך?"
          ref={emailRef}
        />
        <button onClick={submitHandler} className={styles.button}>
      שרון,תתקשרי אלי!
        </button>
      </form>
    </div>
 </>
};

export default FormScreen;