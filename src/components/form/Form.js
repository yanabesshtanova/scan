import React, { useEffect, useState } from 'react'

import { registration } from '../../action/user'


import styles from './Form.module.scss'



const useValidation =(value, validations) =>{
    const[isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    const[isPhone, setPhone] = useState(false)

   

useEffect( () =>{

    
    for (const validation in validations){
        switch(validation){
            case "minLength":
                value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
            break;
            case "isEmpty":
                value ? setEmpty(false) : setEmpty(true)
            break;
            
        }
    }
},    [value])
  
useEffect( () =>{
    if(isEmpty||minLengthError){
        setInputValid(false)
    } else {
        setInputValid(true)
    }
}, [isEmpty,minLengthError])


return{
    isEmpty,
    minLengthError,
    inputValid,
    isPhone,
}
}

const useInput =(initialValue, validations) =>{
    const [value, setValue] =useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value,validations)
    const onChange =(e) =>{
setValue(e.target.value)
    }

    const onBlur = (e) =>{
        if (e.target.value){
setDirty (true);
    }
}
return{

    value,  
    onChange,
    onBlur,
    isDirty,
    ...valid
}
}

export const Form = () => {
    
const loginInput = useInput("any",{isEmpty: true,})
const passwordInput = useInput("any", {isEmpty:true, minLength:5})


  return (
    <form className={styles.form}>
          < div className={styles.links_container}>
              <div className={styles.block}>
                <a className= {styles.link1 } href="#">Войти
                <img  src ="/imag/Rectangle 24.svg" alt ="left"/></a>
              </div>
              <div  className={styles.registate}>
                <a className = {styles.link2 } href="#">Зарегистрироваться
                <img  src ="/imag/Rectangle 25.svg" alt ="left"/></a>
                </div>
           </div>
           <div className={styles.login}>

          <label className={styles.label} >Логин или номер телефона:</label>
          
            <input required = {loginInput.isDirty && loginInput.isEmpty || loginInput.isDirty && loginInput.isPhone} onChange={e => loginInput.onChange(e)} onBlur = {e =>loginInput.onBlur(e)}  id="loginInput" className={styles.input} type="text" />
        </div>
{(loginInput.isDirty && loginInput.isEmpty ) && <div className={styles.err}>Поле не может быть пустым</div>}
          
          {(loginInput.isDirty && loginInput.isPhone) && <div className={styles.err}>Введите корректные данные</div>}
            <div className={styles.password}>
            <label className={styles.label} >Пароль:</label>
            
        <input required = {passwordInput.isDirty && passwordInput.isEmpty || passwordInput.isDirty && passwordInput.minLengthError} onChange={e =>passwordInput.onChange(e)} onBlur = {e =>passwordInput.onBlur(e)}  id="passwordInput" className={styles.input} type="password" />
            </div>
            {(passwordInput.isDirty && passwordInput.isEmpty) && <div className={styles.err}>Поле не может быть пустым</div>}
            {(passwordInput.isDirty && passwordInput.minLengthError) && <div className={styles.err}>некорректная длина</div>}
            <button
  disabled={!loginInput.inputValid || !passwordInput.inputValid}
  className={styles.button_service}
  onClick={async () => {
    try {
      await registration(loginInput.value, passwordInput.value);
    } catch (error) {
      console.log(error);
    }
  }}
>
  Войти
</button>
           <a className = {styles.link3 } href="#">Восстановить пароль</a>
          <label className={styles.entrance}>Войти через:</label>
            <div className ={styles.options}>
            <img className="styles.option_img" src ="/imag/Group 1171274231.svg" alt ="c"/>
            <img className="styles.option_img" src ="/imag/Group 1171274230.svg" alt ="ce"/>
            <img className="styles.option_img" src ="/imag/Group 1171274229.svg" alt ="cen"/>
            </div>

           
          </form>
  )
}

export default Form