import { useContext } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import { ModalContext } from './store/ModalContext';
import Signup from './Signup';

function Root(){
    const modalCtx = useContext(ModalContext);

    return(
        <>
        <Navbar/>
        <main>
        <Outlet/>
        {modalCtx.progress === 'modal' && <Signup />}

        </main>
        <Footer/>
        </>
    )
}
export default Root;