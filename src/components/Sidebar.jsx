import { NavLink } from 'react-router-dom';
import profile from '../assets/profile picture.jpg';
import { MdDashboard, MdInsertChart, } from 'react-icons/md';
import { FaRegQuestionCircle, FaShoppingBasket, FaUserCircle } from 'react-icons/fa';
import {GiGraduateCap, GiHammerNails } from 'react-icons/gi';
import { IoNotifications, IoSettings } from 'react-icons/io5';

export default function Sidebar(){
    return(
                    <div className="lg:w-[251px] h-auto lg:h-[1024px] py-[32px] flex flex-col gap-[128px] bg-[#ffffff] ">

                <div className="lg:w-[251px] h-auto lg:h-[960px] flex flex-col gap-[32px]">

                    <div className="lg:w-[251px] h-auto lg:h-[114px] font-[lora] text-[16px] text-center flex flex-col justify-center items-center gap-1">
                        <img 
                        className="w-[64px] h-[64px] rounded-full"
                        src={profile}
                        alt="profile picture" />
                        <h1 className="font-[400]">Welcome Hameedat</h1>
                        <h2 className="font-[700]">Private farmer</h2>
                    </div>

                        <nav  className='lg-w-[251px] h-auto lg:h-[537px] flex flex-col justify-between font-[lora] text-[16px]'>
                        <NavLink 
                        to="/user-dashboard"
                        className={({isActive}) => ` lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] flex lg:gap-24 ${
                                isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                            }`}
                        >Dashboard
                        <MdDashboard className='w-[25px]'/>
                        </NavLink>
                         <NavLink
                         to='User-profile'
                        className={({isActive}) => ` lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] flex lg:gap-23 ${
                                isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                            }`}
                        >My Profile
                        <FaUserCircle className='w-[25px]'/>
                        </NavLink>
                         <NavLink
                         to='/Expert'
                        className={({isActive}) => ` lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] flex lg:gap-30 ${
                                isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                            }`}
                        >Expert
                        <GiGraduateCap className='w-[25px]'/>
                        </NavLink>
                         <NavLink
                         to='market'
                        className={({isActive}) => ` lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] flex lg:gap-29 ${
                                isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                            }`}
                        >Market
                        <FaShoppingBasket className='w-[25px]'/>
                        </NavLink>
                         <NavLink
                         to='tools'
                        className={({isActive}) => ` lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] flex lg:gap-32 ${
                                isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                            }`}
                        >Tools
                        <GiHammerNails className='w-[25px]'/>
                        </NavLink>
                         <NavLink
                         to= 'report'
                        className={({isActive}) => ` lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] flex lg:gap-29 ${
                                isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                            }`}
                        >Report
                        <MdInsertChart className='w-[25px]'/>
                        </NavLink>
                         <NavLink
                         to='alert'
                        className={({isActive}) => ` lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] flex lg:gap-32 ${
                                isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                            }`}
                        >Alert
                        <IoNotifications />
                        </NavLink>
                         <NavLink
                         to='faq'
                        className={({isActive}) => ` lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] flex lg:gap-32 ${
                                isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                            }`}
                        >FAQ
                        <FaRegQuestionCircle className='w-[25px]'/>
                        </NavLink>
                         <NavLink 
                         to='settings'
                        className={({isActive}) => ` lg:w-[251px] h-auto lg:h-[64px] py-[16px] lg:px-[32px] flex lg:gap-27 ${
                                isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                            }`}
                        >Settings
                        <IoSettings className='w-[25px]'/>
                        </NavLink>
                        </nav>
                </div>
            </div>
    )
}