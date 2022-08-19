import React from 'react'
import Contact from '../components/Contact'
import Featurebox from '../components/Home/Featurebox'
import PreFooter from '../components/Home/PreFooter'
import Testimonial from '../components/Home/Testimonial'
import styles from '../styles/Home.module.css'
import buttonStyle from '../styles/Navbar.module.css'
const home = () => {
  return (
   <>
    <div className={`container ${styles.mainContainer} `}>
        <div className={styles.left}>
            <h1 className={styles.PrimaryHeading}>Preparing your business for next level</h1>
            <div className='w-75 text-muted'>
            <span >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur expedita eius minus, id, deleniti maiores animi omnis error incidunt temporibus accusantium earum aspernatur vel inventore quisquam aut unde praesentium!</span>
            </div>
            <button className={`${buttonStyle.button} m-0 my-3`} type="submit">Contact Us</button>
        </div>
        <div className={`${styles.right} `}>
            <img src="/Images/maria-lupan-gS_pSZHbWj4-unsplash 1.png" alt="" className='img-fluid' width={800} />
        </div>
    </div>

    <div className="" style={{margin:"10% 0"}}>
        <Featurebox features={true} points={false} reverse={false} image="/Images/feature1.png" />
    </div>
    <div className="" style={{margin:"10% 0"}}>
        <Featurebox features={false} points={true} reverse={true} firstHeading="Business" secondHeading="Forecasting" para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." image="/Images/feature2.png" />
    </div>
    <div className="" style={{margin:"10% 0"}}>
        <Featurebox features={false} points={true} reverse={false} firstHeading="Take your best " secondHeading="decision right now." para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo." image="/Images/feature3.png" button={true}/>
    </div>

    <div className="container pb-5" >
        <Testimonial/>
    </div>

    <div style={{padding:'15% 0'}} className='py-5 bg-black mt-5'>
        <PreFooter/>
    </div>

    <div className="pb-5">
        <Contact/>
    </div>
   </>
  ) 
}

export default home