import { NavLink } from "react-router-dom";
import { useContext, useState } from 'react';
import img1 from '../../assets/Frame 86.png';
import {FaBars, FaTimes } from 'react-icons/fa';
import { ModalContext } from "../store/ModalContext";
import { BsThreeDotsVertical } from "react-icons/bs";
import { isTokenValid } from "../api";
import { useNavigate } from "react-router-dom";


function Navbar(){ 
    const loggedIn = isTokenValid();
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const modalCtx = useContext(ModalContext)

    function handleOpenModal(){
        modalCtx.showModal('signin');
    }


    return(
        <nav className="transition-all duration-200">
            <div 
            className="bg-[#A9DCD7] px-8 flex justify-between relative z-50  mx-auto lg:pr-[160px] lg:pl-[160px] h-[100px]  lg:h-[87px] lg:pt-[8px] lg:pb-[8px]  item-center">
                 <img 
                 src={img1} 
                 alt="logo" 
                 className="h-25 py-3 lg:py-0 lg:h-[70px]  w-25" />

                    <div className="lg:hidden pt-[8px] ">
                        <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="text-2xl py-7 lg:py-0 text-black">
                        {menuOpen ? <FaTimes /> : <BsThreeDotsVertical />}
                        </button>
                    </div>
        
                <ul className={`${
                    menuOpen ? "flex" : "hidden"
                    } absolute top-full left-0 w-full h-[60vh] bg-[#A9DCD7] flex-col items-start px-6 lg:pt-5
                    py-4 gap-10 font-[700] font-[Poppins] lg:text-[15px] text-xl
                    lg:static lg:flex lg:gap-[40px] lg:flex-row lg:w-auto lg:bg-transparent lg:py-0 lg:px-0`}
                    > 
                        <li>
                            <NavLink 
                            className={({isActive}) => ` lg:pl-6 pl-2 p-[10px] rounded-xl ${
                                isActive ? 'bg-[#FF8E28]' : 'hover:bg-[#FF8E28]'
                            }`} 
                            to="/" 
                            onClick={() => setMenuOpen(false)}>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive}) => ` lg:pl-5 pl-2  p-[10px] rounded-xl ${
                                isActive ? 'bg-[#FF8E28]' : 'hover:bg-[#FF8E28]'
                            }`} 
                            to="/about" 
                            onClick={() => setMenuOpen(false)}>About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive}) => ` lg:pl-4 pl-2  p-[10px] rounded-xl ${
                                isActive ? 'bg-[#FF8E28]' : 'hover:bg-[#FF8E28]'
                            }`} 
                            to="/climate-tools" 
                            onClick={() => setMenuOpen(false)}>Climate Tools
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive}) => ` lg:pl-5 pl-2  p-[10px] rounded-xl ${
                                isActive ? 'bg-[#FF8E28]' : 'hover:bg-[#FF8E28]'
                            }`} 
                            to="/export-hub" 
                            onClick={() => setMenuOpen(false)}>Export Hub
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive}) =>  ` lg:pl-5 pl-2  p-[10px] pt-5 rounded-xl ${
                                isActive ? 'bg-[#FF8E28]' : 'hover:bg-[#FF8E28]'
                            }`} 
                            to="/smart-farming" 
                            onClick={() => setMenuOpen(false)}>Smart Farming
                            </NavLink>
                        </li>
                        <li className="lg:ml-auto -mt-2 ">
                        <button
                            className="text-xl  lg:text-[19.2px] font-[700] text-black border border-[#FF7F18] hover:bg-[#FF8E28] rounded-[8px] lg:pl-2 px-6 lg:py-2 flex items-center justify-center h-[40px]"
                            onClick={() => {setMenuOpen(false);
                            if (loggedIn) {
                                navigate("/dashboard"); 
                                } else {
                                handleOpenModal();
                                }}}
                        >
                            {loggedIn ? "Dashboard" : "Login"}
                        </button>
                    </li>
                   
                </ul>
            </div>      
        </nav>
    )
}

export default Navbar;

