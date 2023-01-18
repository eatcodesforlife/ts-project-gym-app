import { Props } from '@/shared/types'

const Classes = ({program}:Props) => {
  return (
    <li className='relative mx-5 inline-block h-[350px] w-[450px]'>
      <div className='overlay'>
        <h4 className='font-bold text-lg'>{program?.title}</h4>
        <p className='my-5'>{program?.description}</p>
        <button className='font-semibold bg-transparent rounded-md border border-white py-2 px-10'>
          Learn more
        </button>
      </div>
      <img src={program?.image_url} alt={program?.title} />
    </li>
  )
}

export default Classes