import image1 from '../assets/a79c2f9f55b76facc1c21f184e2ba22f2c982bb4.jpg';
import image2 from '../assets/5772dbf6d83f0499fa08eac90040f99a11be1380.jpg';
import image3 from '../assets/f5fbc5a4f44543ea95fc553cdfce6679696440c3.jpg';
import image4 from '../assets/70ebe06e34d8eca54aec8aab244f03f2250401aa.jpg';

export default function Layout3(){
    return(
        <div className=' h-auto lg:h-[711px] bg-gradient-to-b from-[#FFFFFF]  lg:pt-[80px] lg:pl-[160px] lg:pr-[160px] lg:pb-[80px] pl-[30px] pr-[30px] pt-[30px]  '>

            <div className='w-full max-w-[1120px] h-auto lg:h-551px flex flex-col lg:flex-row items-center gap-[32px] '>

            <div className='lg:w-[544px] w-full h-auto lg:h-[551px]'>
                <h1 className='font-[Poppins] font-[600] text-[30px] lg:text-[39.81px] '>Our Smart Solution.</h1>
                <p className=' font-[Poppins] font-[400] text-[22px] lg:text-[27.65px] '>
                    ClimateSmart Agro equips farmers with: 
                    <li className='lg:pt-[30px] pt-[20px]'>Localized weather alerts</li>
                    <li>Expert advice, and</li>
                    <li>Climate-resilient farming tools.</li>
                    <p className='lg:pt-[32px] pt-[20px]'>
                        We are using tech to bridge the gap between traditional farming and modern climate realities.
                    </p>
                </p>
            </div>
            
            <div className='lg:w-[544px] w-full h-auto lg:h-[551px] grid gap-[3px]'>
                <div className='flex gap-[25px] lg:gap-[32.7px] '>
                <div>
                    <img 
                    className=' lg:w-[263px] lg:h-[292px] rounded-tr-[16.35px] rounded-tl-[65.41px] rounded-br-[16.35px] rounded-bl-[16.35px] ' 
                    src={image1} 
                    alt="irrigation image" />
                    </div>
                <div>
                    <img 
                    className='lg:w-[248.3px] lg:h-[292.29px] rounded-tr-[100.16px] rounded-tl-[16.35px] rounded-br-[16.35px] rounded-bl-[16.35px]' 
                    src={image2} 
                    alt="people planting" />
                    </div>
                </div>
                <div 
                className='lg:h-[202.36px] lg:w-[511px] flex gap-[25px] lg:gap-[32.7px] '> 
                <div>
                    <img 
                    className='lg:w-[263.68px] lg:h-[225.65px] rounded-tr-[8px]  w-[150px] rounded-tl-[16] rounded-bl-[16px] rounded-br-[8px] ' 
                    src={image3} 
                    alt="weather teaching" />
                    </div>
                <div>
                    <img 
                    className='lg:w-[211px] lg:h-[226px] rounded-tr-[16.35px]  w-[230px] pt-3 lg:pt-0 rounded-tl-[16.35px] rounded-bl-[16.35px] rounded-br-[65.41px] ' 
                    src={image4} 
                    alt="A man with a phone" />
                    </div>
                </div>
                
            </div>
            </div>
            </div>
    )
}