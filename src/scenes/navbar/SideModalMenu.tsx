import { Props } from '@/shared/types'
import Link from './Link'
import { XMarkIcon } from '@heroicons/react/24/solid'


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
</div>
  )
}

export default SideModalMenu