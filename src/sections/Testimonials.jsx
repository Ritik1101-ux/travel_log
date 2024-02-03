import { avatar, stars } from '../assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-pink text-2xl font-semibold'>Testinomials</p>
      <div className='text-4xl text-center font-bold py-2'>Trust our clients</div>

      <img src={avatar} alt='Avatar' />
      <p className='text-2xl font-bold py-3 text-center'>
        <span className='text-pink'>Mark Smith</span> / Travel Enthusiast</p>
      <img src={stars} alt='Starts' className='py-4'/>
      <p className='w-4/5 py-4 text-slate-gray text-[20px] font-medium text-center'>Travelog made my dream vacation a reality! Captivating content, expert tips—perfect guide for wanderlust. Highly recommend for globetrotters!</p>
    </div>
  )
}

export default Testimonials
