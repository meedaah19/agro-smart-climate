import { useContext } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import { ModalContext } from './store/ModalContext';
import Signup from './Signup';
import Signin from './Signin';

function Root(){
    const modalCtx = useContext(ModalContext);

    return(
        <>
        <Navbar/>
        <main>
        <Outlet/>
        {modalCtx.modalType === 'signup' && <Signup />}
        {modalCtx.modalType === 'signin' && <Signin />}

        </main>
        <Footer/>
        </>
    )
}
export default Root;