import {customers} from '../constants/constants'

const Partners = () => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      { customers.map((item)=>(
        <img key={item.id} src={item.logo} alt="Partners Logo" className='px-10 py-4 max-sm:min-w-[250px]' />
      ))
      }
    </div>
  )
}

export default Partners
