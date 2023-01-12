import { Props, NavMenuLinks } from '@/shared/types'
import { motion } from 'framer-motion'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import HeaderText from '@/shared/HeaderText'

const Benefits = ({setSelectedPage}: Props) => {
  const handleViewPort = () => {
    if(setSelectedPage) setSelectedPage(NavMenuLinks.Benefits)
  }
  return (
    <section id='benefits' 
      className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div 
            onViewportEnter={()=> handleViewPort}
        >
          <div>
            <HeaderText>
              MORE THAN JUST A GYM.
            </HeaderText>
          </div>
        </motion.div>
    </section>
  )
}

export default Benefits