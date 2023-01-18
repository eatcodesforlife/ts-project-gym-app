import { useState } from 'react'
import Navbar from '@/scenes/navbar'
import { NavMenuLinks } from '@/shared/types'
import Home from './scenes/home'
import Benefits from './scenes/benefits'
import OurClasses from './scenes/ourClasses'

function App() {
  const [ selectedPage, setSelectedPage ] = useState<NavMenuLinks>(NavMenuLinks.Home)
  
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
    </div>
  )
}



export default App
