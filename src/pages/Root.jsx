import { useContext } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import { ModalContext } from '../components/store/ModalContext';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Kyc from '../components/KYC';

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
        </main>
        <Footer/>
        </>
    )
}
export default Root;