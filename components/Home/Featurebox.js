import React from 'react'
import styles from '../../styles/FeatureBox.module.css'
import buttonStyle from '../../styles/Navbar.module.css'

const Featurebox = ({ features, points, reverse, firstHeading, secondHeading, para, image, button }) => {
    return (
        <>
            <div className={`${styles.featuresContainer} ${reverse ? styles.rowReverse : ''}  container`}>
                <div className={styles.left}>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                {features && <>
                    <div className={styles.right}>
                        <h1 className={styles.pHeading}>We offer you streamlined services</h1>
                        <span className={` text-muted`}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo.</span>

                        <div className={` ${styles.servicesContainer}  `}>
                            <div className={`${styles.smallImageContainer}`}>
                                <img src="/Images/Path 23.png" alt="" className='img-fluid' />
                            </div>
                            <div>
                                <h6>1x free 30-minutes consultation</h6>
                                <span className='text-muted'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo</span>
                            </div>
                        </div>

                        <div className={` ${styles.servicesContainer}  `}>
                            <div className={`${styles.smallImageContainer}`}>
                                <img src="/Images/Path 25.png" alt="" className='img-fluid' />
                            </div>
                            <div>
                                <h6>Brainstorming Sessions</h6>
                                <span className='text-muted'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo</span>
                            </div>
                        </div>

                        <div className={` ${styles.servicesContainer}  `}>
                            <div className={`${styles.smallImageContainer}`}>
                                <img src="/Images/Path 27.png" alt="" className='img-fluid' />
                            </div>
                            <div>
                                <h6>Business Coaching</h6>
                                <span className='text-muted'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo</span>
                            </div>
                        </div>
                    </div>
                </>
                }

                {points && <>
                    <div className={`${styles.right} ${!reverse && styles.notReverse}`} >
                        <div className='d-flex flex-column'>
                            <span className={styles.pHeading}>{firstHeading}</span>
                            <span className={styles.pHeading}>{secondHeading}</span>
                        </div>
                        <span className={`${styles.secHeading} text-muted`}>{para}</span>
                        <div className={styles.pointContainer}>
                            <div className={`${styles.point} gap-3 `}>
                                <div className='d-flex ' style={{ gap: '6px' }}>
                                    <i style={{ color: '#2BD67B', fontSize: '24px' }} className="fa fa-check-circle" aria-hidden="true"></i>
                                    <span>Business Coaching</span>
                                </div>
                                <div className='d-flex' style={{ gap: '6px' }}>
                                    <i style={{ color: '#2BD67B', fontSize: '24px' }} className="fa fa-check-circle" aria-hidden="true"></i>
                                    <span>How to build customer base</span>
                                </div>
                            </div>

                            <div className={`${styles.point} gap-3 `}>
                                <div className='d-flex' style={{ gap: '6px' }}>
                                    <i style={{ color: '#2BD67B', fontSize: '24px' }} className="fa fa-check-circle" aria-hidden="true"></i>
                                    <span>Business Forecasting</span>
                                </div>

                                <div className='d-flex' style={{ gap: '6px' }}>
                                    <i style={{ color: '#2BD67B', fontSize: '24px' }} className="fa fa-check-circle" aria-hidden="true"></i>
                                    <span>Free Consultation</span>
                                </div>
                            </div>
                        </div>
                        {button && <button className={`${buttonStyle.button} m-0 my-3 py-2 px-4`} style={{ width: 'fit-content' }} type="submit">Get Started</button>}
                    </div>
                </>
                }

            </div>
        </>
    )
}

export default Featurebox