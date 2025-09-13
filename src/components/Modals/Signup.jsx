import image from '../../assets/33bc12b4-3f40-4f92-8889-e524eccd0839.jpg'
import image2 from '../../assets/ad1bf210-ca89-4d77-a4c2-26c06338fcd2.jpg';
import image3 from '../../assets/6db1f554-7f73-41cd-845b-1572062b48e4.jpg';
import image4 from '../../assets/4ac7c386-857e-4361-95d2-9b04966521bb.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import { ModalContext } from '../store/ModalContext';
import { FaTimes } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from '../api';


export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const modalCtx = useContext(ModalContext);
    const navigate = useNavigate();
    const [fetching, setFetching] = useState(false);
    const [errors, setErrors] = useState([]);
    const [enteredValue, setEnteredValue] = useState({});

    function handleCloseModal() {
    modalCtx.hideModal();
    }

    function handleSignIn() {
    modalCtx.showModal('signin');
    }

    async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const cpassword = formData.get('cpassword');

    let newErrors = [];

    if (newErrors.length > 0) {
        setErrors(newErrors);
        setEnteredValue({ name, email, password, cpassword });
        return;
    }

        try {
            setFetching(true);
            const result = await registerUser(name, email, password);
            if (result.success) {
            handleCloseModal();
            navigate("/accountCreated");
            alert(result.message);
            }
        } catch (error) {
            alert(error.message);
        }finally {
            setFetching(false);
            setEnteredValue({
                name: '',
                email: '',
                password: '',
                cpassword: ''
            });
        }
        
        
    }
    return(
    <Modal
    open={modalCtx.modalType === 'signup'}
    onClose={handleCloseModal}

    >

        <div className='lg:w-[485px] h-auto lg:h-[1007px] gap-[32px] grid '>

            <button 
            onClick={handleCloseModal} 
            className="absolute top-4 h-[34px] w-[34px] border-1 rounded-full right-4 text-xl pl-1.5   text-black hover:text-gray-600"
            >
            <FaTimes />
            </button>

        <div className="lg:w-[485px] h-auto lg:h-[943px] flex flex-col lg:gap-[64px] gap-10 ">

        <form onSubmit={handleSubmit} className='lg:w-[485px] h-[740px] lg:h-[781px] flex flex-col gap-10 lg:gap-[64px]'>
                    <div className='lg:w-[485px] lg:h-[144px] text-center flex flex-col   '>
                        <h3 className="font-[Poppins] font-[400] text-[25px] lg:text-[27.65px] ">
                            Hello there
                        </h3>
                        <h1 className="font-[Poppins] font-[500] text-[30px] lg:text-[39.81px]">Create your Account </h1>
                        <p className=" font-[Poppins] font-[400] text-[15px] lg:text-[19.2px] ">Fill in your details to explore more.</p>
                    </div>

                    <div className="lg:w-[485px] h-[483px] w-[200px] grid gap-[32px]">
                        <Input
                        className='p-3' 
                        label='Enter name' 
                        id='name' 
                        type="text" 
                        value={enteredValue?.name} />

                        <Input
                        className='p-3' 
                        label='Enter email address' 
                        id='email' 
                        type="email" 
                        value={enteredValue?.email}
                        placeholder='johnjoe@gmail.com' />

                        <div className='relative'>
                            <Input 
                            className='p-3' 
                            label='Enter password' 
                            id='password' 
                            type={showPassword ? "text" : "password"}
                            value={enteredValue?.password}
                            placeholder='..........' />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute pt-8 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        
                        <div className='relative'>
                            <Input 
                            className='p-3' 
                            label='Confirm password' 
                            id='cpassword' 
                            type={showPassword ? "text" : "password"}
                           value={enteredValue?.cpassword}
                            placeholder='..........' /> 
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute pt-8 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>

                        {errors && (
                           <ul className='bg-red-200 '>
                            {errors.map((error) => (
                            <li key={error}>{error}</li>
                            ))}
                        </ul>   
                        )}
                        
                        <button 
                        className="bg-[#FF8E28] lg:w-[485px] h-[56px] rounded-[8px] py-[8px] px-[16px] font-[Poppins] font-[700] text-[19.2px] cursor-pointer "
                        type='submit'
                        disabled={fetching}>
                            {fetching ? 'Creating Account...' : 'Create Account'}
                            </button>
                    </div>
                    </form>
                    
                        <img className='lg:w-[485px] w-[250px] h-[23px] ' src={image} alt="or option" />

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
                                <p>Have an account? 
                                    <button
                                onClick={handleSignIn}
                                className='cursor-pointer'
                                >Login!</button></ p>
                                
                            </div>
                            </div>
                        </div> 
                    </div>
    </Modal>

)}


{/* */}