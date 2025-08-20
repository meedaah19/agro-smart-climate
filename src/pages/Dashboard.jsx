import Sidebar from '../components/Sidebar';
import WeatherReport from '../components/WeatherReport';

export default function Dashboard(){
    return(
        <div className="lg:w-[1440px] h-auto lg:h-[1024px] flex gap-[32px] bg-gradient-to-b from-[#A9DCD7] via-[#FFFFFF] to-[#A9DCD7] mb-[20px] ">

            <Sidebar/>

            <div className='lg:w-[1157px] h-auto lg:h-[1024px] flex flex-col gap-[32px] py-[16px]'>

                <WeatherReport/>

            </div>

        </div>
    )
}