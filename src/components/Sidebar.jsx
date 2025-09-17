import { NavLink, useNavigate } from 'react-router-dom';
import { MdDashboard, MdInsertChart } from 'react-icons/md';
import { FaBars, FaRegQuestionCircle, FaShoppingBasket, FaTimes, FaUserCircle } from 'react-icons/fa';
import { GiGraduateCap, GiHammerNails } from 'react-icons/gi';
import { IoNotifications, IoSettings } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { kycData, logoutUser, UserProfile } from './api';

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [profile, setProfile] = useState({});
    const [KYC, setKYC] = useState({});

    const navigate = useNavigate();

    function handleLogout(){    
        logoutUser();
        navigate('/');
        setIsLoggedIn(false);
    }

    useEffect(() => {
        async function fetchProfile() {
          const result = await UserProfile();
          if (result.success) {
            setProfile(result.profile);
          }
        }
        fetchProfile();
        }, []);

         useEffect(() => {
            async function fetchKYC() {
              const result = await kycData();
              if (result.success) {
                setKYC(result.kyc);
              }
            }
            fetchKYC();
            }, []);
        

    return (
        <div>
            <div className="lg:hidden pt-[26px] px-2">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-xl text-black"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <div
                className={`lg:w-[250px] overflow-x-hidden h-auto lg:h-[1024px] py-[32px] flex flex-col gap-[128px] bg-[#ffffff] 
                 absolute overflow-y-auto top-45 left-0 z-50 p-4 transition-transform duration-300
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}
                lg:static lg:translate-x-0`}
            >

                <div className="lg:w-[251px] h-auto lg:h-[960px] flex flex-col gap-[32px]">

                    <div className="lg:w-[251px] h-auto lg:h-[114px] font-[lora] text-[16px] text-center flex flex-col justify-center items-center gap-1">
                        <img
                            className="w-[64px] h-[64px] rounded-full"
                            src={profile?.profile_pic}
                            alt="profile picture" />
                        <h1 className="font-[400]">Welcome {profile?.name}</h1>
                        <h2 className="font-[700]">{KYC?.name}</h2>
                    </div>

                    <nav className='lg-w-[251px] h-auto lg:h-[537px] flex flex-col gap-5 justify-between font-[lora] text-[16px]'>

                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) => ` lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-23 ${isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                                }`}
                        >Dashboard
                            <MdDashboard className='w-[25px]' />
                        </NavLink>

                        <NavLink
                            to='/user-profile'
                            className={({ isActive }) => ` lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-23 ${isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                                }`}
                        >My Profile
                            <FaUserCircle className='w-[25px]' />
                        </NavLink>

                        <NavLink
                            to='/'
                            className={({ isActive }) => ` lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-30 ${isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                                }`}
                        >Expert
                            <GiGraduateCap className='w-[25px]' />
                        </NavLink>

                        <NavLink
                            to='/'
                            className={({ isActive }) => ` lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-29 ${isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                                }`}
                        >Market
                            <FaShoppingBasket className='w-[25px]' />
                        </NavLink>

                        <NavLink
                            to='/'
                            className={({ isActive }) => ` lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-32 ${isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                                }`}
                        >Tools
                            <GiHammerNails className='w-[25px]' />
                        </NavLink>

                        <NavLink
                            to='/'
                            className={({ isActive }) => ` lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-29 ${isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                                }`}
                        >Report
                            <MdInsertChart className='w-[25px]' />
                        </NavLink>

                        <NavLink
                            to='/'
                            className={({ isActive }) => ` lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-32 ${isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                                }`}
                        >Alert
                            <IoNotifications />
                        </NavLink>

                        <NavLink
                            to='/'
                            className={({ isActive }) => ` lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-32 ${isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                                }`}
                        >FAQ
                            <FaRegQuestionCircle className='w-[25px]' />
                        </NavLink>

                        <NavLink
                            to='/settings'
                            className={({ isActive }) => ` lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-27 ${isActive ? 'bg-[#C6E4E1]' : 'hover:bg-[#C6E4E1]'
                                }`}
                        >Settings
                            <IoSettings className='w-[25px]' />
                        </NavLink>

                        <button
                        className=' lg:w-[230px] h-auto lg:h-[64px] py-[16px] lg:px-[20px] px-5 flex lg:gap-27 cursor-pointer hover:bg-[#C6E4E1]'
                        onClick={handleLogout}
                        >{isLoggedIn ? 'Logging out' : 'Logout out'}</button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
