
const ArrowCard = ({Icon,isActive,updateIsActive,iconVal}) => {

  const changeActive=()=>{
    if(isActive!=iconVal){
      updateIsActive(iconVal);
    }
  }
  return (
    <div className={`w-[70px] h-[70px] border-2 mx-4 rounded-full flex items-center justify-center hover:border-pink
      ${!(isActive==iconVal) ? 'bg-light-gray' :'bg-purple' }
     `}
     onClick={changeActive}
     >
      <Icon  size={20} className={` ${!(isActive==iconVal) ? 'text-purple' :'text-white'  }`}/>
    </div>
  )
}

export default ArrowCard
