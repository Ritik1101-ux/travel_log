
const FeatureCard = ({bg,title,text,icon}) => {

  return (
    <div className="flex border rounded-xl items-center mt-3 mx-4">
     <div className={`${bg} rounded-[15px] mx-4 my-4`}>
      <img src={icon} alt="Icon Image"  className={`w-[70px] px-4 py-4`}/>
      </div>
      <div className="px-2 py-6">
        <p className=" text-2xl font-semibold">{title}</p>
        <p className="text-slate-gray text-md py-1">{text}</p>
      </div>
    </div>
  )
}

export default FeatureCard
