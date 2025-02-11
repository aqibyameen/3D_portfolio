import React from 'react'
import { SectionWrapper } from '../hoc'
import { socialLinks } from '../constants'
import { BallCanvas } from './canvas'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'; 
import { styles } from '../style';
// import { experiences } from '../constants';
import { textVariant } from '../utils/motion';

const Social = () => {
  return (
    <div className='w-full justify-center items-center text-gray-800'>
      <hr className='border-gray-600 my-12' />
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center my-8 `}>Reach out to me on</p>
        {/* <h2 className={styles.sectionHeadText}>Technologies I have worked with.</h2> */}
      </motion.div>
      <div className="w-full flex justify-center item-center">

      {socialLinks.map((socialLink)=>(
        <a href={`${socialLink.link}` } key={socialLink.name}>
             <div className='w-12 h-12 ' key={socialLink.name}>
          <BallCanvas icon={socialLink.icon} />

        </div>
        </a>
      ))}
     </div>

    </div>
  )
}

export default SectionWrapper(Social,"socials")
