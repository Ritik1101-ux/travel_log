import { IoMail } from "react-icons/io5";
import { subGrid } from "../assets";

const Subscribe = () => {
  return (
    <div className="relative w-full bg-[#FFFBF0] max-sm:px-6 max-sm:py-6">
      <img src={subGrid} alt="Sub Grid" className="max-sm:hidden absolute mt-[-12px] ml-[-12px]" />
      <div className="flex justify-center items-center flex-col py-16">
        <p className="text-xl text-pink font-semibold text-center py-4">SUBSCRIBE TO OUR NEWSLETTER</p>
        <div className="text-[40px] font-bold sm:w-3/5 w-full text-center py-4 ">Prepare yourself & let’s explore the beauty of the world</div>
        <div className="flex justify-center items-center max-sm:flex-col py-5  w-full">
          <div className="flex justify-center items-center bg-white w-2/5  max-sm:w-4/5 h-[55px] rounded-xl">
            <IoMail size={30} className="text-slate-gray mx-1"/>
            <input type="text" placeholder=" Your Mail"  className="outline-none border-none w-4/5 text-slate-gray text-xl"/>
          </div>
          <button className="rounded-md w-1/5   max-sm:w-4/5  my-3 mx-1 text-xl bg-purple text-white font-semibold  border-none h-[50px]">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
