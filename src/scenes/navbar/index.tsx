import { useEffect, useState } from "react"
import { Bars3Icon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Link from "./Link"
import { NavMenuLinks } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import useMediaQuery from "@/hooks/useMediaQuery"
import { Props } from "@/shared/types"
import SideModalMenu from "./SideModalMenu"


const flexBetween = 'flex items-center justify-between'

const Navbar = ({selectedPage,setSelectedPage }: Props) => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const [ isTopPage, setIsTopPage ] = useState(true)
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')
    
    // check if viewport is a the topmost of page
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY === 0 ) {
                setIsTopPage(true)
                setSelectedPage(NavMenuLinks.Home)
            }
            if(window.scrollY !== 0 ) {
                setIsTopPage(false)
            }
        }
        
        window.addEventListener( 'scroll', handleScroll) 
        //clean up function
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])
    //add bg color on nav bar when user scrolls down
    const styleOnScroll = !isTopPage && 'bg-primary-100 drop-shadow'

  return <nav>
    <div className={`${styleOnScroll} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16 `}>
                {/* left menu */}
                <img src={Logo} alt="logo" />
                {/* right menu */}
                { isAboveMediumScreen ? <div className={`${flexBetween} w-full `}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} 
                            page="Home"
                        />
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} 
                            page="Benefits"
                        />
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} 
                            page="Our Classes"
                        />
                        <Link
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} 
                            page="Contact Us"
                        />
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <span>Sign In</span>
                        <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                    </div>
                </div> : <button className="rounded-full bg-secondary-500 p-2 cursor-pointer "
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                >
                    <Bars3Icon className=" h-6 w-6 text-white"/>
                </button> }
            </div>
        </div>
    </div>
    { !isAboveMediumScreen && isMenuOpen && <SideModalMenu 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
        />
    }
  </nav>
}
export default Navbar