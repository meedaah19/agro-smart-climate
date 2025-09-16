import { useEffect, useState } from "react";
import {FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import image1 from '../assets/e67cbc0e8f83d97697281a3ab44e48063ad59ec7.jpg';
import image2 from '../assets/cloud.png'; 
import { FaLocationDot } from "react-icons/fa6";
import image3 from '../assets/cd2151bee3f37710af240a3dca744ea93e35e026.jpg';
import WeatherTime from "./UI/WeatherTime";
import WeatherDate from "./UI/WeatherDate";
import { fetchWeather } from "./api";

export default function WeatherReport(){ 
    const [volume, setVolume] = useState(true);
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const today = new Date().toLocaleDateString("en-US", { weekday: "short" });

    function handleClick(){
        setVolume(!volume);
    }

    useEffect(() => {
  async function loadWeather() {
    try {
      const data = await fetchWeather();
      setWeather(data);      
      setForecast(data.forecast || []);
    } catch (err) {
      console.error("Error loading weather:", err);
    }
  }
  loadWeather();
}, []);


  if (!weather) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <p>Loading weather...</p>
      </div>
    );
  }


    return(
        <div className='lg:w-[1030px] h-auto lg:h-[536px]  flex flex-col gap-[25px]'>

            <div className="lg:w-[1030px] h-auto lg:h-[35px] w-[300px] flex justify-between gap-[25px] ">
                <h1 className=" font-[Poppins] text-[23.04px]">Weather report</h1>
                <button
                className="cursor-pointer" 
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
                                <h3 className="text-[33.1px] font-[Poppins]">{Math.round(weather.temp)}°C</h3>
                                <div className="flex gap-[10px]">
                                <FaLocationDot className="h-8"/>
                                <p className="font-[Lora] font-[400] text-[13px]">{weather.city}, <br /> {weather.country}.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[700px] h-auto lg:h-[29px] text-[19.2px] font-[Poppins] font-[400] grid gap-[19px]">
                            <p>{weather.description}</p>
                            <p>{new Date().toLocaleDateString()}</p>
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
                            <h3>Weather Alert</h3>
                        </div>
                        <p>Precipitation: {weather.precipitation || 0}%</p>
                        <p>Humidity: {weather.humidity}%</p>
                        <p>Wind: {weather.wind}%</p>
                        </div>
                    </div>
                
                </div>

            </div>

           <div className="w-full h-auto flex flex-col gap-4 lg:w-[1020px] lg:h-[200px]">
    
            <div className="w-full h-auto flex gap-4 overflow-x-auto lg:overflow-visible lg:justify-between lg:h-[90px]">
                {weather.hourly.map((item, i) => (
                        <WeatherTime key={i} time={item.time} degree={`${Math.round(item.temp)}°`} />
                ))}
            </div>

            </div>

            <div className="w-full h-auto flex gap-4 overflow-x-auto lg:overflow-visible lg:justify-between lg:h-[90px]">
                 {weather.daily.map((item, i) => (
                    <WeatherDate
                        key={i}
                        day={item.day}
                        degree={`${Math.round(item.min)}° / ${Math.round(item.max)}°`}
                    isActive={item.day === today}
                    />
                ))}
            </div>
        </div>
    )
}