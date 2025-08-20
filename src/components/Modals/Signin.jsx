import image from '../../assets/33bc12b4-3f40-4f92-8889-e524eccd0839.jpg'
import image2 from '../../assets/ad1bf210-ca89-4d77-a4c2-26c06338fcd2.jpg';
import image3 from '../../assets/6db1f554-7f73-41cd-845b-1572062b48e4.jpg';
import image4 from '../../assets/4ac7c386-857e-4361-95d2-9b04966521bb.jpg';
import image5 from '../../assets/1d566dfd-cbc7-4117-b61d-fd85fd6bb5bb.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useContext, useActionState } from 'react';
import { ModalContext } from '../store/ModalContext';
import { FaTimes } from 'react-icons/fa';

export default function Signin() {
    const navigate = useNavigate();
    const modalCtx = useContext(ModalContext);

    function handleCloseModal(){
        modalCtx.hideModal();
    }

    function handleSignUp() {
        modalCtx.showModal('signup');
    }

    function validInput(prevFormState, formData) {
        const email = formData.get('email');
        const password = formData.get('password');

        let errors = [];

        if(!email.includes('@')){
            errors.push('Invalid email address');
        }

        if(password.length < 6){
            errors.push('You must provide a password with at least six characters.');
        }

        if(errors.length > 0) {
            return { errors, enteredValue: {
                email,
                password,
            } };
                }

            // if(name && password && email && confirmPassword){
            //     modalCtx.showModal('accountCreated')
            // }
                console.log( password, email,)
            return {errors : null}
            
    }

    const [formState, formAction] = useActionState(validInput, {errors:null});


    return(
    <Modal
    open={modalCtx.modalType === 'signin'}
    onClose={handleCloseModal}
    >

        <div className='lg:w-[485px] h-auto lg:h-[809px] gap-[32px] grid '>

            <button 
            onClick={handleCloseModal} 
            className="absolute top-4 h-[34px] w-[34px] border-1 rounded-full right-4 text-xl pl-1.5   text-black hover:text-gray-600"
            >
            <FaTimes />
            </button>

        <div className="lg:w-[485px] h-auto lg:h-[745px] grid gap-[64px] ">

        <form action={formAction} className='lg:w-[485px] h-auto lg:h-[488px] grid gap-[64px] '>
        <div className='lg:w-[485px] h-auto lg:h-[111px] text-center grid gap-[10px]  '>
                        <h3 className="font-[Poppins] font-[400] text-[25px] lg:text-[27.65px] ">
                            Welcome Back!
                        </h3>
                        <h1 className="font-[Poppins] font-[500] text-[30px] lg:text-[39.81px]">Login to continue </h1>
                    </div>

                    <div className="lg:w-[485px] h-[313px] w-[200px] grid gap-[32px]">

                        <Input 
                        label='Enter email address' 
                        id='email' 
                        type='email'
                        defaultValue={formState.enteredValue?.name}  
                        placeholder='johnjoe@gmail.com' />

                        <div className='flex'>
                            <Input 
                            label='Enter password' 
                            id='password' 
                            type="password" 
                            defaultValue={formState.enteredValue?.password}  
                            placeholder='..........' />
                            <img 
                            className='w-[29px] h-[29px] '  
                            src={image5} 
                            alt="eye image" />
                        </div>

                        <button
                        onClick={() => {navigate('dashboard'); modalCtx.hideModal()}} className="lg:w-[485px] h-[56px] rounded-[8px] bg-[#FF8E28] py-[8px] px-[16px] font-[Poppins] font-[700] text-[19.2px] ">login</button>
                    </div>

                    </form>

                    {formState.errors && (
                           <ul className='bg-red-200 '>
                            {formState.errors.map((error) => (
                            <li key={error}>{error}</li>
                            ))}
                        </ul>   
                        )}
                    
                        <img 
                        className='lg:w-[485px] w-[250px] h-[23px] ' 
                        src={image} 
                        alt="or option" />

                        <div className='lg:w-[485px] w-[250px] lg:h-[101px] flex-col text-center '>

                            <div className='lg:w-[485px] h-[50px] flex gap-[64px] items-center justify-center '>

                            <Link>
                            <img 
                            className='w-[32px] h-[32px] '
                            src={image3} 
                            alt="google logo" />
                            </Link>
                            <Link>
                            <img 
                            className='w-[32px] h-[32px] '
                            src={image4} 
                            alt="facebook logo" />
                            </Link>
                            <Link>
                            <img 
                            className='w-[32px] h-[32px] '
                            src={image2} 
                            alt="Apple logo" />
                            </Link>
                            </div>

                            <div className='font-[lora] font-[400] pt-9'>
                                <p>Don't have an account? <button
                                 onClick={handleSignUp}
                                 className='cursor-pointer'>
                                 Sign up!</button></ p>
                                
                            </div>
                            </div>
                        </div> 
                    </div>
    </Modal>

)}


{/* */}