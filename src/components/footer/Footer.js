
import React from 'react'
import axios from 'axios';
import styles from "./Footer.module.scss"

const Footer = () => {


  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.left} >
          <img src ="/imag/eqw 1.svg" alt ="scan"/>
          </div>
        <div className={styles.right}>
          <ul>
            <li>
            г. Москва, Цветной б-р, 40
            </li>
            <li>
            +7 495 771 21 11
            </li>
            <li>
            info@skan.ru
            </li><br/>
            <li>
            Copyright. 2022
            </li>
          </ul>
          
        </div>
      </div>
    </footer>
   
  )
}

export default Footer