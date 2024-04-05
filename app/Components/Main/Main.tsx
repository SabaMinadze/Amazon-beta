import React from 'react'
import styles from './Main.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Main() {
  return (
    <div className={styles.box}> 
    <Link href='/'><Image src="/amazon_logo.png" height={40} width={130} alt="eror" className={styles.logo}/></Link>

    <input type='text' placeholder='Search Amazon' className={styles.input}/>
    <input type='submit' value="🔍" className={styles.search}/>

    </div>
  )
}

export default Main