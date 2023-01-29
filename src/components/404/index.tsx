import HeaderText from "@/shared/HeaderText"
import { Link } from "react-router-dom"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"


const NoPage = () => {

    
  return (
    <section className="bg-gray-20 " >
        <article className="relative w-5/6 mx-auto grid  place-items-center h-screen">
            <nav className="absolute left-0 top-20">                
               <Link to='/'>
                <ArrowUturnLeftIcon className="h-8 hover:text-primary-500 cursor-pointer duration-200"/>
               </Link>
            </nav>
            <div className="">

                <HeaderText >
                   <span className="text-primary-500 ">Ooops!</span> This page does not exist.
                </HeaderText>
                <p className="text-xl mt-5">
                    You can browse our 
                    <Link to='/'>
                        <span className="text-primary-500 hover:text-primary-300 cursor-pointer duration-200"> site here!</span>  
                    </Link>
                </p>
            </div>
        </article>
    </section>
  )
}

export default NoPage