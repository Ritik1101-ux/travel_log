import {FeatureCard} from '../components/export'
import {Features} from "../constants/constants";
import { keyFeatures } from '../assets'

const KeyFeature = () => {
  return (
    <div className='flex max-md:flex-col-reverse '>
      <div className=' flex flex-col w-3/5 max-md:w-full'>
      <p className='text-xl text-pink font-bold px-4 py-3'>KEY FEATURES</p>
      <div className='text-4xl font-bold font-inter px-4 py-3'>We offer the best services</div>
      <p className='text-md font-medium font-inter px-4 text-slate-gray py-3'> 
        Top-notch services define us. Experience excellence with our
        unparalleled offerings. Your satisfaction is our priority. Choose us for
        unparalleled quality.
      </p>
      <div >
        {
          Features.map((feature)=>(
            <FeatureCard key={feature.id} {...feature} featureCard={true} />
          ))
        }
      </div>
      </div>
<div className='w-full flex justify-end items-center'>
        <img src={keyFeatures} alt="Feature Image"  className=''/>
        </div>
    
    </div>
  );
};

export default KeyFeature;
