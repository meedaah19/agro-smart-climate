import image1 from '../assets/91a6c2164942199e7ce3a61e72780df756577e2d.jpg';
import image2 from '../assets/8059dc3fb2c457dad3aa16a6fb7e1eb4de4f0535.jpg';
import image3 from '../assets/db975a07b24752839c02f85193590d96f471fa3a.jpg';
import image4 from '../assets/e7d3a7f3cc9f6b60de02c37700d42b137f41e532.jpg';
import image5 from '../assets/0b1384c1c9426a24dddd670a26d7efdf40343ed0.jpg';

export default function Home(){
    return(
        
        // first layout

        <div>
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
            <div className='lg:h-[761px] lg:w-[544px] w-[500px]' >
                <img 
                className=' rounded-[20px]' 
                src={image1} 
                alt="A man and some woman with some farm pictures" />
            </div>
            </div>

        {/* second layout */}

            <div className='bg-gradient-to-b from-[#C6E4E1] to-[#FFFFFF] lg:pt-[100px] lg:pl-[140px] lg:pr-[160px] lg:pb-[80px]  pl-[30px] pr-[30px] pt-[60px] pb-[30px]'> 

            <div className=' w-full max-w-[1120px] mx-auto h-auto lg:h-[527.35px] flex flex-col lg:flex-row  gap-[32px] '>

            <div className='grid gap-[32.7px] w-full'>

                <div className='flex gap-[25px] lg:gap-[36.79px] '>
                <div>
                    <img 
                    className=' lg:w-[318.86px] lg:h-[292.29px] rounded-tl-[100.16px] rounded-tr-[16.35px] rounded-br-[16.35px] rounded-bl-[16.35px] ' 
                    src={image2} 
                    alt="soil and grass image" />
                    </div>
                <div>
                    <img 
                    className='lg:w-[159.43px] lg:h-[292.29px] rounded-tl-[16.35px] rounded-tr-[65.41px] rounded-br-[16.35px] rounded-bl-[16.35px]' 
                    src={image3} 
                    alt="A man in the rain" />
                    </div>
                </div>
                <div 
                className='lg:h-[202.36px] lg:w-[511px] flex gap-[25px] lg:gap-[36.79px] '> 
                <div>
                    <img 
                    className='lg:w-[210.53px] lg:h-[202.36px] rounded-tl-[16.35px]  w-[210px] rounded-tr-[16.35px] rounded-br-[16.35px] rounded-bl-[65.41px] ' 
                    src={image4} 
                    alt="corn infected by earthworms" />
                    </div>
                <div>
                    <img 
                    className='lg:w-[263.68px] lg:h-[202.36px] rounded-tl-[16.35px]  w-[200px] rounded-tr-[16.35px] rounded-br-[65.41px] rounded-bl-[16.35px] ' 
                    src={image5} 
                    alt="A man in the desert" />
                    </div>
                </div>
                
            </div>
            <div className='grid lg:gap-[32px] gap-[19px]  '>
                <h1 className='font-[Poppins] font-[600] text-[39.81px] '>The challenges Farmers face today.</h1>
                <p className='font-[Poppins] font-[400] text-[27.65px]'>With access to prediction tools, Farmers across Nigeria will know what to do when battling with these results of climate change: 
                    <li className='lg:pt-[45px] pt-[20px] pl-5' >Erratic rainfall,</li>
                    <li className='pl-5'>Declining soil fertility, and </li>
                    <li className='pl-5'>Rising pest outbreaks.</li>
                </p>

            </div>
         </div>
         </div>

         {/* Third layout */}
       
        </div>
    )
}





 