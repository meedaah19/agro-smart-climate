import { FaCamera, FaPen, FaTrash } from 'react-icons/fa6';
import Sidebar from '../components/Sidebar';
import profileImg from '../assets/profile picture.jpg'
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { kycData, UserProfile } from '../components/api';

export default function Profile(){
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [KYC, setKYC] = useState(null);

  function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
  }

  function handleClick(){
    console.log('button click');
    navigate('editProfile');
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
    <div className="lg:w-[1400px] w-full h-auto lg:h-[1100px] flex lg:gap-[32px] bg-gradient-to-b from-[#A9DCD7] pb-[0px] via-[#FFFFFF] to-[#A9DCD7]">

      <Sidebar />

      {!profile || !KYC ? (
      <p className='text-center text-2xl flex items-center '>Loading...</p>
    ) : (
      <div className="relative z-[1] lg:z-[100] h-auto w-[320px] md:w-[800px] pr-3 lg:h-[1024px] flex flex-col gap-[12px] py-[12px] lg:w-[1030px]">
        <h4 className="font-[Poppins] font-[400] text-[23.04px]">My profile</h4>

        <div className="relative z-[60] lg:w-[1020px] w-[320px] h-auto lg:h-[700px] rounded-[30px] p-[32px] flex flex-col gap-[32px] bg-[#FFFFFF]">

          <div className="lg:w-[980px] w-full h-auto flex lg:flex-row flex-col lg:justify-between lg:items-center">
            <div className="flex gap-[20px] items-center">
              <div>
                <img
                  className="w-[100px] h-[100px] rounded-full"
                  src={profileImg}
                  alt="profile picture"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleClick}
                  className="text-[16px] font-[500] font-[Lora] cursor-pointer hover:underline"
                >
                  Edit Profile
                </button>
                <FaEdit
                  onClick={handleClick}
                  className="cursor-pointer hover:text-orange-500"
                  aria-label="Edit Profile"
                />
              </div>
            </div>

            <p className="font-[500] font-[Lora] pt-5 lg:pt-0 text-[16px]">
              Date joined: {formatDate(profile.created_at)}
            </p>
          </div>

          <div className="lg:w-[980px] h-auto lg:h-[568px] flex flex-col gap-[64px]">
            <div className="lg:w-[980px] h-auto lg:h-[443px] flex lg:flex-row flex-col gap-[30px] lg:gap-[90px]">
              <div className="lg:w-[480px] h-auto lg:h-[443px] flex flex-col gap-[32px]">
                <div className="lg:w-[480px] h-auto lg:h-[224px] flex flex-col gap-[16px]">
                  <h6 className="font-[Poppins] font-[400] text-[19.2px]">Personal informations</h6>
                  <div className="lg:w-[400px] h-auto lg:h-[114px] gap-[16px]">
                    <p className="font-[Lora] font-[400] text-[13.33px]">Full Name</p>
                    <p className="font-[700] font-[Lora] text-[16px] border-b-[1px]">{profile.name}</p>
                    <p className="font-[Lora] font-[400] text-[13.33px] pt-3">Email Address</p>
                    <p className="font-[700] font-[Lora] text-[16px] border-b-[1px]">{profile.email}</p>
                    <p className="font-[Lora] font-[400] text-[13.33px] pt-3">Phone Number</p>
                    <p className="font-[700] font-[Lora] text-[16px] border-b-[1px]">{profile.phone_number}</p>
                  </div>
                </div>

                <div className="lg:w-[480px] h-auto lg:h-[187px] flex flex-col gap-[16px]">
                  <h6 className="font-[Poppins] font-[400] text-[19.2px]">Function and equipment</h6>
                  <div className="lg:w-[400px] h-auto lg:h-[114px] gap-[16px]">
                    <p className="font-[Lora] font-[400] text-[13.33px]">Role for this Climate journey</p>
                    <p className="font-[700] font-[Lora] text-[16px] border-b-[1px]">{KYC.role}</p>
                    <p className="font-[Lora] font-[400] text-[13.33px] pt-3">General tools I work with</p>
                    <p className="font-[700] font-[Lora] text-[16px] border-b-[1px]">{KYC.tools}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-[400px] h-auto lg:h-[443px] flex flex-col gap-[16px]">
                <div className="lg:w-[400px] h-[29px]  font-[Poppins] font-[400] text-[19.2px]">
                  <h6>Registered crops</h6>
                </div>

                <div className="lg:w-[400px] h-auto lg:h-[194px] flex flex-col gap-[32px]">
                  <div className="lg:w-[400px] h-auto lg:h-[114px] gap-[16px]">
                    <p className="font-[Lora] font-[400] text-[13.33px]">Location</p>
                    <p className="font-[700] font-[Lora] text-[16px] border-b-[1px]">{KYC.location}</p>
                    <p className="font-[Lora] font-[400] text-[13.33px] pt-3">Crop at this location</p>
                    <p className="font-[700] font-[Lora] text-[16px] border-b-[1px]">{KYC.crops}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    )}
    </div>
  );
}
