import image1 from '../assets/ca25e5683d8a1f0b5c3bec1b0a967b27ceebaad0.jpg';
import image2 from '../assets/7385985d9f513af047454abb0a886c084b25e7d2.jpg';
import image3 from '../assets/eb368055f2a22d9567d0bc2c200b5334cf1829fa.jpg';
import { useContext } from 'react';
import { ModalContext } from '../components/store/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function SmartFarmimg(){
     const modalCtx = useContext(ModalContext);
    const navigate = useNavigate();

    function handleOpenModal(){
        modalCtx.showModal('signup')
    }

    function handleClick(){
        navigate('/')
    }

    return(
        <div className="lg:w-[1400] h-auto lg:h-[1700px] p-[32px] py-[8px] flex flex-col lg:gap-[1px] gap-8 ">

        <div className="lg:w-[1300px] h-auto lg:h-[124px]">
            <h1 className="font-[Poppins] font-[700] text-[39.81px] ">Smart Farming</h1>
        </div>

        <div className="lg:w-[1300px] h-auto lg:h-[1512px] lg:grid lg:gap-[40px] ">

            <div className="lg:w-[1300px] h-auto lg:h-[484px] lg:flex lg:gap-[64px]">

            <div className="lg:w-[718px] h-auto lg:h-[484px] flex flex-col gap-[8px] font-[Poppins] pb-5 lg:pb-0 ">
                <h1 className="text-[27.65px]"> Soil Conservation</h1>
                <p className="text-[19.2px] flex flex-col gap-7 ">
                    Protect your land, protect your future. <br />
                    Discover practical techniques to prevent soil erosion, maintain moisture, and increase fertility using:
                    <li> Cover cropping</li>
                    <li>Contour farming</li>
                    <li>Mulching with local materials</li>
                    <li>Reduced tillage practices</li>
                    
                </p>
                <p className='lg:pt-15 pt-5 text-[19.2px]'>Learn how soil health boosts yields and resilience against climate extremes.</p>
            </div>

            <div >
                <img
                className="lg:w-[626px] h-auto lg:h-[484px] rounded-[20px] "
                 src={image1} alt="plant" />
            </div>

            </div>

              <div className="lg:w-[1300px] h-auto lg:h-[397px] lg:flex lg:gap-[64px]">

            <div className="lg:w-[831px] h-auto lg:h-[397px] flex flex-col gap-[8px] font-[Poppins] pt-10 pb-5 lg:pt-0 lg:pb-0 ">
                <h1 className="text-[27.65px]"> Crop Rotation</h1>
                <p className="text-[19.2px] flex flex-col gap-7 ">
                    Healthier crops, fewer pests. <br />
                    Smartly plan what to plant each season to:
                    <li> Reduce pest build-up</li>
                    <li>Improve soil nutrients naturally</li>
                    <li>Minimize the need for chemical fertilizers</li>
                    
                </p>
                <p className='lg:pt-15 pt-5 text-[19.2px]'>Includes simple 3-year rotation guides tailored to local crops like maize, cassava, and legumes.</p>
            </div>

            <div >
                <img
                className="lg:w-[513px] h-auto lg:h-[397px] rounded-[20px] "
                 src={image2} alt="crop cycle" />
            </div>

            </div>

              <div className="lg:w-[1300px] h-auto lg:h-[551px] lg:flex lg:gap-[64px]">

            <div className="lg:w-[477px] h-auto lg:h-[551px] flex flex-col gap-[8px] font-[Poppins] pb-5 pt-10 lg:pb-0 lg:pt-0">
                <h1 className="text-[27.65px]"> Agroforestry</h1>
                <p className="text-[19.2px] flex flex-col gap-7 ">
                    Trees that work for your farm. Combine crops with trees to:
                    <li> Provide natural shade and wind protection</li>
                    <li>Fix nitrogen in the soil</li>
                    <li>Create extra income from fruits, nuts, or timber</li>
                   
                </p>
                <p className='lg:pt-15 pt-5 text-[19.2px]'> See the best trees for your region and how to plant them without competing with your main crops.</p>
            </div>

            <div className='flex flex-col gap-2'>
                <img
                className="lg:w-[572px] h-auto lg:h-[480px] rounded-[16px] "
                 src={image3} alt="ship and cars pictures" />

                 <div className='h-auto lg:h-[45px] pt-10 lg:pt-0 font-[700] text-[15px] lg:text-[19.2px] flex lg:gap-[55px] gap-[20px]'>
                        <button
                        onClick={handleClick}
                        className='lg:w-[250px] h-[45px] w-[150px] rounded-[8px] border-[1px] border-[#FF8E28] hover:bg-[#b86014]  lg:px-[16px] px-13.5 py-[8px]'>Back</button>
                        <button
                        onClick={handleOpenModal}
                        className='lg:w-[250px] h-[45px] w-[150px]  rounded-[8px] border-[1px] px-7 lg:px-[16px] py-[8px] border-[#FF8E28] hover:bg-[#b86014] bg-[#FF8E28]'>Lets Start</button>
                    </div>
            </div>

            </div>

        </div>
        </div>
    )
}