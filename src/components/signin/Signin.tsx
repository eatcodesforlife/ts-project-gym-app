import HeaderText from "@/shared/HeaderText"
import { Props } from "@/shared/types"
import GoogleIcon from '@/assets/googleicon.svg'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"




const inputStyles = 'peer w-full bg-primary-300 rounded-md py-2 px-3 text-white placeholder:text-transparent mt-5'


const customPlaceholder = 'absolute bottom-0 left-2 text-sm -translate-y-10 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:py-2 peer-focus:-translate-y-10 peer-focus:p-0 peer-focus:text-gray-500 peer-focus:text-sm duration-100 ease-linear'


const Signin = ({inputType, dispatch, isShowPassword}: Props) => {

  return (
    <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={ {once: true,amount: .5}}
        transition={{ duration: .5, ease:'easeIn'}}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        }}
        className='h-full  max-w-[450px] mx-auto mt-20 '>
        <HeaderText>We are <span className='text-primary-500'>glad</span> to see you back!</HeaderText>
        <form action="" className=' mx-auto flex flex-col justify-center align-center mt-10'>
            
            <div className='w-full relative'>
                <input type="email" name="email" placeholder='email'
                    className={inputStyles}
                />
                <label htmlFor="email"
                    className={`${customPlaceholder}`}
                >Email</label>
            </div>
            <div className='relative w-full'>
                <input type={inputType} name="password"     placeholder='password'
                    className={inputStyles}
                />
                <label htmlFor="email"
                    className={customPlaceholder}
                >Password</label>
                {
                    isShowPassword === false ? <button onClick={(e)=> {
                            e.preventDefault()
                            return dispatch!({
                            type: 'SHOW',
                            payload: {
                                inputType:'text',
                                isShowPassword: true
                            }
                        })}
                    } className='bg-none text-xs  absolute right-0 p-3 bottom-0'>
                        Show
                    </button>
                    : <button onClick={ (e)=> {
                            e.preventDefault()
                                return dispatch!({
                                    type: 'HIDE',
                                    payload: {
                                        inputType: 'password',
                                        isShowPassword: false
                                    }
                                })
                            }
                        } 
                        className='bg-none text-xs  absolute right-0 p-3 bottom-0'>
                        Hide
                    </button>
                }
            </div>
            <button 
                onClick={(e) => e.preventDefault()}
                className="primary-btn w-full mt-5">Sign In</button>
        </form>

        <button className="primary-btn w-full flex justify-center items-center mt-5">
            <img src={GoogleIcon} alt="google icon" className="h-5 mr-5"/>
            Sign in with Google
        </button>
        <p className="text-center mt-10 text-sm">
            Not yet a member? 
           <Link to='/signup' 
            className="ml-2 hover:text-primary-300">Click Here</Link> 
        </p>
        <p className="text-center mt-5 text-sm">
           <button 
            className="ml-2 hover:text-primary-300">Reset password</button> 
        </p>
    </motion.div>
  )
}

export default Signin