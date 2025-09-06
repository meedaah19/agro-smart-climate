import {useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useContext, useActionState, useState } from 'react';
import { ModalContext } from '../store/ModalContext';
import { FaTimes } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { resetPassword } from '../http';


export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const modalCtx = useContext(ModalContext);

    function handleCloseModal(){
        modalCtx.hideModal();
    }

     async function validInput(prevFormState, formData) {
        const token = formData.get('token');
        const newPassword = formData.get('newPassword');

        let errors = [];

        if(newPassword.length < 6){
            errors.push('You must provide a password with at least six characters.');
        }

        if(errors.length > 0) {
            return { errors, enteredValue: {
                newPassword,
            } };
                }

            try {
                const res = await resetPassword( token, newPassword );

                console.log("reset password successful:", res);
                modalCtx.hideModal();
                navigate('resetPassword');

                return { errors: null };
            } catch (err) {
                return { errors: [err.message] };
            }
                
            
    }

    const [formState, formAction] = useActionState(validInput, {errors:null});


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

        <form action={formAction} className='lg:w-[485px] h-auto lg:h-[488px] flex flex-col gap-10 lg:gap-[64px] '>
        <div className='lg:w-[485px] h-auto lg:h-[111px] text-center grid gap-[10px]  '>
                        <h3 className="font-[Poppins] font-[400] text-[25px] lg:text-[27.65px] ">
                            Reset Password
                        </h3>
                    </div>

                    <div className="lg:w-[485px] h-[313px] w-[200px] grid gap-[32px]">

                        <Input 
                        className='p-3'
                        label='Token' 
                        id='token' 
                        type='token'
                        defaultValue={formState.enteredValue?.name}  
                        placeholder='Token' />

                        <div className='relative '>
                            <Input 
                            className='p-3'
                            label='Enter New password' 
                            id='newPassword' 
                            type={showPassword ? "text" : "newPassword"}
                            defaultValue={formState.enteredValue?.password}  
                            placeholder='..........' />
                           <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute pt-8 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                         {formState.errors && (
                           <ul className='bg-red-200 '>
                            {formState.errors.map((error) => (
                            <li key={error}>{error}</li>
                            ))}
                        </ul>   
                        )}

                        <button
                         className="lg:w-[485px] h-[56px] rounded-[8px] bg-[#FF8E28] py-[8px] px-[16px] font-[Poppins] font-[700] text-[19.2px] ">Reset Password</button>
                    </div>

                    </form>                        
                    </div> 
                    </div>
    </Modal>

)}


{/* */}