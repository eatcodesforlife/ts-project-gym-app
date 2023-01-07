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




const Home = ({setSelectedPage}: Props) => {

    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')
  return <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-10'>
    {/*  image and main header */}
    <div className='md:flex mx-auto w-5/6 items-center justify-center'>
      {/* main header */}
      <div >
        <div >
          <div>
            {/* headings */}
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>

          <ActionButton setSelectedPage={setSelectedPage}>
            Join now
          </ActionButton>
          <AnchorLink 
            className="text-sm font-bold text-primary-500 
            underline hover:text-secondary-500 transition duration-300"
            href={`${NavMenuLinks.ContactUs}`}
            onClick={() => setSelectedPage(NavMenuLinks.ContactUs)}
          >
            <p>Learn More</p>
          </AnchorLink>
        </div>
      </div>
      {/* image */}
      <div>
        <img src={HomePageGraphic} alt="home page graphic" />
      </div>
    </div>
    {/* sponsors */}
    {
      isAboveMediumScreen && (
        <div>
          <div>
            <div >
              <img src={SponsorForbes} alt="sponsor - forbes" />
              <img src={SponsorFortune} alt="sponsor - fortune" />
              <img src={SponsorRedBull} alt="sponsor - Redbull" />
            </div>
          </div>
        </div>
      )
    }
  </section>

}

export default Home