import React from 'react'
import styles from "./Home.module.scss"
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_content}>
        <div className={styles.service}>
          <div className={styles.service_left}>
            <h1 className={styles.service_left__caption}>
            сервис по поиску публикаций 
                о компании <br/>
                    по его ИНН
            </h1>
            <p className={styles.service_left__description}>
            Комплексный анализ публикаций, получение данных <br/>
            в формате PDF на электронную почту.
            </p>
            <button className={styles.button_service}>
            Запросить данные
            </button>
          </div>
          <div className={styles.service_right}>
            <img className='service_img' src ="/imag/service1.svg" alt ="service"/>
          </div>

        </div>
        <div className={styles.value}>
          <h2>Почему именно мы</h2>
          
        </div>
        <div className={styles.img}>


        </div>
        <div className={styles.rates}>



        </div>
      </div>
      
      </div>
  )
}

export default Home