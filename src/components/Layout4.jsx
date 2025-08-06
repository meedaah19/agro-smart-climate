import image1 from '../assets/6cfa44040bb6a722e442b44d773f0aa31fbd7b57.png';
import image2 from '../assets/93ba49baff9c6fae3cbee16b5b164f9b0c97bb16.png';


export default function Layout4(){
    return(
        <div className="w-full max-w-[1440px] h-auto lg:h-[597px] lg:pr-[160px] lg:pl-[160px] pl-[30px] pr-[30px] bg-gradient-to-b from-[#FFFFFF] via-[#C6E4E1] to-[#C6E4E1] lg:pt-[80px] lg:pb-[80px] pt-[30px] pb-[30px] flex fex-col lg:flex-row items-center">

            <div className="lg:w-[1120px] h-auto lg:h-[437px] lg:flex gap-[32px] pt-14 lg:pt-0 ">

            <div className="lg:w-[718px] h-auto lg:h-[437px] flex gap-[30px] ">
                <div className="lg:w-[389px] h-auto lg:h-[437px] ">
                    <img className=" rounded-tl-[64px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[160px] " src={image1} alt="An old woman with a phone" />
                </div>
                <div className="lg:w-[281px] h-auto lg:h-[360px]">
                    <img className="rounded-tl-[8px] rounded-tr-[16px] rounded-br-[115px] rounded-bl-[8px] " src={image2} alt="A man on a system" />
                </div>
            </div>

            <div className='lg:w-[370px] h-auto lg:h-437px  '>
                <h1 className='font-[Poppins] font-[600] text-[30px] lg:text-[39.81px] pt-6 lg:pt-0'>Built for Every Farmer, Backed by Community.</h1>
                <p className='pt-5 font-[Poppins] font-[400] text-[22px] lg:text-[27.65px] '>Whether you are a smallholder farmer or part of a rural community, it is built for you with: </p>
            </div>
            </div>

        </div>
    )
}