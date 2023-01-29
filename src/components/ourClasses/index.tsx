import React from 'react'
import { Props, NavMenuLinks, ClassesTypes } from '@/shared/types'
import { motion } from 'framer-motion'
import HeaderText from '@/shared/HeaderText'
import { ourClasses } from '@/shared/data/programs'
import TrainingProgram from './TrainingProgram'

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section 
        id='ourclasses'
        className='w-full bg-primary-100 py-40 min-h-screen'
    >
        <motion.div
            onViewportEnter={()=> setSelectedPage!(NavMenuLinks.OurClasses)}

        >   
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={ {amount: .5}}
                transition={{ duration: 1, ease: 'easeOut' }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className='mx-auto w-5/6'
            >
                <div className='md:w-3/5'>
                    <HeaderText>Our Classes</HeaderText>
                    <p className='mt-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eaque, neque nam corporis repudiandae eveniet amet quos culpa aspernatur ratione porro esse iure recusandae sed, veniam hic incidunt! Ratione ducimus dolor perferendis recusandae distinctio enim repellat est quas asperiores, laborum, molestias inventore neque quod eos nihil excepturi adipisci officia quos.
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className=' w-[2800px]  whitespace-nowrap '>
                    {
                        ourClasses.map( (program:ClassesTypes) => {
                            return <TrainingProgram key={program.id}
                                program={program}
                            />
                        })
                    }
                </ul>
            </div>
            
        </motion.div>
    </section>
  )
}

export default OurClasses