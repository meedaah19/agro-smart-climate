import { useContext, useEffect, useState } from 'react';
import CropActivities from '../components/CropActivities';
import Sidebar from '../components/Sidebar';
import WeatherReport from '../components/WeatherReport';
import { ModalContext } from '../components/store/ModalContext';
import { kycData } from '../components/api';
import image from '../assets/a62669654854d3f4c553783f64fabd7918b25d87.jpg';
import { useDashboard } from '../components/store/DashboardContext';

export default function Dashboard(){
    const [KYC, setKYC] = useState(null);
    const [loading, setLoading] = useState(true);
    const modalCtx = useContext(ModalContext);
    const {refreshDashboard} = useDashboard();

    useEffect(() => {
    async function fetchKYC() {
      try {
        const result = await kycData();
        if (result.success) {
          setKYC(result.kyc);
        }
      } catch (err) {
        console.error("Error fetching KYC:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchKYC();
  }, [refreshDashboard]);

  if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-semibold">Loading dashboard...</p>
    </div>
  );
}

    return(
        <div className="lg:w-[1440px] w-full h-auto lg:h-[1100px] flex lg:gap-[32px] bg-gradient-to-b from-[#A9DCD7] pb-[0px] via-[#FFFFFF] to-[#A9DCD7]  ">

            <Sidebar/>

            <div className='lg:w-[1157px] -ml-7 mt-4 h-auto w-[320px] md:w-[800px]  lg:h-[1024px] flex flex-col gap-[32px] py-[20px]'>

                {!KYC || !KYC.crops ? (
                   <div className="lg:w-[1020px] mt-10 w-full h-auto lg:h-[400px] bg-white rounded-[30px] p-[32px] flex flex-col gap-[32px] justify-center items-center ">
                    <div className="lg:w-[271px] h-auto lg:h-[290px] flex flex-col justify-center gap-[16px]  items-center ">
                        <img src={image} alt="" className="w-[227px] h-auto lg:h-[182px] rounded-[30px] " />
                        <h4 className="text-[27.65px] font-[Poppins] font-[400] ">Oh no!</h4>
                        <p className="font-[700] text-[16px] font-[Lora]">You don`t have any 
                            registered crops.</p>

                            <button 
                            onClick={() => modalCtx.showModal('kyc')}
                            className='lg:w-[150px] w-[200px] h-auto lg:h-[61px] rounded-[8px] border-[1px] py-[16px] px-[8px] justify-center flex gap-[10px] bg-[#FF8E28] border-[#FF8E28] cursor-pointer font-[Poppins] font-[700] lg:text-[19.2px] '
                            >Register here
                            </button>
                    </div>
                </div>
                   
                ) : (
                    <>
                    <WeatherReport/>
                    <CropActivities />
                    </>
                )}

            </div>

        </div>
    )
}