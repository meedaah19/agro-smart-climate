import image1 from '../assets/15b22b12336f042b41fee12dd0420b79c1474d54.jpg';
import image2 from '../assets/0c4abe9cfbf1d87b2c33442ab207fd0e22dff0cf.jpg';
import image3 from '../assets/529008023e4a28c2e98c5fbbcf515949b4ae757b.jpg';
import { useContext } from 'react';
import { ModalContext } from '../components/store/ModalContext';
import { useNavigate } from 'react-router-dom';

export default function ExportHub(){
     const modalCtx = useContext(ModalContext);
    const navigate = useNavigate();

    function handleOpenModal(){
        modalCtx.showModal('signup')
    }

    function handleClick(){
        navigate('/')
    }

    return(
        <div className="lg:w-[1400] h-auto lg:h-[1400px] p-[32px] py-[8px] flex flex-col lg:gap-[32px] gap-8 ">

        <div className="lg:w-[1300px] h-auto lg:h-[124px] grid gap-[10px] ">
            <h1 className="font-[Poppins] font-[700] text-[39.81px] ">Export Hub</h1>
            <p> Helping Farmers Reach Global Market</p>
        </div>

        <div className="lg:w-[1300px] h-auto lg:h-[1164px] lg:grid lg:gap-[40px] ">

            <div className="lg:w-[1300px] h-auto lg:h-[348px] lg:flex lg:gap-[64px]">

            <div className="lg:w-[741px] h-auto lg:h-[348px] flex flex-col gap-[8px] font-[Poppins] pb-5 lg:pb-0 ">
                <h1 className="text-[27.65px]"> Export Opportunities</h1>
                <p className="text-[19.2px] flex flex-col gap-7 ">
                    <li> List of crops and products in high demand (e.g., ginger, sesame seeds, shea butter, cocoa, etc.)</li>
                    <li>Current market prices in key countries</li>
                    <li>Upcoming export fairs or international buyer opportunities</li>
                </p>
            </div>

            <div >
                <img
                className="lg:w-[603px] h-auto lg:h-[348px] rounded-[20px] "
                 src={image1} alt="ship and cars pictures" />
            </div>

            </div>

              <div className="lg:w-[1300px] h-auto lg:h-[348px] lg:flex lg:gap-[64px]">

            <div className="lg:w-[741px] h-auto lg:h-[348px] flex flex-col gap-[8px] font-[Poppins] pt-10 pb-5 lg:pt-0 lg:pb-0 ">
                <h1 className="text-[27.65px]"> How to Exports</h1>
                <p className="text-[19.2px] flex flex-col gap-7 ">
                    Step-by-step guides tailored for smallholder farmers or cooperatives:
                    <li> How to register your farm for export</li>
                    <li>Understanding export documentation (phyto-sanitary certs, invoices, customs forms)</li>
                    <li>Packaging & labelling requirements</li>
                    Export-ready quality standards
                </p>
            </div>

            <div >
                <img
                className="lg:w-[603px] h-auto lg:h-[348px] rounded-[20px] "
                 src={image2} alt="a woman and a scientist" />
            </div>

            </div>

              <div className="lg:w-[1300px] h-auto lg:h-[348px] lg:flex lg:gap-[64px]">

            <div className="lg:w-[741px] h-auto lg:h-[348px] flex flex-col gap-[8px] font-[Poppins] pb-5 pt-10 lg:pb-0 lg:pt-0">
                <h1 className="text-[27.65px]"> Partner With Us / Directory</h1>
                <p className="text-[19.2px] flex flex-col gap-7 ">
                    <li> List of approved exporters, cooperatives, and NGOs that help farmers</li>
                    <li>Contact support for export agents, logistics providers, and freight services</li>
                    <li>How to join a farmer export cooperative</li>
                </p>
            </div>

            <div className='flex flex-col gap-2'>
                <img
                className="lg:w-[603px] h-auto lg:h-[348px] rounded-[20px] "
                 src={image3} alt="ship and cars pictures" />

                 <div className='h-auto lg:h-[45px] font-[700] text-[15px] lg:text-[19.2px] pt-10 lg:pt-0 flex lg:gap-[55px] gap-[20px]'>
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