'use client'

import styles from './Footer.module.css'
import Link from 'next/link';



function Footer() {


  return (
    <>
        <div className={styles.footer}>
          <center><Link href="/"><div className={styles.text}>Back to top</div></Link></center>
        </div>

    </>

  )
}

export default Footer;