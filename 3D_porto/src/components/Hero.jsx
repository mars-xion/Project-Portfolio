import { motion } from 'framer-motion';

import { styles } from "../styles"
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (

    <section className={`relative w-full h-screen mx-auto`}> {/* background */}
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        {/* postion of the colord line and dot on the first sec */}
        <div className='flex flex-col justify-center items-center mt-5'>      
          {/* the dot color and shape */}
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${ styles.heroHeadText } text-white`}>
            Hi, I'm 
            <span className='text-[#915eff]'>
              Mazoun </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I have done siviler projects this semster, 
            <br className='sm:block hidden'/> using the asus laptop.
          </p>
        </div>
      </div> 

      <ComputersCanvas/> 
      <div className='absolute xs:bottom-10 bottom-32 
      w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify=center items-start p-2'>
            <motion.dev 
              animate={{
                y: [0, 24, 0] // move it 24px up and down
              }}
              transition={{
                duration: 1.5, //s
                repeat: Infinity,
                repeatType: 'loop' //loop it to the infinity
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
        </div> 
    </section>     
  )
}

export default Hero