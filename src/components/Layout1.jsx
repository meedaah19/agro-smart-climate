import image1 from '../assets/91a6c2164942199e7ce3a61e72780df756577e2d.jpg';

export default function Layout1(){
    return(
        <div className=' max-w-[1440px] lg:h-[761px] lg:pr-[160px] lg:pl-[160px] pl-[30px] pr-[30px] bg-gradient-to-b from-[#A9DCD7] via-[#FFFFFF] to-[#C6E4E1] lg:pt-[50px] pt-[30px] flex fex-col lg:flex-row items-center  ' >
        
                    <div className='lg:w-[544px] font-[poppins] flex flex-col lg:gap-8 gap-3'>
        
                    <div className='flex flex-col gap-4'>
                    <h1 className=' font-[700] lg:text-[47.78px] md:text-3xl text-xl  '>
                        Grow More, Lose Less.
                    </h1>
                    <p className=' font-[400] text-sm md:text-xl  lg:text-[27.65px]'>Let us show you how to harvest smartly.</p>
                    </div>
                    <div 
                    className='lg:w-[156px] lg:h-[61px] w-[100px] h-[30px] rounded-[8px] lg:pt-[16px] lg:pr-[32px] lg:pb-[16px] lg:pl-[32px] pl-[18px] pt-[4px]  gap-[10px] bg-[#FF8E28] font-[700] text-[15px] lg:text-[19.2px] '>
                        <button>Lets start</button>
                    </div>
                    </div>
                    <div className='lg:h-[761px] lg:w-[544px] w-[400px]' >
                        <img 
                        className=' rounded-[20px]' 
                        src={image1} 
                        alt="A man and some woman with some farm pictures" />
                    </div>
                    </div>
    )
}