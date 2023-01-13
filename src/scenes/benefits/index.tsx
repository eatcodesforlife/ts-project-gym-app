import { Props, NavMenuLinks, BenefitTypes } from '@/shared/types'
import { motion } from 'framer-motion'
import HeaderText from '@/shared/HeaderText'
import { benefits } from '@/shared/benefits'
import Benefit from './Benefit'


const Benefits = ({setSelectedPage}: Props) => {
  
  return (
    <section id='benefits' 
      className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div 
            onViewportEnter={()=> setSelectedPage!(NavMenuLinks.Benefits)}
        >
          <div className='md:my-5 md:w-3/5'>
            <HeaderText>
              MORE THAN JUST A GYM.
            </HeaderText>
              <p className='my-5 txt-sm'>
                We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
              </p>
              <motion.div>
                {
                  benefits.map((benefit:BenefitTypes) => {
                    <Benefit key={benefit.id}
                      benefit={benefit}
                      setSelectedPage={setSelectedPage}
                    />
                  })
                }
              </motion.div>
          </div>
        </motion.div>
    </section>
  )
}

export default Benefits