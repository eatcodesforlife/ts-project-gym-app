import AnchorLink from 'react-anchor-link-smooth-scroll'
import { NavMenuLinks } from '@/shared/types'
import { Props } from '@/shared/types'

function MenuLink({
    page,
    selectedPage,
    setSelectedPage
}: Props) {
    const link = page?.toLowerCase().replace(/ /g,'') as NavMenuLinks

  return (
    
    <AnchorLink
        offset={88}
        className={`${selectedPage === link && "text-primary-500" }
            transition duration-500 hover:text-primary-300
        `}
        href={`#${link}`}
        onClick={()=>  setSelectedPage!(link)}
    >
        {page}
    </AnchorLink>

  )
}

export default MenuLink