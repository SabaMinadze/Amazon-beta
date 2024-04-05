import React from 'react'
import styles from './Cards.module.css'
import Image from 'next/image'
import headset from '../public/headset.jpg'


function Cards(props:any) {
  return (

      <div className={styles.cards}>

        <h3 className={styles.text}>{props.text}</h3>
      <p className={styles.img}>{props.image}{props.image1}<br/> {props.image2}{props.image3}{props.image4}</p>

          <p>{props.d}</p>

      </div>

  )
}

export default Cards