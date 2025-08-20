import { useState } from "react";
import {FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import image1 from '../assets/e67cbc0e8f83d97697281a3ab44e48063ad59ec7.jpg';
import image2 from '../assets/cloud.png'; 
import { FaLocationDot } from "react-icons/fa6";
import image3 from '../assets/cd2151bee3f37710af240a3dca744ea93e35e026.jpg';
import WeatherTime from "./UI/WeatherTime";
import WeatherDate from "./UI/WeatherDate";

export default function WeatherReport(){ 
    const [volume, setVolume] = useState(true);
    const today = new Date().toLocaleDateString("en-US", { weekday: "short" });

     const week = [
        { day: "Mon", degree: "18° / 24°" },
        { day: "Tue", degree: "18° / 24°" },
        { day: "Wed", degree: "18° / 24°" },
        { day: "Thu", degree: "18° / 24°" },
        { day: "Fri", degree: "18° / 24°" },
        { day: "Sat", degree: "18° / 24°" },
        { day: "Sun", degree: "18° / 24°" },
        { day: "Mon", degree: "18° / 24°" },
        { day: "Tue", degree: "18° / 24°" },
        { day: "wed", degree: "18° / 24°" },
    ];

    const time = [
        {degree:'18°', time:'10:00'},
        {degree:'28°', time:'11:00'},
        {degree:'28°', time:'12:00'},
        {degree:'29°', time:'13:00'},
        {degree:'24°', time:'14:00'},
        {degree:'21°', time:'15:00'},
        {degree:'28°', time:'16:00'},
        {degree:'14°', time:'17:00'},
        {degree:'28°', time:'18:00'},
        {degree:'27°', time:'19:00'},
    ];

    function handleClick(){
        setVolume(!volume);
    }


    return(
        <div className='lg:w-[1000px] h-auto lg:h-[536px]  flex flex-col gap-[8px]'>

            <div className="lg:w-[1030px] h-auto lg:h-[35px] w-[300px] flex justify-between gap-[10px] ">
                <h1 className="font-[Poppins] text-[23.04px]">Weather report</h1>
                <button 
                onClick={handleClick}>
                    {volume ? <FaVolumeUp/> : <FaVolumeMute/>}
                </button>                
            </div>

            <div className="lg:w-[1130px] h-auto lg:h-[493px] ">

                <div className="lg:w-[1020px] h-auto lg:h-[253px] rounded-[30px] flex  lg:flex-row md:flex-row flex-col justify-between p-[32px] bg-gradient-to-l from-[#FFFFFF]/96 via-[#FFFFFF]/0 to-[#FFFFFF]/96  relative overflow-hidden shadow-lg">

                     <div className="absolute inset-0 flex items-center justify-center">
                        <img
                        src={image1}
                        alt="Rain effect"
                        className="w-80 hidden md:block object-cover opacity-100 rotate-160"
                        style={{
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "100% 100%",
                        maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                        maskRepeat: "no-repeat",
                        maskSize: "100% 100%"
                    }}
                        />
                    </div>

                    <div className="lg:w-[700px] h-auto lg:h-[180px] flex flex-col gap-[16px]">
                        <div className="lg:w-[700px] h-auto lg:h-[90px] flex gap-[16px">
                            <img
                            className="w-[96px] h-[80px]"
                            src={image2} alt="cloud" />
                            <div className="lg:w-[600px] h-auto lg:h-[80px] flex flex-col ">
                                <h3 className="text-[33.1px] font-[Poppins]">18°C</h3>
                                <div className="flex gap-[10px]">
                                <FaLocationDot className="h-8"/>
                                <p className="font-[Lora] font-[400] text-[13px]">Ishiagu Amaeze Amaelzu, <br /> Ebonyi state.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[700px] h-auto lg:h-[29px] text-[19.2px] font-[Poppins] font-[400] grid gap-[19px]">
                            <p>Rain fall and cloudy.</p>
                            <p>12th May, 2025</p>
                        </div>
                    </div>

                    <div className="lg:w-[300px] h-auto lg:h-[180px] flex gap-[8px]">
                        <img 
                        className="w-[100px]
                        h-[180px] rounded-[10px]"
                        src={image3} 
                        alt="plant" />
                        <div className="w-[200px] h-[180px] flex flex-col gap-[8px]">
                        <div className="bg-[#C6E4E1] rounded-[8px] py-[8px] px-[16px] font-[700] text-[16px] font-[Poppins] ">
                            <h3>Erosion: Danger period, Act fast</h3>
                        </div>
                        <p>Precipitation: 100%</p>
                        <p>Humidity: 100%</p>
                        <p>Wind: 20%</p>
                        </div>
                    </div>
                
                </div>

            </div>

           <div className="w-full h-auto flex flex-col gap-4 lg:w-[1020px] lg:h-[200px]">
    
    {/* Time Row */}
    <div className="w-full h-auto flex gap-4 overflow-x-auto lg:overflow-visible lg:justify-between lg:h-[90px]">
        {time.map((item, index) => (
            <WeatherTime
                key={index}
                time={item.time}
                degree={item.degree}
            />
        ))}
    </div>

    {/* Week Row */}
    <div className="w-full h-auto flex gap-4 overflow-x-auto lg:overflow-visible lg:justify-between lg:h-[90px]">
        {week.map((item, index) => (
            <WeatherDate
                key={index}
                day={item.day}
                degree={item.degree}
                isActive={item.day === today}
            />
        ))}
    </div>
</div>
         </div>
    )
}