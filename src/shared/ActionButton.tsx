import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { NavMenuLinks } from './types'
import { Props } from './types'


const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer transition duration-500'
        onClick={() => setSelectedPage(NavMenuLinks.ContactUs)}
        href={`#${NavMenuLinks.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton