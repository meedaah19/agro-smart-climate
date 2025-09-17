import image1 from '../../assets/8059dc3fb2c457dad3aa16a6fb7e1eb4de4f0535.jpg';
import image2 from '../../assets/db975a07b24752839c02f85193590d96f471fa3a.jpg';
import image3 from '../../assets/e7d3a7f3cc9f6b60de02c37700d42b137f41e532.jpg';
import image4 from '../../assets/0b1384c1c9426a24dddd670a26d7efdf40343ed0.jpg';

export default function Layout2() {
    return(
        <div className='bg-gradient-to-b from-[#A9DCD7] via-[#C6E4E1] to-[#FFFFFF] lg:w-[1440px] h-auto lg:h-[629.86px]  lg:p-[32px] grid gap-[10px] px-[16px] py-[16px] text-center'>  

                    <div className=' lg:w-[1376px] h-auto lg:h-[536.65px] grid gap-[32px] '>

                    <div className='flex flex-col h-auto lg:h-[215px] lg:gap-[32px] gap-[19px] justify-center items-center'>
                        <h1 className='font-[Poppins] font-[600] text-[28px] lg:text-[39.81px] '>The challenges Farmers face today.</h1>
        
                        <p className='lg:w-[1123px] font-[Poppins] font-[400] text-[20px] lg:text-[27.65px] text-center'>With access to prediction tools, Farmers across Nigeria will know what to do <br /> when battling with these results of climate change, e.g. erratic rainfall, declining <br /> soil fertility, and rising pest outbreaks. 
                        </p>
        
                 </div>

                        <div className='flex justify-center'>
                            <img 
                            className='lg:w-[318.86px] lg:h-[318.86px] rounded-[16px] w-[300px] ' 
                            src={image4} 
                            alt="A man in the desert" />
                            </div>
                        </div>
                        
        
                    
                 </div>
    )
}