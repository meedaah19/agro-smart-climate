import CropActivities from '../components/CropActivities';
import Sidebar from '../components/Sidebar';
import WeatherReport from '../components/WeatherReport';

export default function Dashboard(){
    return(
        <div className="lg:w-[1440px] w-full h-auto lg:h-[1100px] flex lg:gap-[32px] bg-gradient-to-b from-[#A9DCD7] pb-[0px] via-[#FFFFFF] to-[#A9DCD7]  ">

            <Sidebar/>

            <div className='lg:w-[1157px] h-auto w-[350px] md:w-[800px] pr-3  lg:h-[1024px] flex flex-col gap-[32px] py-[16px]'>

                <WeatherReport/>

                <CropActivities/>

            </div>

        </div>
    )
}