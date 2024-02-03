import {services} from '../constants/constants'
import ServiceCard from '../components/ServiceCard'
const Categories = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
       <p className='text-pink text-xl  font-bold '>SERVICES</p>
       <h3 className='py-3 text-3xl  font-bold text-center'>Our top categories for you</h3>

       <div className='flex flex-wrap justify-around w-full  '>
         { services.map((service)=>(
          <ServiceCard key={service.id} {...service} />
         ))

         }
       </div>
    </div>
  )
}

export default Categories
