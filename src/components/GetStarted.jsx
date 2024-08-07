import { } from 'react'

import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} w-[100%] h-[100%] flex-col rounded-full bg-primary`}>
      <div className={`${styles.flexStart} flex-row items-center`}>
        <p className='font-poppins font-medium text-[18px] leading-[32px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>
          <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[32px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
)

export default GetStarted