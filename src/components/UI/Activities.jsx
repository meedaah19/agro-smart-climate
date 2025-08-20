import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Activities({image, period, location, list1, list2, list3, list4, list5, alt}){
    
    return(
        <div className="lg:w-[469px] h-auto lg:h-[380px] rounded-[30px] py-[16px] px-[32px] grid gap-[16px] bg-[#FFFFFF] shadow-2xl ">

            <div className="lg:w-[405px] h-auto lg:h-[155px] flex lg:flex-row flex-col gap-[16px]"> 
                <img className="w-[229px] h-[155px] rounded-[8px]" src={image} alt={alt} />
                <div className="w-[160px] h-auto lg:h-[155px] grid gap-[8px] ">
                    <div className="w-[160px] h-auto lg:h-[55px] rounded-[8px] py-[8px] px-[16px] flex gap-[10px] font-[700] text-[13.33px] font-[Lora] bg-[#C6E4E1]">
                    <p>{period}</p>
                    </div>
                    <div className="w-[160px] h-auto lg:h-[92px] flex flex-col gap-4 lg:gap-0 justify-between">
                        <div className="flex gap-[10px]">
                            <FaLocationDot className="h-8"/>
                            <p className="font-[Lora] font-[400] text-[13px]">{location}</p>
                        </div>
                        <div className="bg-[#FF8E28]  w-[160px] h-auto lg:h-[38px] rounded-[8px] py-[8px] px-[16px] text-[16px] font-[700] font-[Lora] ">
                            <p>Weather report</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="lg:w-[405] h-auto lg:h-[189px]">
                <div className=" flex justify-between lg:py-0 py-2">
                    <h6 className="font-[400] font-[Poppins] text-[19.2px] ">Activities</h6>
                    <Link className="text-[#CE5F05] font-[400] font-[Lora] text-[13.33px] underline ">Need a tool?</Link>
                </div>
                <div className="lg:w-[405px] h-auto lg:h-[160px] font-[600] font-[Lora] text-[16px] list-decimal" >
                    <li>{list1}</li>
                    <li>{list2}</li>
                    <li>{list3}</li>
                    <li>{list4}</li>
                    <li>{list5}</li>
                </div>

            </div>

        </div>
    )
}