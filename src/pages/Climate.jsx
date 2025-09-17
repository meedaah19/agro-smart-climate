import { useNavigate } from 'react-router-dom';
import image from '../assets/c291a504e67fffc43346fbb95338abc5976c1775.jpg';
import { useContext } from 'react';
import { ModalContext } from '../components/store/ModalContext';

export default function Climate(){
    const modalCtx = useContext(ModalContext);
    const navigate = useNavigate();

    function handleOpenModal(){
        modalCtx.showModal('signup')
    }

    function handleClick(){
        navigate('/')
    }
    return(
        <div className='lg:w-[1400px] h-auto lg:h-[1016px] p-[32px] lg:grid lg:gap-[32px] '>

            <div className='lg:w-[1330px] h-auto lg:h-[181px] p-[10px] lg:grid lg:gap-[10px] '>
                <h1 className='font-[700] font-[Poppins] text-[39.81px] '>Climate Tools</h1>

                <p className='font-[400] font-[Poppins] text-[19.2px] '>Climate Smart Agro's Climate Tools are designed to help farmers make smarter decisions every day, before, during, and after planting. These tools are built to respond to the real problems farmers face due to unpredictable weather, soil degradation, and changing pest patterns.</p>
            </div>

            <div className='lg:w-[1330px] h-auto lg:h-[687px] lg:flex lg:gap-[32px]  '>

                <div className='lg:w-[769px] h-auto lg:h-[687px] flex flex-col gap-[10px]'>
                    <h2 className='font-[Poppins] font-[400] text-[27.65px] pt-5 lg:pt-0'>What Our Tools Help You Do</h2>
                    <p className='font-[Poppins] font-[400] text-[19.2px] grid gap-[23px]'>
                        <li>Receive real-time weather alerts specific to your farm's location.</li>

                        <li>Get notified about pest and disease outbreaks early to reduce losses.</li>

                        <li>Track rainfall patterns to guide planting and irrigation decisions.</li>

                        <li>Choose climate-resilient crops and planting methods based on your soil,</li>

                        <li>Apply soil conservation methods like mulching and cover cropping.</li>

                        <li>Plan long-term with agroforestry tools that balance trees and crops.</li>

                        <li> Access smart tips to boost yield and farm income despite harsh conditions.</li>
   
                    </p>
                    <p 
                    className='font-[Poppins] font-[400] text-[19.2px] pt-4'>
                        Our tools are farmer-friendly, easy to use, and available in multiple languages. <br />
                        Whether you are online or offline, in the city or the village, we bring the right tools closer to your field.
                    </p>
                    <p className='font-[Poppins] font-[400] text-[19.2px] pt-4 lg:pb-0 pb-6'> 
                        Smart farming starts with the right tools in your hands.
                    </p>
                </div>

                <div className='lg:w-[500px] h-auto lg:h-[600px] flex flex-col gap-[64px]  '>

                    <img 
                    className='lg:w-[574px] lg:h-[600px] h-auto rounded-[20px] ' 
                    src={image} 
                    alt="soil measurement" />

                    <div className='lg:w-[500px] h-auto lg:h-[45px] font-[700] text-[15px] lg:text-[19.2px] flex lg:gap-[32px] gap-[20px]'>
                        <button
                        onClick={handleClick}
                        className='lg:w-[271px] h-[45px] w-[150px] rounded-[8px] border-[1px] border-[#FF8E28] hover:bg-[#b86014]  lg:px-[90px] px-13.5 py-[8px] flex gap-10px '>Back</button>
                        <button
                        onClick={handleOpenModal}
                        className='lg:w-[271px] h-[45px] w-[150px]  rounded-[8px] border-[1px] px-7 lg:px-[60px] py-[8px] flex gap-10px border-[#FF8E28] hover:bg-[#b86014] bg-[#FF8E28]'>Lets Start</button>
                    </div>
                </div>
            </div>

        </div>
    )
}