import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss"

const Header = () => {
  return (
    
        <header className={styles.header}>
            <div className={styles.header_content}>
                <Link to={`/`} >
                <div className={styles.scan}> </div>
                </Link>
                <nav className={styles.menu}>
                    <ul className={styles.menu_i}>
                        <li className={styles.menu__i} >
                            <Link to= "/" className={styles.menuu}>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link to= "/rate" className={styles.menuu}>
                                Тарифы
                            </Link>
                        </li> <li>
                            <Link to= "/FAQ">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>
                 <div className={styles.loginOrRegistrate}>
                    <div className={styles.registate}>Зарегистрироваться</div>
                    <div className={styles.line}>
                        <img src ="/imag/Rectangle 7.svg" alt ="line"/>
                    </div>
                     <Link to="/register" >
                     <button className={styles.button_login}>Войти</button>
                     </Link>

                </div>
                
            </div>
        </header>
    );

   
}

export default Header; 