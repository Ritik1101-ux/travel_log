import { useState } from "react";
import { ArrowCard, DestinationCard } from "../components/export";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { destinations } from "../constants/constants";

const TopDestinations = () => {

  const left=destinations.slice(0, 3);
  const right=destinations.slice(3, 6);

  const [isActive, setisActive] = useState("Left");
  const [filterDestination, setFilterDestination] = useState(left);



  const updateActive = (icon) => {
    if (icon == "Left") {
      setFilterDestination(left);
    } else {
      setFilterDestination(right);
    }
    setisActive(icon);
  };
  
  const icons = [
    {
      Icon: FaArrowLeft,
      isActive: isActive,
      iconVal: "Left",
    },
    {
      Icon: FaArrowRight,
      isActive: isActive,
      iconVal: "Right",
    },
  ];

  return (
    <div className="flex flex-col justify-center sm:justify-start">
      <p className="text-pink  text-xl font-semibold max-sm:text-center">
        TOP DESTINATIONS
      </p>
      <div className="flex justify-between items-center flex-wrap">
        <p className="text-4xl font-bold text-center ">
          Explore top destinations
        </p>
        <div className="flex mt-2 max-sm:w-full max-sm:justify-center max-sm:items-center">
          {icons.map((icon) => (
            <ArrowCard
              key={icon.Icon}
              {...icon}
              updateIsActive={updateActive}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center md:justify-between items-center flex-wrap">
        {filterDestination.map((destination) => (
          <DestinationCard key={destination.id} {...destination} />
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
