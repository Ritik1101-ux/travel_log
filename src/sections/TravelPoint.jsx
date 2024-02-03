import { travelPoint } from "../assets";
import { stats } from "../constants/constants";
import {StatCard} from '../components/export'
const TravelPoint = () => {
  return (
    <div className="flex max-md:flex-col max-md:justify-center max-md:items-center">
      <div className="w-full">
        <img src={travelPoint} alt="Travel Point" />
      </div>
      <div className="w-3/5">
        <p className="text-pink text-xl font-bold my-3 px-1 ">TRAVEL POINT</p>
        <div className="text-4xl font-bold px-1  ">We helping you find your dream location</div>
        <p className="my-3 text-slate-gray text-md px-1">
          Discover dream destinations with Travel Point. From sun-soaked beaches
          to historic wonders, embark on unforgettable journeys with our
          personalized insights.
        </p>
        <div className="flex  flex-wrap justify-between max-sm:justify-center">
          {stats.map((stat)=>(
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default TravelPoint;
