import { useContext } from 'react';
import img from '../assets/d3d2ae34-fb31-4976-8a4b-d68b8e3755c0.jpg';
import { ModalContext } from '../components/store/ModalContext';

export default function AccCreated() {
    const modalCtx = useContext(ModalContext);

    function handleClick() {
        modalCtx.showModal('kyc');
    }

    return (
            <div className='lg:w-[1440px]  h-auto lg:h-[451px] bg-gradient-to-b from-[#C6E4E1] via-[#FFFFFF] to-[#C6E4E1]  '>

                <div className="lg:w-[424px]  h-auto lg:h-[140px] grid pt-[40px] gap-[32px] lg:pl-[450px] ">

                    <div className='lg:w-[424px] h-auto lg:h-[238px] text-center rounded-[30px] flex-col justify-center items-center gap-[8px]'>

                        <div className='flex justify-center'>
                            <img className='w-[100px] h-[100px] ' src={img} alt="done logo" />
                        </div>
                        
                        <div className='lg:w-[424px] h-auto lg:h-[106px] flex-col gap-[7px] '>
                        <h3 className="font-[Poppins] font-[400] text-[27.65px]">Account Created</h3>
                        <p className="font-[Poppins] font-[700] text-[19.2px]">Please fill the next form to begin your climate journey.</p>
                        </div>

                    </div>

                    <div className='lg:w-[424px] h-auto h-lg:[61px] flex lg:gap-[32px] justify-around gap-[16px] font-[Poppins] font-[700] text-[19.2px] '>
                        <button className='lg:w-[196px] h-auto lg:h-[61px] w-[150px] rounded-[8px] border-[1px] py-[16px] px-[8px] justify-center flex gap-[10px] bg-[#FFFFFF] cursor-pointer ' 
                        // onClick={dashboard}
                        >Skip</button>

                        <button 
                        onClick={handleClick}
                        className='lg:w-[196px] w-[150px] h-auto lg:h-[61px] rounded-[8px] border-[1px] py-[16px] px-[8px] justify-center flex gap-[10px] bg-[#FF8E28] cursor-pointer '>Fill a form</button>
                    </div>
                    
                </div>
            </div>
    );
}