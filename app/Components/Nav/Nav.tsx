import React from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';

function Nav() {
  return (
    <>
      <div className={styles.card}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/forms">Today&apos;s Deals</Link>
          </li>
          <li className={styles.li}>  
            <Link href="/">Custom services</Link>
          </li>  
          <li className={styles.li}>
            <Link href="/">Registry</Link>
          </li>
          <li className={styles.li}>  
            <Link href="/">Gift cards</Link>
          </li>   
          <li className={styles.li}>
            <Link href="/">Sell</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;