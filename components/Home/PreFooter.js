import React from 'react'
import styles from '../../styles/Home.module.css'
const PreFooter = () => {
  return (
    <div className={` ${styles.prefooterContainer} `}>
        <span className=' text-light '>We provide you right tools and </span>
        <span className='text-light '>insights concerning your business</span>
        <div className={styles.prefooterimages}>
          <img style={{borderRadius:'50%', position:'relative', top: '17px', left: '-622px'}} src="/Images/Person/person1.png" alt="person" className='img-fluid' width={20} height={20} />
          <img style={{borderRadius:'50%', position:'relative', top: '-126px', left: '-465px'}} src="/Images/Person/person2.png" alt="person" className='img-fluid' width={15} height={15} />
          <img style={{borderRadius:'50%', position:'relative', top: '-165px', right: '-425px'}} src="/Images/Person/person3.png" alt="person" className='img-fluid' width={25} height={25} />
          <img style={{borderRadius:'50%', position:'relative', top: '15px', right: '-625px'}} src="/Images/Person/person4.png" alt="person" className='img-fluid' width={25} height={25} />
          <img style={{borderRadius:'50%', position:'relative', top: '113px', right: '-375px'}} src="/Images/Person/person5.png" alt="person" className='img-fluid' width={35} height={35} />
        </div>
    </div>
  )
}

export default PreFooter