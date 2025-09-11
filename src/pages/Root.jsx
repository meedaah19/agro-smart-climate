import { useContext } from 'react';
import Footer from '../components/Root/Footer';
import Navbar from '../components/Root/Navbar';
import { Outlet } from "react-router-dom";
import { ModalContext } from '../components/store/ModalContext';
import Signup from '../components/Modals/Signup';
import Signin from '../components/Modals/Signin';
import Kyc from '../components/Modals/KYC';
import ResetPassword from '../components/Modals/ResetPassword';
import ForgotPassword from '../components/Modals/FogotPassword';

function Root(){
    const modalCtx = useContext(ModalContext);

    return(
        <>
        <Navbar/>
        <main>
        <Outlet/>
        {modalCtx.modalType === 'signup' && <Signup />}
        {modalCtx.modalType === 'signin' && <Signin />}
        {modalCtx.modalType === 'kyc' && <Kyc/>}
        {modalCtx.modalType === 'resetPassword' && <ResetPassword/> }
        {modalCtx.modalType === 'forgotPassword' && <ForgotPassword/> }

        </main>
        <Footer/>
        </>
    )
}
export default Root;