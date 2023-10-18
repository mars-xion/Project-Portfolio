import React from "react";
import { Tilt } from "react-tilt"
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] ww-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ /* opetions for the tilt cards*/ 
            max: 45,
            scale: 1,
            speed:450
          }}
           className="bg-tertiary rounded-[20px] py-5 
           px-12 min-h-[20px] flex justify-evenly 
           items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold
          text-center">{title}</h3>
        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion className="div"
      variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction</p>
      <h2 className={styles.sectionHeadText}>
        Overview.</h2>
    </motion>

                        {/*diraction , type, delay, duration*/}
    <motion.p variants={fadeIn("", "", 0.1, 0.1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">  
      This website was done using Javascript, React, and Three.js. It is meant to show my skills in 3D websites and motion.
      This is extra text for now, just to fill up this parargrph until I see what I can do. Thank you for taking time to read this!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} 
        index= {index} {...service} />
      ))}
    </div>
    </>
  )
}

                            // component, "id name"
export default SectionWrapper(About, "about");