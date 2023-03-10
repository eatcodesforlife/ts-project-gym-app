import {Dispatch} from "react"

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
    setSelectedPage?: (value:NavMenuLinks) => void
    benefit?: BenefitTypes
    program?: ClassesTypes
    inputType?: string
    isShowPassword?: boolean
    isAlreadymember?: boolean
    dispatch?:Dispatch<{ type: string, payload:PayloadType }>
}


export interface BenefitTypes  {
    id: number
    icon: JSX.Element,
    title: string,
    description: string,
}


export interface ClassesTypes {
    id: string
    title: string
    description?: string
    image_url?: string
}


export type PayloadType = {
    inputType: string,
    isShowPassword: boolean
}
