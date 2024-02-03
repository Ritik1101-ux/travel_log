

const StatCard = ({title,text}) => {
  return (
    <div className=" border rounded-[30px] mt-3 flex justify-center items-center flex-col min-h-[200px] min-w-[200px] ">
      <p className="text-[#FF5722]  text-xl font-bold py-3">{title}</p>
      <p className="text-slate-gray text-md">{text}</p>
    </div>
  )
}

export default StatCard
