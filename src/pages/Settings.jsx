import { FaBell, FaLanguage, FaMicrophone, FaThermometer, FaBookOpen } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import { FiLogOut, FiMonitor, FiWifiOff } from 'react-icons/fi';
import { useState } from 'react';

export default function Settings(){
     const [showLanguage, setShowLanguage] = useState(false);
     const [language, setLanguage] = useState("English");
       const [active, setActive] = useState(false);


    return(
        <div className="lg:w-[1440px] w-full h-auto lg:h-[1100px] flex lg:gap-[32px] bg-gradient-to-b from-[#A9DCD7] pb-[0px] via-[#FFFFFF] to-[#A9DCD7]  ">

            <Sidebar/>

           <div className="relative z-[1] h-auto w-[320px] md:w-[800px] pr-3 lg:h-[1024px] flex flex-col gap-[12px] py-[12px] lg:w-[1030px]">
            <h4 className="font-[Poppins] font-[400] text-[23.04px]">My profile</h4>

            <div className="relative z-[60] lg:w-[1020px] w-[320px] h-auto lg:h-[700px] rounded-[30px] p-[32px] flex flex-col gap-[32px] bg-[#FFFFFF]">

                    <div className='lg:w-[251px] h-auto lg:h-[594px] flex flex-col gap-[64px] bg-[#EDEDED] '>

                    <div className='lg:w-[251px] h-auto lg:h-[448px] flex flex-col '>
                        <button
                         className={`lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] px-5 
                            flex justify-between items-center rounded-md 
                            ${active ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'}`}
                            onClick={() => {setShowLanguage(true); setActive(!active)}}
                            
                        >Language
                            <FaLanguage className='w-[28px] h-[28px]' />
                        </button>

                         <button
                            className={`lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] px-5 
                            flex justify-between items-center rounded-md 
                            ${active ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'}`}
                        >Voice activate
                            <FaMicrophone className='w-[28px] h-[28px]' />
                        </button>

                        <button
                            className={`lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] px-5 
                            flex justify-between items-center rounded-md 
                            ${active ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'}`}
                        >Degree units
                            <FaThermometer className='w-[28px] h-[28px]' />
                        </button>

                        <button
                            className={`lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] px-5 
                            flex justify-between items-center rounded-md 
                            ${active ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'}`}
                        >Notification
                            <FaBell className='w-[28px] h-[28px]' />
                        </button>

                        <button
                           className={`lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] px-5 
                            flex justify-between items-center rounded-md 
                            ${active ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'}`}
                        >Display mode
                            <FiMonitor className='w-[28px] h-[28px]' />
                        </button>

                        <button
                            className={`lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] px-5 
                            flex justify-between items-center rounded-md 
                            ${active ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'}`}
                        >Offline mode
                            <FiWifiOff className='w-[28px] h-[28px]' />
                        </button>

                        <button
                            className={`lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] px-5 
                            flex justify-between items-center rounded-md 
                            ${active ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'}`}
                        >Legal
                            <FaBookOpen className='w-[28px] h-[28px]' />
                        </button>
                        </div>

                        <button
                            className={`lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] px-5 
                            flex justify-between items-center rounded-md 
                            ${active ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'}`}
                        >Logout
                            <FiLogOut className='w-[28px] h-[28px]' />
                        </button>

                        {showLanguage && (
                            <div className="absolute top-8 left-[200px] lg:left-[285px] bg-white shadow-xl rounded-xl p-4 w-[200px] z-50 lg:h-[594px] h-auto lg:w-[251px] py-[16px] ">
                            <h3 className="font-semibold mb-3">Choose Language</h3>
                            {["English", "Igbo", "Hausa", "Yoruba"].map((lang) => (
                                <label
                                key={lang}
                                className="flex items-center gap-2 cursor-pointer mb-2 lg:w-[251px] lg:h-[64px] h-auto "
                                >
                                <input
                                    type="radio"
                                    value={lang}
                                    checked={language === lang}
                                    onChange={() => setLanguage(lang)}
                                    className="accent-orange-500"
                                />
                                <span>{lang}</span>
                                </label>
                            ))}

                            <button 
                                onClick={() => setShowLanguage(false)} 
                                className="mt-3 text-sm text-white bg-orange-500 px-3 py-1 rounded-md"
                            >
                                Close
                            </button>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>

        </div>
    )
}