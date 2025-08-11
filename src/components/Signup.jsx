// import image from '../assets/33bc12b4-3f40-4f92-8889-e524eccd0839.jpg'
// import image2 from '../assets/ad1bf210-ca89-4d77-a4c2-26c06338fcd2.jpg';
// import image3 from '../assets/6db1f554-7f73-41cd-845b-1572062b48e4.jpg';
// import image4 from '../assets/4ac7c386-857e-4361-95d2-9b04966521bb.jpg';
// import image5 from '../assets/1d566dfd-cbc7-4117-b61d-fd85fd6bb5bb.jpg';
// import { Link } from 'react-router-dom';
// import Input from './UI/Input';
// import Modal from './UI/Modal';
// import { useContext } from 'react';
// import { ModalContext } from './store/ModalContext';

// export default function Signup() {
//     const modalCtx = useContext(ModalContext);

//     function handleCloseModal(){
//         modalCtx.hideModal();
//     }

//     return(
//     <Modal
//     open={modalCtx.progress === 'modal'}
//     onClose={handleCloseModal}
//     >

//         <div className='lg:w-[485px] h-auto lg:h-[1007px] gap-[32px] grid '>

        
//     {/* signup form here */}
//     <div className="lg:w-[485px] h-auto lg:h-[943px] grid gap-[64px] ">
//         <form className='lg:w-[485px] h-auto lg:h-[681px] grid gap-[64px] '>
//             <div className='lg:w-[485px] h-auto lg:h-[144px] text-center grid gap-10px  '>
//                         <h3 className="font-[Poppins] font-[400] text-[27.65px] ">
//                             Hello there
//                         </h3>
//                         <h1 className="font-[Poppins] font-[500] text-[39.81px]">Create your Account </h1>
//                         <p className=" font-[Poppins] font-[400] text-[19.2px] ">Fill in your details to explore more.</p>
//                     </div>

//                     <div className="lg:w-[485px] h-[483px] w-[200px] grid gap-[32px]">
//                         <Input label='Enter name' id='name' type="text" />
//                         <Input label='Enter email address' id='email' type="text" placeholer='johnjoe@gmail.com' />
//                         <div className='flex'>
//                             <Input label='Enter password' id='password' type="password" placeholer='..........' />
//                             <img className='w-[32px] h-[32px] '  src={image5} alt="eye image" />
//                         </div>
                        
//                         <div className='flex'>
//                             <Input label='Confirm password' id='password' type="password" placeholer='..........' /> 
//                             <img className='w-[32px] h-[32px] '  src={image5} alt="eye image" />
//                         </div>
                        
//                         <button className="bg-[#FF8E28] py-[8px] px-[16px]">Create Account</button>
//                     </div>
//                     </form>
                    
//                         <img className='lg:w-[485px] h-[23px] ' src={image} alt="or option" />

//                         <div className='lg:w-[485px] lg:h-[101px] flex-col text-center '>
//                             <div className='lg:w-[485px] h-[50px] flex gap-[64px] items-center justify-center '>
//                             <Link>
//                             <img className='w-[32px] h-[32px] '
//                             src={image3} alt="google logo" />
//                             </Link>
//                             <Link>
//                             <img className='w-[32px] h-[32px] '
//                             src={image4} alt="facebook logo" />
//                             </Link>
//                             <Link>
//                             <img className='w-[32px] h-[32px] '
//                             src={image2} alt="Apple logo" />
//                             </Link>
//                             </div>

//                             <div className='font-[lora] font-[400] pt-9'>
//                                 <p>Have an account? <Link>Login!</Link></ p>
                                
//                             </div>
//                             </div>
//                         </div> 
//                     </div>
//     </Modal>

// )}


// {/* */}