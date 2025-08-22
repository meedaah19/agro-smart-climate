// import { FaCamera, FaPen, FaTrash } from 'react-icons/fa6';
// import Sidebar from '../components/Sidebar';
// import profile from '../assets/profile picture.jpg'
// import { FaEdit } from 'react-icons/fa';

// export default function EditProfile(){

//     return(
//         <div className="lg:w-[1440px] w-full h-auto lg:h-[1100px] flex lg:gap-[32px] bg-gradient-to-b from-[#A9DCD7] pb-[0px] via-[#FFFFFF] to-[#A9DCD7]  ">

//             <Sidebar/>

//             <div className='lg:w-[1150px] h-auto w-[320px] lg:h-[1024px] py-[32px] flex flex-col gap-[12px] '>
//                 <h4 className='font-[Poppins] font-[400] text-[23.04px] '>My profile</h4>

//                 <div className='lg:w-[1020px] w-full h-auto lg:h-[913px] rounded-[30px] p-[32px] flex flex-col gap-[32px] bg-[#FFFFFF] '>

//                     <div className='lg:w-[980px] w-full h-auto lg:h-[100px] flex justify-between'>

//                         <div className='w-[235px] lg:h-[100px] h-auto flex gap-[4px] '>
//                             <div className="w-[101px] h-[100px] relative">
//                                 <img 
//                                     className="w-[100px] h-[100px] rounded-full"
//                                     src={profile}
//                                     alt="profile picture" 
//                                 />
//                                 <FaCamera className="absolute bottom-1 right-1 text-black p-1 rounded-full cursor-pointer text-3xl" />
//                              </div>

//                             <div className='w-[130px] h-[32px] flex gap-2 pt-18'>
//                                 <button className='text-[16px] font-[500] font-[Lora] cursor-pointer '>Edit Profile</button>
//                                 <FaEdit/>
//                             </div>
//                         </div>

//                         <p className='font-[500] font-[Lora] text-[16px] pt-16 '>Date joined: January 1st 2025</p>
//                     </div>

//                     <div className='lg:w-[980px] h-auto lg:h-[568px] flex flex-col gap-[64px] '>

//                         <div className='lg:w-[980px] h-auto lg:h-[443px] flex gap-[90px]'>
//                             <div className='lg:w-[480px] h-auto lg:h-[443px] flex flex-col gap-[32px]'>
//                                 <div className='lg:w-[480px] h-auto lg:h-[224px] flex flex-col gap-[16px] '>
//                                 <h6 className='font-[Poppins] font-[400] text-[19.2px]'>Personal information's</h6>
//                                 <div className='lg:w-[400px] h-auto lg:h-[114px] gap-[16px]'>
//                                         <p className='font-[Lora] font-[400] text-[13.33px] '>Full Name</p>
//                                         <p className='font-[700] font-[Lora] text-[16px] border-b-[1px]'>Oyewopo Hameedat Timileyin</p>
//                                         <p className='font-[Lora] font-[400] text-[13.33px] pt-3 '>Email Address</p>
//                                         <p className='font-[700] font-[Lora] text-[16px] border-b-[1px]'>hameedattimileyinoyewopo</p>
//                                         <p className='font-[Lora] font-[400] text-[13.33px] pt-3 '>Add Phone Number</p>
//                                         <input className='font-[700] font-[Lora] text-[16px] border-b-[1px]'/>
//                                     </div>
//                                 </div>
//                                  <div className='lg:w-[480px] h-auto lg:h-[187px] flex flex-col gap-[16px] '>
//                                     <h6 className='font-[Poppins] font-[400] text-[19.2px]'>Function and equipment</h6>
//                                 <div className='lg:w-[400px] h-auto lg:h-[114px] gap-[16px]'>
//                                         <p className='font-[Lora] font-[400] text-[13.33px] '>Role for this Climate journey</p>
//                                         <p className='font-[700] font-[Lora] text-[16px] border-b-[1px]'>Private farmer</p>
//                                         <p className='font-[Lora] font-[400] text-[13.33px] pt-3 '>General tools I work with</p>
//                                         <p className='font-[700] font-[Lora] text-[16px] border-b-[1px]'>Cutlass, hoe, rake</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='lg:w-[400px] h-auto lg:h-[443px] flex flex-col gap-[16px]'>
//                                 <div className=' lg:w-[400px] h-[29px] flex justify-between font-[Poppins] font-[400] text-[19.2px]'>
//                                 <h6>Registered crops</h6>
//                                 <button
//                                     type="button"
//                                     className="text-black hover:text-red-500 cursor-pointer "
//                                 >
//                                     Add More +
//                                 </button>
//                                 </div>

//                                 <div className='lg:w-[400px] h-auto lg:h-[194px] flex flex-col gap-[32px] '>
//                                     <div className='lg:w-[400px] h-auto lg:h-[114px] gap-[16px]'>
//                                         <p className='font-[Lora] font-[400] text-[13.33px] '>Location</p>
//                                         <p className='font-[700] font-[Lora] text-[16px] border-b-[1px]'>Ishiagu, Ebonyi State</p>
//                                         <p className='font-[Lora] font-[400] text-[13.33px] pt-3 '>Crop at this location</p>
//                                         <p className='font-[700] font-[Lora] text-[16px] border-b-[1px]'>Yam, rice, casssava</p>
//                                     </div>
//                                     <div className="flex justify-end mr-25  ">
//                                 <button
//                                     type="button"
//                                     className="text-black  cursor-pointer h-[100px] w-[100px] hover:text-black"
//                                 >
//                                     <div className="flex gap-3 w-[180px] h-[50px] py-3 px-8  hover:bg-red-600 ">Delete crop <FaTrash size={18} /> </div>
//                                 </button>
//                                 </div>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className='lg:w-[900px] h-auto lg:h-[61px] flex gap-[32px] justify-center items-center'>
//                             <button className='font-[Poppins] font-[700] text-[19.2px] lg:w-[400px] h-auto lg:h-[61px] rounded-[8px] border-[1px] border-[#FF8E28] py-[8px] px-[16px] fbg-white '>Discard</button>
//                             <button className='font-[Poppins] font-[700] text-[19.2px] lg:w-[400px] h-auto lg:h-[61px] rounded-[8px] border-[1px] border-[#FF8E28] py-[8px] px-[16px] bg-[#FF8E28]'>Save Changes</button>

//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }