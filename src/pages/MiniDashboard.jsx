import Sidebar from "../components/Sidebar";
import WeatherReport from "../components/WeatherReport";
import image from '../assets/a62669654854d3f4c553783f64fabd7918b25d87.jpg'
import { useContext } from "react";
import { ModalContext } from "../components/store/ModalContext";

export default function MiniDashboard(){
    const modalCtx = useContext(ModalContext);

    return(
           <div className="lg:w-[1440px] w-full h-auto lg:h-[1100px] flex lg:gap-[32px] bg-gradient-to-b from-[#A9DCD7] pb-[0px] via-[#FFFFFF] to-[#A9DCD7]  ">

            <Sidebar/>

            <div className='lg:w-[1157px] h-auto w-[320px] md:w-[800px] pr-3  lg:h-[1024px] flex flex-col gap-[32px] py-[20px]'>

                <WeatherReport/>

                <div className="lg:w-[1020px] mt-10 w-full h-auto lg:h-[400px] bg-white rounded-[30px] p-[32px] flex flex-col gap-[32px] justify-center items-center ">

                    <div className="lg:w-[271px] h-auto lg:h-[290px] flex flex-col justify-center gap-[16px]  items-center ">
                        <img src={image} alt="" className="w-[227px] h-auto lg:h-[182px] rounded-[30px] " />
                        <h4 className="text-[27.65px] font-[Poppins] font-[400] ">Oh no!</h4>
                        <p className="font-[700] text-[16px] font-[Lora]">You don`t have any 
                            registered crops.</p>

                            <button 
                            onClick={() => modalCtx.showModal('kyc')}
                            className='lg:w-[150px] w-[100px] h-auto lg:h-[61px] rounded-[8px] border-[1px] py-[16px] px-[8px] justify-center flex gap-[10px] bg-[#FF8E28] border-[#FF8E28] cursor-pointer font-[Poppins] font-[700] text-[19.2px] '
                            >Register here
                            </button>
                    </div>

                </div>

            </div>

        </div>
    )
}