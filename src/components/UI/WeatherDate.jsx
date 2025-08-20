import image1 from '../../assets/cloud.png'; 

export default function WeatherDate({day, degree, isActive}){
    return(
        <div className={`lg:w-[80px] h-auto lg:h-[110px] rounded-[8px] p-[8px] pl-3  grid gap-[8px] bg-white text-[16px] font-[400] font-[Lora] cursor-pointer shadow-xl ${
        isActive ? "border-b-4 border-[1px] border-[#A49A9A]  border-b-[#FF7F18]" : "border-[1px] border-[#A49A9A] hover:border-b-[#FF7F18] hover:border-b-4"
      } `}>
            <p className='pl-2'>{day}</p>
            <img 
            className='w-[35px] h-[32px]'
            src={image1} 
            alt="cloud" />
            <p >{degree}</p>
        </div>
    )
}