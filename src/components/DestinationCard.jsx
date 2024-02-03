import { FaStar } from "react-icons/fa";
const DestinationCard = ({ image, price, name, location, rating }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg max-sm:mx-0 max-md:mx-2 my-3">
      <img className="w-full" src={image} alt="Destination Image" />
      <div className="px-6 py-4">
        <div className="text-md text-pink  font-semibold font-inter">{price}</div>
        <div className="font-bold text-xl mb-2 text-purple">{name}</div>
        <p className="text-slate-gray font-semibold text-md text-base">
        {location}
        </p>
      </div>
      <div className="px-3 py-4 flex items-center text-[#FF5722] ">
        <span className="inline-block  rounded-full px-3 text-xl font-semibold  ">
          {rating}
        </span>
       <FaStar size={20}/>
   
      </div>
    </div>
  );
};

export default DestinationCard;
