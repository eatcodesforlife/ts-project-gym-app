
import Benefits from '../components/benefits'
import Contact from '../components/contact'
import Hero from '../components/hero'
import OurClasses from '../components/ourClasses'
import { Props } from '@/shared/types'
import MessageSent from '@/components/success'

const Home = ({selectedPage,setSelectedPage}:Props) => {
    
  return (
    <>
        <Hero selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <Contact setSelectedPage={setSelectedPage}/>
    </>
  )
}

export default Home