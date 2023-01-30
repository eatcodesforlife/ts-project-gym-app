import HeaderText from "@/shared/HeaderText"
import { Props, NavMenuLinks } from "@/shared/types"
import { motion } from "framer-motion"
import ContactUsGraphic from '@/assets/ContactUsGraphic.png'
import { useForm } from "react-hook-form"
import Footer from "@/components/footer"


const inputContainer = 'relative w-full mt-2 max-w-[500px]'
const inputStyles = 'peer w-full p-2 rounded-lg bg-primary-300 placeholder-transparent mb-5  text-white focus:outline-none'

const customPlaceholder = 'pb-5 font-semi-bold	pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-sm opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'


const Contact = ({setSelectedPage}:Props) => {

  const onSubmit = async (e:Event) => {
    e.preventDefault()
  }

  return (
    <section 
      id="contactus"
      className="bg-gray-20  ">
        <div  className="mx-auto w-5/6 pt-24 pb-31">
          <motion.div 
            className="md:w-3/5"
            onViewportEnter={() => setSelectedPage!(NavMenuLinks.ContactUs)}
            initial='hidden'
              whileInView='visible'
              viewport={ {amount: .5}}
              transition={{ duration: 1, ease:'easeInOut'}}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >

            <HeaderText >
              We'd <span className="text-primary-500">love</span> to hear from you!
            </HeaderText>

          </motion.div>

          <div className="mt-10 w-full md:flex md:justify-between items-center text-center pb-12">
            <div className="w-full">
              <img src={ContactUsGraphic} alt='contact us graphics' className="w-full"/> 
            </div>
            <div className="md:w-full mt-10">
              <form
                name="gym contact"
                action='/messagesent'
                method="POST"
                data-netlify="true"
                data-netlify-honeypot='bot-field'
                className="flex flex-col items-center md:items-start "
              >
                <div className={inputContainer}>
                  <input 
                    required
                    placeholder="NAME"
                    type='name' 
                    name="name"
                    className={`${inputStyles}`}
                  />
                  <label htmlFor="name" className={customPlaceholder} >NAME</label>
                </div>
                <div className={inputContainer}>
                  <input 
                    required
                    placeholder="EMAIL"
                    name="email"
                    className={`${inputStyles}`}
                  />
                  <label htmlFor="email" className={customPlaceholder}>EMAIL</label>
                </div>
                <div className={inputContainer}>
                   <textarea required
                    className={inputStyles}
                    placeholder="MESSAGE"
                    rows={4}
                    cols={50}
                    name='message'
                  />
                  <label htmlFor="message" className={customPlaceholder}>MESSAGE</label>

                </div>
                <button 
                  type="submit"
                  className='primary-btn'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div> 
        <Footer />
    </section>
  )
}

export default Contact