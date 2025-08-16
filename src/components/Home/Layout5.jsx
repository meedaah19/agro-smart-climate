import {useState} from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from '../../assets/ce304655acddaca8ae6856632f562cb5ff951802.png';
import image2 from '../../assets/peper-seller.png';
import image3 from '../../assets/small-production.png';

const images = [
  image1,
  image3,
  image2
];

export default function Layout5() {

    const [currentIndex, setCurrentIndex] = useState(0);

      const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }; 

    return(
        <div className='bg-gradient-to-b from-[#C5E3E0] via-[#E3F1F0] to-[#FFFFFF] lg:w-[1440px] h-auto lg:h-[929px] lg:pt-[100px] lg:p-[32px] grid gap-[10px] px-[16px] py-[16px] text-center'>  

                    <div className=' lg:w-[1376px] h-auto lg:h-[706px] grid gap-[32px] '>

                    <div className='flex flex-col h-auto lg:h-[215px] lg:gap-[32px] gap-[19px] justify-center items-center'>
                        <h1 className='font-[Poppins] font-[600] text-[28px] lg:text-[39.81px] '>Testimonials</h1>
        
                        <p className='lg:w-[1123px] font-[Poppins] font-[400] text-[20px] lg:text-[27.65px] text-center'>We have worked hard to help thousands of people across the country. <br />
                        Here are some of the things our users had so say...
                        </p>
        
                 </div>

                <div className='flex justify-center'>
                             <img 
                    className="lg:w-[500px] w-[250px] h-auto lg:h-[500px] rounded-[8px]" 
                    src={images[currentIndex]} 
                    alt={`Slide ${currentIndex + 1}`} />
                            </div>

                            <div className="lg:w-[356px] h-[32px] flex gap-10 pl-9 lg:pl-0 justify-center items-center  lg:items-center mx-auto ">

                        <div className="flex  gap-[8px]">
                            <div className="lg:w-[300px] w-[100px] h-[15px] lg:h-[32px] rounded-[20px] bg-[#FF7F18]"/>
                            <div className="lg:w-[32px] w-[15px] h-[15px] lg:h-[32px] rounded-full bg-[#FF7F18]"/>
                            <div className="lg:w-[32px] lg:h-[32px] w-[15px] h-[15px] rounded-full bg-[#FF7F18]"/>
                        </div>

                        <div className="w-[96px] h-[32px] flex gap-[20px] lg:gap-[30px] ">

                        <button 
                        onClick={goNext} 
                        className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] border-[2px] border-[#928d8d] rounded-full hover:border-[#2b2929]  text-[#928d8d] hover:text-[#2b2929] flex items-center justify-center transition-all">
                            <FaChevronLeft  />
                        </button>

                        <button 
                        onClick={goPrev} 
                        className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] border-[2px] border-[#928d8d] rounded-full hover:border-[#2b2929]  text-[#928d8d]  hover:text-[#2b2929] flex items-center justify-center transition-all">
                            <FaChevronRight />
                        </button>

                        </div>
                    </div>

                    </div>
                    
                 </div>
    )
}