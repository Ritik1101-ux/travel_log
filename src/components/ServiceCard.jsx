const ServiceCard = ({ icon, title, content }) => {
  return (
    <div className="my-4 border rounded-[20px] hover:scale-[1.05] shadow-md min-h-[280px] min-w-[250px] w-[370px]  flex justify-center items-center flex-col align-item-center ">
      <img src={icon} alt="ServiceImg" className="w-[70px]" />
      <h3 className="text-2xl font-inter py-2 font-semibold ">{title}</h3>
      <p className="text-center text-slate-gray  text-md px-10 font-circular  ">
        {content}
      </p>
    </div>
  );
};

export default ServiceCard;
