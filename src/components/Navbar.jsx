import { Link } from "react-router-dom";
import { useState } from 'react';
import img1 from '../assets/Frame 86.png';
import {FaBars, FaTimes } from 'react-icons/fa';


function Navbar(){ 
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav>
            <div className="bg-[#A9DCD7] px-8 flex justify-between relative z-50 max-w-[1440px] mx-auto lg:pr-[160px] lg:pl-[160px]  lg:h-[87px] pt-[8px] pb-[8px] item-center">
                 <img src={img1} alt="logo" className="h-[45px] lg:h-[70px]" />

                    <div className="lg:hidden pt-[8px]">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl text-black">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
        
                <ul className={`${
                    menuOpen ? "flex" : "hidden"
                    } absolute top-full left-0 w-full bg-[#C6E4E1] flex-col items-start px-6 lg:pt-3
                    py-4 gap-[8px] font-[700] font-[Poppins] text-[15px] 
                    lg:static lg:flex lg:gap-[25px] lg:flex-row lg:w-auto lg:bg-transparent lg:py-0 lg:px-0`}
                    > 
                        <li className="w-[75px] h-[44px] p-[10px]" ><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li className="w-[100px] h-[44px] p-[10px]"><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                        <li className="w-[120px] h-[44px] p-[10px]"><Link to="/climate-tools" onClick={() => setMenuOpen(false)}>Climate Tools</Link></li>
                        <li className="w-[120px] h-[44px] p-[10px]"><Link to="/export-hub" onClick={() => setMenuOpen(false)}>Export Hub</Link></li>
                        <li className="w-[120px] h-[44px] p-[10px]"><Link to="/smart-farming" onClick={() => setMenuOpen(false)}>Smart Farming</Link></li>
                        <li>
                        <div className="w-[220px] h-[45px] rounded-[8px] border-[1px] border-[#FF7F18] pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-[19.2px]  gap-[8px] text-center "><button>Create Account</button></div>
        </li>
                   
                </ul>
            </div>      
        </nav>
    )
}

export default Navbar;

