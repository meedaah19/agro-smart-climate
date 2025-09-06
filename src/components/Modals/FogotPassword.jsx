import {useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useContext, useActionState, useState } from 'react';
import { ModalContext } from '../store/ModalContext';
import { FaTimes } from 'react-icons/fa';
import { forgotPassword} from '../http';


export default function ForgotPassword() {
    const navigate = useNavigate();
    const modalCtx = useContext(ModalContext);

    function handleCloseModal(){
        modalCtx.hideModal();
    }

     async function validInput(prevFormState, formData) {
        const email = formData.get('email');

        let errors = [];

        if(!email.includes('@')){
            errors.push('Invalid email address');
        }

        if(errors.length > 0) {
            return { errors, enteredValue: {
                newPassword,
            } };
                }

            try{
                const res = await forgotPassword(email);
        
                        console.log("forgot password:", res);
                        handleCloseModal();
                        navigate('resetPassword');
        
                        return { errors: null };
                    } catch (err) {
                        return { errors: [err.message] };
                    }
                
            
    }

    const [formState, formAction] = useActionState(validInput, {errors:null});


    return(
    <Modal
    open={modalCtx.modalType === 'forgotPassword'}
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

                    <div className="lg:w-[485px] h-[313px] w-[200px] grid gap-[32px]">

                        <Input 
                        className='p-3'
                        label='Enter your Email' 
                        id='email' 
                        type='email'
                        defaultValue={formState.enteredValue?.name}  
                        placeholder='johnjoe@gmail.com' />

                         {formState.errors && (
                           <ul className='bg-red-200 '>
                            {formState.errors.map((error) => (
                            <li key={error}>{error}</li>
                            ))}
                        </ul>   
                        )}
                        <p>Press enter, a token will be sent to your email</p>

                        <button
                         className="lg:w-[485px] h-[56px] rounded-[8px] bg-[#FF8E28] py-[8px] px-[16px] font-[Poppins] font-[700] text-[19.2px] ">Enter</button>
                    </div>

                    </form>                        
                    </div> 
                    </div>
    </Modal>

)}


{/* */}