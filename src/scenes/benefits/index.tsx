import { Props, NavMenuLinks, BenefitTypes } from '@/shared/types'
import { motion } from 'framer-motion'
import HeaderText from '@/shared/HeaderText'
import { benefits } from '@/shared/data/benefits'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'


const Benefits = ({setSelectedPage}: Props) => {
  
  return (
    <section id='benefits' 
      className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div 
            onViewportEnter={()=> setSelectedPage!(NavMenuLinks.Benefits)}
        >
          <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{amount: .7}}
            transition={{duration: 1, ease: 'easeIn'}}
            variants={{
              hidden: {opacity: 0, x: -50}, 
              visible: {opacity: 1, x: 0} 
            }}
            className='md:my-5 mw-3/5 md:text-left text-center flex flex-col md:items-start items-center'>
            <HeaderText>
              MORE THAN JUST A GYM.
            </HeaderText>
              <p className='my-5 txt-sm max-w-[500px]'>
                We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
              </p>
          </motion.div>
          <motion.div 
            className='mt-5 md:flex items-center justify-evenly gap-5'>
            {
              benefits.map((benefit:BenefitTypes) => {
                return <Benefit key={benefit.id}
                  benefit={benefit}
                  setSelectedPage={setSelectedPage}
                />
              })
            }
          </motion.div>

          {/* graphics and testimonials */}
          <div className='flex mt-20 flex-col items-center justify-center text-center md:flex-row md:text-left md:justify-between md:gap-10'>
            {/* graphics */}
            <img src={BenefitsPageGraphic} alt="benefits section image" />
            {/* description */}
            <div className='relative'>
              {/* title */}
              <div className='before:absolute before:-top-20 before:-left-20 before:content-abstractWaves before:z-[-1] '>
                <HeaderText>
                  Join millions of happy members getting <span className='text-primary-500'>fit!</span> 
                </HeaderText>
              </div>
              {/* description */}
              <div>
                <p className='my-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nihil sunt necessitatibus magnam eum eos dolor. Quam voluptatem officia consequatur illo sequi facere reprehenderit illum ea quos non repellendus commodi minima eaque, temporibus quasi laudantium. Consectetur numquam laborum provident, voluptatum quo tenetur corrupti distinctio quasi delectus placeat obcaecati vitae fugiat?
                </p>
              </div>
              {/* button */}
              <div className='relative mt-16'>
               <div className='before:absolute before:-bottom-20 before:right-10 before:content-sparkles before:-z-[1]'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
               </div>
              </div>
          

            </div>
            
          </div>
        </motion.div>

    </section>
  )
}

export default Benefits