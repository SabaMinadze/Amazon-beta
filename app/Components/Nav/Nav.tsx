import React from 'react'
import styles from './Nav.module.css'
import Link from 'next/link'


function Nav() {
  return (
    <>
    <div className={styles.card}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">Today's Deals</Link>
        </li>
        <li className={styles.li}>  
          <Link href="/">Costum services</Link>
        </li>  
        <li className={styles.li}>
          <Link href="/">Registery</Link>
        </li>
        <li className={styles.li}>  
          <Link href="/">gift cards</Link>
        </li>   
        <li className={styles.li}>
          <Link href="/">Sell</Link>
        </li>
      </ul>

    </div>
    </>
  )
}

export default Nav