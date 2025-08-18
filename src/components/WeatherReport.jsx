// import { useState } from "react";
// import {FaVolumeMute, FaVolumeUp } from "react-icons/fa";
// import image1 from 'e67cbc0e8f83d97697281a3ab44e48063ad59ec7.jpg'; 

// export default function WeatherReport(){ 
//     const [volume, setVolume] = useState(true);

//     function handleClick(){
//         setVolume(!volume);
//     }


//     return(
//         <div className='lg:w-[1157px] h-auto lg:h-[536px] flex flex-col gap-[8px]'>

//             <div className="lg:w-[1030px] h-auto lg:h-[35px] flex justify-between gap-[10px] ">
//                 <h1 className="font-[Poppins] text-[23.04px]">Weather report</h1>
//                 <button onClick={handleClick}>{volume ? <FaVolumeUp/> : <FaVolumeMute/>}</button>                
//             </div>

//             <div className="lg:w-[1157px] h-auto lg:h-[493px]">
//                 <div className="lg:w-[1125px] h-auto lg:h-[253px] rounded-[30px] flex justify-between p-[32px] bg-gradient-to-l from-[#FFFFFF]/96 via-[#FFFFFF]/0 to-[#FFFFFF]/96 ">
                
//                 </div>

//             </div>
//          </div>
//     )
// }