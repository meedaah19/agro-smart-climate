import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import { ModalContext } from '../store/ModalContext';
import { FaTimes } from 'react-icons/fa';
import { forgotPassword} from '../http';


export default function ForgotPassword() {
    const modalCtx = useContext(ModalContext);
    const [errors, setErrors] = useState([]);
    const [enteredValue, setEnteredValue] = useState({});
    const [fetching, setFetching] = useState(false);

    function handleCloseModal(){
        modalCtx.hideModal();
    }

     async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');

        let errors = [];

        if(!email.includes('@')){
            errors.push('Invalid email address');
        }

        if (errors.length > 0) {
            setErrors(errors);
            setEnteredValue({email});
            return;
        };


        try{
            setFetching(true);
            const res = await forgotPassword(email);

            console.log("forgot password:", res);
            handleCloseModal();
            modalCtx.showModal('resetPassword');

            return { errors: null };
        } catch (err) {
             console.warn("Forgot password error:", err.message);

            if (
            err.message.includes("already") ||
            err.message.includes("Internal Server Error")
        ) {
            handleCloseModal();
            modalCtx.showModal('resetPassword');
        } else {
            setErrors([err.message]);
        }
        return { errors: [err.message] };
        } finally {
            setFetching(false);
        }
    }

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

        <form onSubmit={handleSubmit} className='lg:w-[485px] h-auto lg:h-[488px] flex flex-col gap-10 lg:gap-[64px] '>

                    <div className="lg:w-[485px] h-[313px] w-[200px] grid gap-[32px]">

                        <Input 
                        className='p-3'
                        label='Enter your Email' 
                        id='email' 
                        type='email'
                        defaultValue={enteredValue?.name}  
                        placeholder='johnjoe@gmail.com' />

                         {errors.length > 0 && (
                            <ul className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                                {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                                ))}
                            </ul>
                            )}

                        <p>Press enter, a token will be sent to your email</p>

                        <button
                         className="lg:w-[485px] h-[56px] rounded-[8px] bg-[#FF8E28] py-[8px] px-[16px] font-[Poppins] font-[700] text-[19.2px] cursor-pointer"
                         type='submit'
                         disabled={fetching}
                         >{fetching ? 'Loading...' : 'Enter'}</button>
                    </div>

                    </form>                        
                    </div> 
                    </div>
    </Modal>

)}


{/* */}