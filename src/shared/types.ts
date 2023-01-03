export enum NavMenuLinks {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus'
} 

export type Props = {
    children?: React.ReactNode
    page?: string
    selectedPage?: NavMenuLinks
    isMenuOpen?: boolean
    setIsMenuOpen?: (value: boolean) => void
    setSelectedPage: (value:NavMenuLinks) => void
}
