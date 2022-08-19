import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <>
        <div className={styles.footerContainer}>
            <div className={`container text-light d-flex justify-content-between align-items-center ${styles.footerInner}`}>
                <span>Copyright 2020, All Rights Reserved</span>
                <div className='d-flex align-items-center gap-4'>
                    <span>Follow us on :</span>
                    <i className="fa fa-facebook fs-5" aria-hidden="true"></i>
                    <i className="fa fa-twitter fs-5" aria-hidden="true"></i>
                    <i className="fa fa-dribbble fs-5" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play fs-5" aria-hidden="true"></i>
                    <i className="fa fa-linkedin fs-5" aria-hidden="true"></i>

                </div>
            </div>
        </div>
    </>
  )
}

export default Footer