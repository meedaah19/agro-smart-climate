import { FaCamera, FaTrash } from 'react-icons/fa6';
import Sidebar from '../components/Sidebar';
import profile from '../assets/profile picture.jpg'
import { useState } from 'react';

export default function EditProfile(){
    const[value, setValue] = useState('')

    function handleChange(event){
        setValue({...value, [event.target.name]: event.target.value});
    }

    return(
        <div className="lg:w-[1440px] w-full h-auto lg:h-[1100px] flex lg:gap-[32px] bg-gradient-to-b from-[#A9DCD7] pb-[0px] via-[#FFFFFF] to-[#A9DCD7]  ">

            <Sidebar/>

            <div className='lg:w-[1150px] h-auto w-[320px] lg:h-[1024px] py-[32px] flex flex-col gap-[12px] '>
                <h4 className='font-[Poppins] font-[400] text-[23.04px] '>My profile</h4>

                <div className='lg:w-[1020px] w-full h-auto lg:h-[1000px] rounded-[30px] p-[32px] flex flex-col gap-[32px] bg-[#FFFFFF] '>
                    <div className="lg:w-[980px] w-full h-auto flex lg:flex-row flex-col lg:justify-between lg:items-center">
                                <div className="flex gap-[20px] items-center">
                                  <div className='relative'>
                                    <img
                                      className="w-[100px] h-[100px] rounded-full"
                                      src={profile}
                                      alt="profile picture"
                                    />
                                    <FaCamera className="absolute bottom-1 right-1 text-black p-1 rounded-full cursor-pointer text-3xl" />
                                  </div>
                    
                                </div>
                    
                                <p className="font-[500] font-[Lora] pt-5 lg:pt-0 text-[16px]">
                                  Date joined: January 1st 2025
                                </p>
                              </div>


                    <div className='lg:w-[980px] h-auto lg:h-[868px] flex flex-col lg:gap-[200px] '>
                        <div className='lg:w-[980px] h-auto lg:h-[443px] flex lg:flex-row flex-col gap-[30px] lg:gap-[90px]'>
                            <div className='lg:w-[480px] h-auto lg:h-[643px] flex flex-col gap-[30px] lg:gap-[150px]'>
                                <div className='lg:w-[480px] h-auto lg:h-[224px] flex flex-col gap-[18px] '>
                                <h6 className='font-[Poppins] font-[400] text-[19.2px]'>Personal information's</h6>
                                <div className='lg:w-[400px] h-auto lg:h-[287px] flex flex-col gap-[5px] lg:gap-[10px]'>
                                        <p className='font-[Lora] font-[400] text-[13.33px] '>Full Name</p>
                                        <input className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]' 
                                        id='name'
                                        type='text'
                                        title='name'
                                        value='Hameedat'
                                        onChange={handleChange}/>
                                        <p className='font-[Lora] font-[400] text-[13.33px] pt-3 '>Email Address</p>
                                        <input className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]' 
                                        id='email'
                                        type='email'
                                        title='email'
                                        value='hameedat@gmail.com'
                                        onChange={handleChange}/>
                                        <p className='font-[Lora] font-[400] text-[13.33px] pt-3 '>Add Phone Number</p>
                                        <input className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]' 
                                        id='phone-number'
                                        type='phone-number'
                                        title='phone-number'
                                        value='264554647'
                                        onChange={handleChange}/>  
                                    </div>
                                </div>
                                 <div className='lg:w-[480px] h-auto lg:h-[187px] flex flex-col gap-[16px] '>
                                    <h6 className='font-[Poppins] font-[400] text-[19.2px]'>Function and equipment</h6>
                                <div className='lg:w-[400px] h-auto lg:h-[214px] flex flex-col gap-[5px] lg:gap-[10px]'>
                                        <p className='font-[Lora] font-[400] text-[13.33px] '>Role for this Climate journey</p>
                                        <input className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]' 
                                        id='role'
                                        type='text'
                                        title='role'
                                        value='Private farmer'
                                        onChange={handleChange}/>
                                        <p className='font-[Lora] font-[400] text-[13.33px] pt-3 '>General tools I work with</p>
                                        <input className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]' 
                                        id='tools'
                                        type='text'
                                        title='tools' 
                                        value='Cutlass. heo, rake'
                                        onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>

                            <div className='lg:w-[400px] h-auto lg:h-[443px] flex flex-col gap-[16px]'>
                                <div className=' lg:w-[400px] h-[29px] flex justify-between font-[Poppins] font-[400] text-[19.2px]'>
                                <h6>Registered crops</h6>
                                <button
                                    type="button"
                                    className="text-black hover:text-red-500 cursor-pointer "
                                >
                                    Add More +
                                </button>
                                </div>

                                <div className='lg:w-[400px] h-auto lg:h-[194px] flex flex-col gap-[32px] '>
                                    <div className='lg:w-[400px] h-auto lg:h-[214px] flex flex-col gap-[5px] lg:gap-[10px]'>
                                        <p className='font-[Lora] font-[400] text-[13.33px]'>Location</p>
                                        <input className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]' 
                                        id='location'
                                        type='text'
                                        title='location'
                                        value='Ishiagu, Ebonyi State'
                                        onChange={handleChange}/>
                                        <p className='font-[Lora] font-[400] text-[13.33px]  '>Crop at this location</p>
                                        <input className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]' 
                                        id='crops'
                                        type='text'
                                        title='crops'
                                        value='Yam, rice, casssava'
                                        onChange={handleChange}/>
                                    </div>
                                    <div className="flex justify-end mr-25  ">
                                <button
                                    type="button"
                                    className="text-black  cursor-pointer h-[100px] w-[100px] hover:text-black"
                                >
                                    <div className="flex gap-3 w-[180px] h-[50px] py-3 px-8  hover:bg-red-600 ">Delete crop <FaTrash size={18} /> </div>
                                </button>
                                </div>
                                </div>

                            </div>
                        </div>

                        <div className='lg:w-[900px] h-auto lg:h-[61px] flex gap-[32px] justify-center items-center'>
                            <button className='font-[Poppins] font-[700] text-[19.2px] lg:w-[400px] h-auto lg:h-[61px] rounded-[8px] border-[1px] hover:bg-[#a55510]  border-[#FF8E28] py-[8px] px-[16px] fbg-white '>Discard</button>
                            <button className='font-[Poppins] font-[700] text-[19.2px] lg:w-[400px] h-auto lg:h-[61px] rounded-[8px] border-[1px] hover:bg-[#a55510] border-[#FF8E28] py-[8px] px-[16px] bg-[#FF8E28]'>Save Changes</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}