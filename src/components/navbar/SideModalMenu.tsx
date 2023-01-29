import { Props } from '@/shared/types'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
import NavMenuLink from './NavMenuLink'


function SideModalMenu({setSelectedPage, selectedPage, setIsMenuOpen, isMenuOpen}: Props) {
  const handleSideModal = () => {
    if(setIsMenuOpen) setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
    {/* close icon */}
    <span className="flex justify-end p-12">
        <button onClick={handleSideModal}>
            <XMarkIcon className="h-6 w-6 text-gray-400 "/>
        </button>
    </span>
    {/* nav links */}
    <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
        <NavMenuLink
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} 
            page="Home"
        />
        <NavMenuLink
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} 
            page="Benefits"
        />
        <NavMenuLink
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} 
            page="Our Classes"
        />
        <NavMenuLink
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} 
            page="Contact Us"
        />
    </div>
    <NavLink to='/signin'>
     <p className='text-center mt-20  cursor-pointer hover:text-primary-300'>Sign In</p>
    </NavLink>
</div>
  )
}

export default SideModalMenu