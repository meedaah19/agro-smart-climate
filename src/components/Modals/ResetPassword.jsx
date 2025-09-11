import {  useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import { ModalContext } from '../store/ModalContext';
import { FaTimes } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const modalCtx = useContext(ModalContext);
    const [fetching, setFetching] = useState(false);
    const [errors, setErrors] = useState([]);
    const [enteredValue, setEnteredValue] = useState({});

    function handleCloseModal(){
        modalCtx.hideModal();
    }


    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const token = formData.get('token');
        const newPassword = formData.get('newPassword');

        let errors = [];

        if(newPassword.length < 6){
            errors.push('You must provide a password with at least six characters.');
        }

        if (errors.length > 0) {
        setErrors(errors);
        setEnteredValue({ token, newPassword });
        return;
    }
        handleCloseModal();
        modalCtx.showModal('signin');            
    }

    return(
    <Modal
    open={modalCtx.modalType === 'resetPassword'}
    onClose={handleCloseModal}
    >

        <div className='lg:w-[485px] h-auto lg:h-[809px] gap-[32px] flex flex-col '>

            <button 
            onClick={handleCloseModal} 
            className="absolute top-4 h-[34px] w-[34px] border-1 rounded-full right-4 text-xl pl-1.5   text-black hover:text-gray-600"
            >
            <FaTimes />
            </button>

        <div className="lg:w-[485px] h-auto lg:h-[745px] flex flex-col gap-[64px] ">

        <form onSubmit={handleSubmit} className='lg:w-[485px] h-auto lg:h-[488px] flex flex-col gap-10 lg:gap-[64px] '>
                        <h3 className="font-[Poppins] font-[400] text-[25px] lg:text-[27.65px] ">
                            Enter Token and reset password
                        </h3>

                    <div className="lg:w-[485px] h-[313px] w-[200px] grid gap-[32px]">

                        <Input 
                        className='p-3'
                        label='Token' 
                        id='token' 
                        type='token'
                        defaultValue={enteredValue?.token}  
                        placeholder='.........' />

                         <div className='relative '>
                            <Input 
                            className='p-3'
                            label='Enter your new password' 
                            id='newPassword' 
                            type={showPassword ? "text" : "password"}
                            defaultValue={enteredValue?.newPassword}  
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
                         className="lg:w-[485px] h-[56px] rounded-[8px] bg-[#FF8E28] py-[8px] px-[16px] font-[Poppins] font-[700] text-[19.2px] "
                         type='submit'
                         disabled={fetching}
                         >{fetching ? 'resetting...' : 'Reset password'}</button>
                    </div>

                    </form>
                        </div> 
                    </div>
    </Modal>

)}


{/* */}