import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({index, title, icon})=>{
  return (
    <Tilt  className="">

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
          I am a passionate web programmer with expertise in JavaScript, Node.js, Express.js i also have advanced knowledge in HTML, CSS, PHP, SQL y MySQL. My focus lies in creating innovative and efficient solutions, prioritizing code quality and continuous improvement. I excel in collaborative environments, thrive on new challenges, and consistently deliver exceptional results. Additionally, I offer flexibility to contribute to the success of exciting projects. With an unwavering passion for programming and a strong skill set, I am ready to take on new endeavors and make a positive impact in the digital world.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default About