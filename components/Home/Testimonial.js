import React from 'react'
import styles from '../../styles/Home.module.css'

const Testimonial = () => {
  return (
    <>
      <div className={styles.TestimonialContainer}>
        <div className="left">
          <div className={styles.imageDiv}>
            <img src="/Images/client.png" alt="client" className='img-fluid' />
          </div>
        </div>
        <div className={styles.testimonalsRight}>
          <div className={styles.clienHeading}>
            <span>Clients</span>
            <span>Testimonials</span>
          </div>
          <div className='d-flex gap-1 mb-4'>
            <img src="/Images/star.png" alt="star" className='img-fluid' width={15} />
            <img src="/Images/star.png" alt="star" className='img-fluid' width={15} />
            <img src="/Images/star.png" alt="star" className='img-fluid' width={15} />
            <img src="/Images/star.png" alt="star" className='img-fluid' width={15} />
            <img src="/Images/star.png" alt="star" className='img-fluid' width={15} />
          </div>
          <span className={styles.clientPara}>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.”</span>
          <div className={styles.clientDetail}>
            <span>David Herison</span>
            <span style={{fontSize:'9px', fontWeight:'normal'}} className="text-muted">Founder & CEO</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial