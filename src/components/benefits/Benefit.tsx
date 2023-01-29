import React from 'react'
import { Props } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

const Benefit = ({benefit}: Props) => {
  return (
    <motion.div 
      initial={{ scale: .05 }}
      whileInView={{scale:1}}
      viewport={{amount: .3}}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 30,
      }}  
      className='mt-5 
      rounded-md border-2 
      border-gray-100 px-5 
      py-16 text-center mx-auto max-w-[500px]'>
      <div className='mb-4 flex flex-col items-center gap-y-4 '>
        <span className='rounded-full bg-primary-100 border-2 border-gray-100 p-3'>{benefit?.icon}</span>
        <h1 className='font-bold'>
          {benefit?.title}
        </h1>
        <p className='mb-4 text-sm'>
          {benefit?.description}
        </p>
        <AnchorLink
          className="cursor-pointer text-sm font-bold text-primary-500 
          underline hover:text-secondary-500 transition duration-300"
        >
          Learn more
        </AnchorLink>
      </div>
    </motion.div>
  )
}

export default Benefit