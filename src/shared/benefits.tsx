import { BenefitTypes } from "./types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

export const benefits:Array<BenefitTypes> = [
    {
        id: 1,
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: 'State Of The Art Facilities',
        description: 'Adipisicing ad amet quis adipisicing quis sit duis eu exercitation.' 
    },
    {
        id: 2,
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: 'Unlimited Access To All Our Classes',
        description: 'Adipisicing ad amet quis adipisicing quis sit duis eu exercitation.' 
    },
    {
        id: 3,
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: 'Expert and Pro Trainers',
        description: 'Adipisicing ad amet quis adipisicing quis sit duis eu exercitation.' 
    }
]