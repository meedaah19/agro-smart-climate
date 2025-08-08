import {useState} from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from '../assets/ce304655acddaca8ae6856632f562cb5ff951802.png';
import image2 from '../assets/peper-seller.png';
import image3 from '../assets/small-production.png';

const images = [
  image1,
  image3,
  image2
];

export default function Layout5(){
      const [currentIndex, setCurrentIndex] = useState(0);

      const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };


    return(
        <div className="w-full max-w-[1440px] h-auto lg:h-[724px] lg:pr-[160px] lg:pl-[160px] pl-[30px] pr-[30px] lg:pt-[80px] pt-[30px] pb-[30px] lg:pb-[80px] flex gap-[10px] bg-gradient-to-b from-[#C6E4E1] via-[#E3F1F0] to-[#FFFFFF] ">

            <div className=" lg:w-[1220px] h-auto lg:h-[564px] flex gap-[32px] ">

                <div className="lg:w-[588px]   h-auto lg:h-[564px] ">
                    <h1 className="font-[Poppins] font-[600] text-[28px] lg:text-[39.81px]  ">Testimonials</h1>
                    <p className="font-[Poppins] font-[400] text-[20px] lg:text-[27.65px] pt-8">
                        We have worked hard to help thousands of people across the country.
                        Here are some of the things our users had so say...
                    </p>
                </div>
                <div className="lg:w-[500px] h-auto lg:h-[564px] gap-[32px]   ">
                    <img className="lg:w-[500px] w-[160px] h-auto lg:h-[500px] rounded-[8px]" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                    <div className="lg:w-[356px]
                    h-[32px] flex gap-4 lg:gap-10 pt-8 ">
                        <div className="flex  gap-[8px]">
                            <div className="lg:w-[276px] w-[50px] h-[15px] lg:h-[32px] rounded-[20px] bg-[#FF7F18]"/>
                            <div className="lg:w-[32px] w-[15px] h-[15px] lg:h-[32px] rounded-full bg-[#FF7F18]"/>
                            <div className="lg:w-[32px] lg:h-[32px] w-[15px] h-[15px] rounded-full bg-[#FF7F18]"/>
                        </div>
                        <div className="w-[96px] h-[32px] flex gap-[10px] lg:gap-[30px] ">
                        <button onClick={goNext} className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] border-[2px] border-[#928d8d] rounded-full hover:border-[#2b2929]  text-[#928d8d] hover:text-[#2b2929] flex items-center justify-center transition-all">
                            <FaChevronLeft  />
                        </button>
                        <button onClick={goPrev} className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] border-[2px] border-[#928d8d] rounded-full hover:border-[#2b2929]  text-[#928d8d]  hover:text-[#2b2929] flex items-center justify-center transition-all">
                            <FaChevronRight />
                        </button>
      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}