import { useNavigate } from 'react-router-dom';
import image from '../assets/765aef0e597f450af751170944ee1ba2dfd5296a.jpg';
import { useContext } from 'react';
import { ModalContext } from '../components/store/ModalContext';

export default function About(){
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
                <h1 className='font-[700] font-[Poppins] text-[39.81px] '>About Us</h1>

                <p className='font-[400] font-[Poppins] text-[19.2px] '>Founded in 2025, ClimateSmart Agro was created to support farmers facing the growing challenges of climate change. Our mission is simple: help farmers grow more, lose less, and farm smarter, no matter the weather. <br />We combine local wisdom with digital tools to provide climate-resilient solutions right at the farmer is fingertips.</p>
            </div>

            <div className='lg:w-[1330px] h-auto lg:h-[687px] lg:flex lg:gap-[32px]  '>

                <div className='lg:w-[769px] h-auto lg:h-[687px] flex flex-col gap-[15px]'>
                    <h2 className='font-[Poppins] font-[400] text-[27.65px] pt-5 lg:pt-0'>What We Offer</h2>
                    <p className='font-[Poppins] font-[400] text-[19.2px] grid gap-[27px]'>
                        <li>Localized weather & pest alerts to help you prepare and protect your crops.</li>

                        <li>Expert farming advice in clear, local languages.</li>

                        <li>Climate-smart practices like soil conservation, crop rotation, and agroforestry.</li>

                        <li>Export Hub to guide farmers into global markets.</li>

                        <li>Resilient farming tools and techniques tailored to your region.</li>

                        <li>Smart Farming drop-down, with educational content on soil care, crop planning, and more.</li>

                        <li>Training materials and real-life success stories from farmers like you.</li>

                        <li>Community features to connect, learn, and grow with other farmers.</li>
   
                    </p>
                    <p className='font-[Poppins] font-[400] text-[19.2px] pt-6'>At ClimateSmart Agro, we believe the future of farming is smart, sustainable, and farmer-led.</p>
                    <p className='font-[Poppins] font-[400] text-[19.2px] pt-6 lg:pb-0 pb-6'> Lets grow together.</p>
                </div>

                <div className='lg:w-[500px] h-auto lg:h-[600px] flex flex-col gap-[64px]  '>

                    <img 
                    className='lg:w-[574px] lg:h-[500px] h-auto rounded-[20px] ' 
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