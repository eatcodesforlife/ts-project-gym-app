import { BenefitTypes } from "../types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

export const benefits:Array<BenefitTypes> = [
    {
        id: 1,
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: 'State Of The Art Facilities',
        description: 'Do fugiat ullamco qui exercitation aute in consectetur veniam adipisicing. Nulla Lorem dolore do deserunt nostrud eu non dolore.' 
    },
    {
        id: 2,
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: 'Unlimited Access To All Our Classes',
        description: 'Do fugiat ullamco qui exercitation aute in consectetur veniam adipisicing. Nulla Lorem dolore do deserunt nostrud eu non dolore.' 
    },
    {
        id: 3,
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: 'Expert and Pro Trainers',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eligendi numquam reprehenderit ipsum itaque? Molestiae corrupti cumque hic suscipit error.'
    }
]