import { FaCamera} from 'react-icons/fa6';
import Sidebar from '../components/Sidebar';
import profileImg from '../assets/profile picture.jpg'
import { useEffect, useState } from 'react';
import { kycData, updateUser, UserProfile } from '../components/api';
import { useNavigate } from 'react-router-dom';

export default function EditProfile(){
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [KYC, setKYC] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    function formatDate(dateString) {
      if (!dateString) return "Unknown";
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }

    function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      console.log("Selected file:", file);
    }
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

    function handleProfileChange(e) {
      const { id, value } = e.target;
      setProfile((prev) => ({
        ...prev,
        [id]: value
      }));
    }

    function handleKYCChange(e) {
      const { id, value } = e.target;
      setKYC((prev) => ({
        ...prev,
        [id]: value
      }));
    }

    async function handleSave() {
        try {
        setFetching(true);

        const result = await updateUser(profile, KYC);

        if (result.success) {
        alert("Profile and KYC updated!");
        navigate('../')
        } else {
        alert(result.message || "Failed to update");
        }
    } catch (error) {
        alert(error.message);
    } finally {
        setFetching(false);
    }
}


    if (!profile || !KYC) return <p>Loading...</p>;

    return (
      <div className="lg:w-[1440px] w-full h-auto lg:h-[1100px] flex lg:gap-[32px] bg-gradient-to-b from-[#A9DCD7] pb-[0px] via-[#FFFFFF] to-[#A9DCD7]">
        <Sidebar/>

        <div className='lg:w-[1150px] h-auto w-[320px] lg:h-[1024px] py-[32px] flex flex-col gap-[12px]'>
          <h4 className='font-[Poppins] font-[400] text-[23.04px]'>My profile</h4>

          <div className='lg:w-[1020px] w-full h-auto lg:h-[1000px] rounded-[30px] p-[32px] flex flex-col gap-[32px] bg-[#FFFFFF]'>
            
            <div className="lg:w-[980px] w-full h-auto flex lg:flex-row flex-col lg:justify-between lg:items-center">
              <div className="flex gap-[20px] items-center">
                <div className='relative'>
                  <img
                    className="w-[100px] h-[100px] rounded-full"
                    src={selectedImage}
                    alt="profile picture"
                  />
                  <input
                    type="file"
                    id="profile_pic"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    />
                  <label htmlFor="fileInput">
                    <FaCamera className="absolute bottom-1 right-1 text-black bg-white p-1 rounded-full cursor-pointer text-3xl" />
                    </label>
                </div>
              </div>
              <p className="font-[500] font-[Lora] pt-5 lg:pt-0 text-[16px]">
                Date joined: {formatDate(profile?.created_at)}
              </p>
            </div>

            <div className='lg:w-[980px] h-auto lg:h-[868px] flex flex-col lg:gap-[200px]'>
              <div className='lg:w-[980px] h-auto lg:h-[443px] flex lg:flex-row flex-col gap-[30px] lg:gap-[90px]'>
                
                <div className='lg:w-[480px] h-auto lg:h-[643px] flex flex-col gap-[30px] lg:gap-[150px]'>
                  <div className='lg:w-[480px] h-auto lg:h-[224px] flex flex-col gap-[18px]'>
                    <h6 className='font-[Poppins] font-[400] text-[19.2px]'>Personal information's</h6>
                    <div className='lg:w-[400px] h-auto lg:h-[287px] flex flex-col gap-[10px]'>
                      
                      <p className='font-[Lora] text-[13.33px]'>Full Name</p>
                      <input
                        id='name'
                        type='text'
                        value={profile?.name || ""}
                        onChange={handleProfileChange}
                        className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]'
                      />

                      <p className='font-[Lora] text-[13.33px] pt-3'>Email Address</p>
                      <input
                        id='email'
                        type='email'
                        value={profile?.email || ""}
                        onChange={handleProfileChange}
                        className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]'
                      />

                      <p className='font-[Lora] text-[13.33px] pt-3'>Add Phone Number</p>
                      <input
                        id='phone_number'
                        type='text'
                        value={profile?.phone_number || ""}
                        onChange={handleProfileChange}
                        className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]'
                      />
                    </div>
                  </div>

                  <div className='lg:w-[480px] h-auto lg:h-[187px] flex flex-col gap-[16px]'>
                    <h6 className='font-[Poppins] text-[19.2px]'>Function and equipment</h6>
                    <div className='lg:w-[400px] flex flex-col gap-[10px]'>
                      <p className='font-[Lora] text-[13.33px]'>Role for this Climate journey</p>
                      <input
                        id='role'
                        type='text'
                        value={KYC?.role || ""}
                        onChange={handleKYCChange}
                        className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]'
                      />

                      <p className='font-[Lora] text-[13.33px] pt-3'>General tools I work with</p>
                      <input
                        id='tools'
                        type='text'
                        value={KYC?.tools || ""}
                        onChange={handleKYCChange}
                        className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]'
                      />
                    </div>
                  </div>
                </div>

                <div className='lg:w-[400px] flex flex-col gap-[16px]'>
                  <div className='lg:w-[400px] flex justify-between font-[Poppins] text-[19.2px]'>
                    <h6>Registered crops</h6>
                  </div>

                  <div className='lg:w-[400px] flex flex-col gap-[32px]'>
                    <div className='lg:w-[400px] flex flex-col gap-[10px]'>
                      <p className='font-[Lora] text-[13.33px]'>Location</p>
                      <input
                        id='location'
                        type='text'
                        value={KYC?.location || ""}
                        onChange={handleKYCChange}
                        className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]'
                      />

                      <p className='font-[Lora] text-[13.33px]'>Crop at this location</p>
                      <input
                        id='crops'
                        type='text'
                        value={KYC?.crops || ""}
                        onChange={handleKYCChange}
                        className='font-[700] font-[Lora] text-[16px] h-[52px] lg:w-[400px] rounded-[8px] px-3 bg-[#A9DCD7]'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:w-[900px] flex gap-[32px] mt-5 justify-center items-center'>
                <button className='font-[Poppins] font-[700] text-[15px] lg:text-[19.2px] lg:w-[400px] rounded-[8px] border border-[#FF8E28] py-[8px] px-[16px] hover:bg-[#a55510]'>
                  Discard
                </button>
                <button
                  onClick={handleSave}
                  className='font-[Poppins] font-[700] text-[15px] lg:text-[19.2px] lg:w-[400px] rounded-[8px] border border-[#FF8E28] py-[8px] px-[16px] bg-[#FF8E28] hover:bg-[#a55510]'
                >
                  {fetching ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
