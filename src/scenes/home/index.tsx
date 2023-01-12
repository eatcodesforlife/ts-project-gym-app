import React from 'react'
import { NavMenuLinks, Props } from '@/shared/types'
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { setPage } from '@/shared/setPage';

const Home = ({setSelectedPage}: Props) => {
    
    // const setPage = (href:NavMenuLinks) => {
    //   if(setSelectedPage) setSelectedPage(href)
    // }
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')
  return <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-10'>
    {/*  image and main header */}
    <motion.div
      onViewportEnter={()=> setPage(setSelectedPage,NavMenuLinks.Home)}
      className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
      {/* main header */}
      
      <div className='z-10 mt-32 md:basis-3/5'>
        {/* headings */}
        <motion.div 
          initial='hidden'
          whileInView='visible'
          viewport={ {amount: .5}}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='md:-mt-20'>
            <div className='relative' >
              <div className='before:absolute before:-mt-20 md:before:content-evolveText before:z-[-2]'>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
        </motion.div>
        {/* actions */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{scale:1}}
          viewport={ {amount: .5}}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: .5,
            delay: 1
          }}  
          className='mt-8 flex items-center gap-8 justify-start'>
          <ActionButton setSelectedPage={setSelectedPage}>
            Join now
          </ActionButton>
          <AnchorLink 
            className="text-sm font-bold text-primary-500 
            underline hover:text-secondary-500 transition duration-300"
            href={`${NavMenuLinks.ContactUs}`}
            onClick={() => setPage(NavMenuLinks.ContactUs)}
          >
            <p>Learn More</p>
          </AnchorLink>
        </motion.div>
      </div>
      
      {/* image */}
      <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={ {amount: .5}}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='z-10 flex basis-3/5 justify-center md:ml-40
        md:mt-16 md:justify-items-end'>
        <img src={HomePageGraphic} alt="home page graphic" />
      </motion.div>
    </motion.div>
    {/* sponsors */}
    {
      isAboveMediumScreen && (
        <div className='h-[150px] w-full bg-primary-100 py-10 flex items-center'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-full justify-between items-center'>
              <img src={SponsorForbes} alt="sponsor - forbes" className='object-contain'/>
              <img src={SponsorFortune} alt="sponsor - fortune" className='object-contain'/>
              <img src={SponsorRedBull} alt="sponsor - Redbull" className='object-contain'/>
            </div>
          </div>
        </div>
      )
    }
  </section>
}

export default Home