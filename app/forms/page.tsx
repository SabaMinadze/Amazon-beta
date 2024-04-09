'use client'

import React from 'react'
import styles from './page.module.css'


function page() {
  const onSubmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "32e284f7-21af-48a6-be10-41990dcd82f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Contact form has beem sent succeaufully")
    }
  };


  return (
    <>
    <div className={styles.form}>
      <form onSubmit={onSubmit} className={styles.box} >
          <label htmlFor="fname">Enter First name:</label><br/>
          <input type="text" placeholder='Enter your name' name="name" className={styles.t}/><br/>
          <label htmlFor="fname">Enter email:</label><br/>
          <input type="text" placeholder='Enter your email' name="email" className={styles.t}/><br/>
          <label htmlFor="fname">Enter your message:</label><br/>
          <input type="text" placeholder='Enter your message' name="message" className={styles.t1}/>
          <br/><br/>
          <button type='submit' className={styles.sub}>Send</button>
      </form>
    </div>

    </>
  )
}

export default page