import { useContext } from "react";
import { ModalContext } from "./store/ModalContext";
import Modal from "./UI/Modal";
import { FaTimes } from "react-icons/fa";
import Input from "./UI/Input";

export default function Kyc() {
    const modalCtx = useContext(ModalContext);

    function handleCloseModal() {
    modalCtx.hideModal();
}

    return (
        <Modal
            open={modalCtx.modalType === 'kyc'}
            onClose={handleCloseModal}
            >

            <div className="lg:w-[572px] h-auto lg:h-[886px] rounded-[30px] p-[32px] flex-col gap-[64px] ">

            <button 
            onClick={handleCloseModal} 
            className="absolute top-4 h-[34px] w-[34px] border-1 rounded-full right-4 text-xl pl-1.5   text-black hover:text-gray-600"
            >
            <FaTimes />
            </button>

            <div className="lg:w-[504px] h-auto lg:h-[697px] grid gap-[10px] font-[Poppins] font-[400] ">

                <div className="lg:w-[508px] h-auto lg:h-[197px] grid gap-[8px]">
                    <h1 className=" text-[19.2px] ">Language Preference </h1>

                    <div className="lg:w-[508px] h-auto lg:h-[160px] grid gap-[16px]">

                    <div className="lg:w-[508px] h-auto lg:h-[72px] grid gap-[4px]">
                    <label  htmlFor="language">In what language do you like to be communicated with?</label>
                    <select 
                    name="language" 
                    id="language"
                    className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] p-[16px] flex gap-[10px] border-[#000000] text-gray-500"
                    >
                    <option className="text-[16px]"
                    value="" disabled>
                        e.g, English
                    </option> 
                    <option 
                    value="english">
                        English
                    </option>
                    <option 
                    value="hausa">
                        Hausa
                    </option>
                    <option 
                    value="igbo">
                        Igbo
                    </option>
                    <option 
                    value="yoruba">
                        Yoruba
                    </option>
                    </select>
                    </div>

                     <div className="lg:w-[508px] h-auto lg:h-[72px] grid gap-[4px]">
                    <label htmlFor="language">Would you like to enable voice activation?</label>
                    <select 
                    name="voiceActivation" 
                    id="voiceActivation"
                    className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] p-[16px] flex gap-[10px] border-[#000000] text-gray-500">
                    <option 
                    value="" disabled>
                        Yes
                    </option>
                    <option 
                    value="yes">
                        Yes
                    </option>
                    <option 
                    value="no">
                        No
                    </option>
                    </select>
                    </div>

                    </div>
                </div>

                <div className="lg:w-[485px] h-auto lg:h-[197px] grid gap-[8px]">
                    <h1 className=" text-[19.2px] " >Function and equipment </h1>

                    <div className="lg:w-[485px] h-auto lg:h-[160px] grid gap-[16px]">

                    <div className="lg:w-[485px] h-auto lg:h-[72px] grid gap-[4px]">
                    <label htmlFor="role">What is you role for this Climate journey?</label>
                    <select 
                    name="role" 
                    id="role"
                    className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] p-[16px] flex gap-[10px] border-[#000000] text-gray-500"
                    >
                    <option 
                    value="" disabled>
                        e.g, Private farmer ...
                    </option> 
                    <option 
                    value="english">
                        Commercial farmer
                    </option>
                    <option 
                    value="hausa">
                        Private farmer
                    </option>
                    <option 
                    value="igbo">
                        Seller
                    </option>
                    </select>
                    </div>

                     <div className="lg:w-[485px] h-auto lg:h-[72px] grid gap-[4px]">
                    <Input 
                    label='Mention the tools you work with in general?'
                    id='tool' 
                    type="text" 
                    placeholder='e.g Cutlass, hoe, rake...'  
                    className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] px-[16px] flex gap-[10px]  "
                    />
                    </div>

                    </div>
                </div>

                  <div className="lg:w-[485px] h-auto lg:h-[197px] grid gap-[8px]">
                    <h1 className=" text-[19.2px] " >Crop registration (1) </h1>

                    <div className="lg:w-[485px] h-auto lg:h-[160px] grid gap-[16px]">

                    <div className="lg:w-[485px] h-auto lg:h-[72px] grid gap-[4px]">
                    <label htmlFor="location">What is the specific location of your farm?</label>
                    <select 
                    className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] p-[16px] flex gap-[10px] text-gray-500"
                    name="location" 
                    id="location"
                    
                    >
                    <option 
                    value="" disabled>
                        e.g, Ishiagu, Ebonyi State ...
                    </option> 
                    <option 
                    value="Kwara">
                        Kwara state
                    </option>
                    <option 
                    value="Ebonyi">
                        Ebonyi state
                    </option>
                    <option 
                    value="Enugu">
                        Enugu state
                    </option>
                    </select>
                    </div>

                     <div className="lg:w-[485px] h-auto lg:h-[72px] grid gap-[4px]">
                    <Input 
                    label='What crops is at the specific location mentioned above?'
                    id='crop' 
                    type="text" 
                    placeholder='e.g Rice, yam'
                    className="lg:w-[485px] h-auto lg:h-[52px] rounded-[4px] border-[1px] px-[16px] flex gap-[10px]  "
                    />
                    </div>
                    
                    </div>
                </div>

            </div>  

            <button className="bg-[#FF8E2880] lg:w-[485px] h-auto lg:h-[61px] flex-col gap-[32px] font-[700] font-[Poppins] text-[19.2px] text-center ">Continue</button>          
            </div>

        </Modal>
    )
}