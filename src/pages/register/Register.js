import React from 'react'
import styles from './Register.module.scss'
import { Form } from '../../components/form/Form'

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.register_content}>
        <div className={styles.left}>
          <h1 className={styles.left_text}>
          Для оформления подписки 
            на тариф, необходимо авторизоваться.
          </h1>
          <img className='styles.left_img' src ="/imag/Characters.svg" alt ="left"/>
        </div>
        <div className={styles.center}>
          <img className="styles.center_img" src ="/imag/center.svg" alt ="center"/>
        </div>
        <div className={styles.right}>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default Register