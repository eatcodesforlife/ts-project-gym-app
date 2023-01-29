import HeaderText from "@/shared/HeaderText"
import { Link } from "react-router-dom"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Confetti from "react-confetti";


const MessageSent = () => {

    
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
                   <span className="text-primary-500 ">Hurray!</span> Your message has been successfully sent!
                </HeaderText>
                <p className="text-xl mt-5">We are looking forward to chatting with you.
                    
                    In the meantime feel free to browse our 
                    <Link to='/'>
                        <span className="text-primary-500 hover:text-primary-300 cursor-pointer duration-200"> site!</span>  
                    </Link>
                </p>
            </div>
        </article>
        <Confetti numberOfPieces={150} width={window.innerWidth} height={window.innerHeight}/>
    </section>
  )
}

export default MessageSent