import image1 from '../../assets/cloud.png'; 

export default function WeatherTime({time, degree}){
    return(
        <div className="lg:w-[80px] h-auto lg:h-[90px] grid gap-[8px] pl-4 text-[16px] font-[400] font-[Lora]">
            <p>{time}</p>
            <img 
            className='w-[35px] h-[32px]'
            src={image1} 
            alt="cloud" />
            <p className='pl-2'>{degree}</p>
        </div>
    )
}