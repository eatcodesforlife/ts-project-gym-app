
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import { useReducer } from 'react'
import Signin from './Signin'
import { PayloadType } from '@/shared/types'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

type ActionTypes = | { type: string , payload:PayloadType}

const defaultState:PayloadType = {
    inputType : 'password',
    isShowPassword: false
}

const reducerFunction=( state:PayloadType, action:ActionTypes ) => {

    switch(action.type){
        case 'SHOW':
            return {
                ...state,
                inputType: action.payload.inputType,
                isShowPassword: action.payload.isShowPassword
            }
        case 'HIDE':
            return {
                ...state,
                inputType: action.payload.inputType,
                isShowPassword: action.payload.isShowPassword
            }

        
    }return state
}
type Reducer<S, A> = (prevState: S, action: A) => S

const Login = () => {

    const [ {inputType, isShowPassword}, dispatch ] = useReducer<Reducer<any, any>>( reducerFunction, defaultState)

    
    
  return (
    <section className="min-h-screen bg-primary-100 grid items-center ">
        <article className='mx-auto w-5/6  '>
            <nav className=' top-0 font-bold cursor-pointer hover:text-primary-300 duration-300 inline-block'>
               <Link to='/' ><ArrowUturnLeftIcon className='w-6 h-6 '/></Link> 
            </nav>
            <div className=' w-full md:flex md:justify-between align-center'>
            
                {/* sign up/sign form form */}
                <Signin 
                    dispatch={dispatch}
                    inputType={inputType} 
                    isShowPassword={isShowPassword}
                    />
                {/* image */}
                <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    viewport={ {once: true,amount: .5}}
                    transition={{ duration: .5, ease:'easeIn'}}
                    variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                    className='hidden md:flex md:justify-center md:align-center'>
                    <img src={HomePageGraphic} alt='login image' />
                </motion.div>
            </div>
        </article>
    </section>
  )
}

export default Login