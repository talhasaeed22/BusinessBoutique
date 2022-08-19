import React from 'react'
import styles from '../styles/Contact.module.css'
import buttonStyle from '../styles/Navbar.module.css'

const Contact = () => {
  return (
    <>
        <div className={`container ${styles.contactContainer}`}>
            <h1>Contact Us</h1>
            <span>We will assist you with the steps and processes to expand your business and/or business concept. We will provide you with the right tools and offer insight concerning your business’ Next Level.</span>
            <div className={styles.form}>
                <input type="text" name="name" id="name" placeholder='Enter your name' />
                <input type="email" name="email" id="email" placeholder='Enter your email' />
                <input type="text" name="businessType" id="businessType" placeholder='Business Type' />
                <button className={`${buttonStyle.button} m-0 my-3 p-4`} style={{width:'fit-content'}} type="submit">Contact Us Now</button>
            </div>
        </div>
    </>
  )
}

export default Contact