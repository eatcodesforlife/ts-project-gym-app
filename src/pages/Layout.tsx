import Navbar from '@/components/navbar'
import {Outlet} from 'react-router-dom'
import { Props } from '@/shared/types'


const Layout = ({selectedPage, setSelectedPage}:Props) => {
  return (
    <>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Outlet />
    </>
  )
}

export default Layout