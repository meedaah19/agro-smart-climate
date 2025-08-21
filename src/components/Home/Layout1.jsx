import image1 from '../../assets/91a6c2164942199e7ce3a61e72780df756577e2d.jpg';
import { useContext } from 'react';
import { ModalContext } from '../store/ModalContext';

export default function Layout1(){
    const modalCtx = useContext(ModalContext);

    function handleShowModal(){
        modalCtx.showModal('signup');
    }

    return(
        <div 
            className='relative max-w-[1440px] lg:h-[761px] h-[60vh] lg:px-[160px] lg:pt-[50px] pt-[30px] pb-[30px] grid items-center bg-center '
            style={{ backgroundImage: `url(${image1})` }}
        >
            {/* Dark overlay BEHIND the text */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content on top */}
            <div className='relative z-10 lg:w-[1120px] h-auto lg:h-[325px] pt-[10px] lg:pr-[160px] grid gap-25 lg:gap-[32px]'>
                <div className='lg:w-[1120px] h-auto lg:h-[232px] grid gap-[16px] text-center '>
                    <h1 className='font-[700] lg:text-[64px] text-[32px] text-white'>
                        Grow More, Lose Less.
                    </h1>
                    <p className='font-[500] text-xl lg:text-[40px] text-white'>
                        Let us show you how to <br /> harvest smartly.
                    </p>
                </div>

                <div className='flex justify-center'>
                    <button 
                        className='lg:w-[156px] lg:h-[61px] w-[100px] h-[50px] rounded-[8px] lg:py-[16px] lg:px-[32px]   py-3 gap-[10px] bg-[#FF8E28] font-[700] text-[18px] lg:text-[19.2px] cursor-pointer' 
                        onClick={handleShowModal}
                    >
                        Lets start
                    </button>
                </div>
            </div>
        </div>
    );
}
