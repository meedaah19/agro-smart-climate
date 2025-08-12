import { Link } from "react-router-dom";
import logo1 from '../assets/linkedin logo.png';
import logo2 from '../assets/facebook logo.png';
import logo3 from '../assets/instagram logo.png';


export default function Layout7(){
    return(
        <footer className="w-full max-w-[1440px] h-auto lg:h-[400px] lg:pt-[40px] lg:pr-[160px] lg:pb-[100px] lg:pl-[160px] pt-[30px] pb-[30px] pr-[30px] pl-[30px] grid lg:gap-[100px] gap-[30px]  bg-gradient-to-t from-[#FFFFFF] to-[#C6E4E1] ">

            <div className="w-full max-w-[1170px] h-auto lg:h-[199px]  justify-between lg:flex ">

                <div className="w-[249px] h-[199px] grid lg:gap-[16px]">
                    <h2 className="font-[Poppins] font-[700] text-[19.2px] pt-5 lg:pt-0  ">Quick Links</h2>
                    <Link>Quick Links</Link>
                    <Link>Climate Tips for Farmers</Link>
                    <Link>Farming Tools & Forecast</Link>
                    <Link>FAQs</Link>
                    <Link>Contact Support</Link>
                </div>

                 <div className="w-[249px] h-[199px] grid lg:gap-[16px]">
                    <h2 className="font-[Poppins] font-[700] text-[19.2px] pt-5 lg:pt-0  ">Resources</h2>
                    <Link>Drought & Rainfall Alerts</Link>
                    <Link>Soil & Water Guides</Link>
                    <Link>Pest & Disease Updates</Link>
                    <Link>Crop Rotation Techniques</Link>
                    <Link>Educational Videos</Link>
                </div>

                <div className="w-[249px] h-[199px] grid lg:gap-[16px]">
                    <h2 className="font-[Poppins] font-[700] text-[19.2px] pt-5 lg:pt-0  ">Get Involved/ Community</h2>
                    <Link>Join Our Farmer Network</Link>
                    <Link>Volunteer</Link>
                    <Link>Share Your Story</Link>
                    <Link>Events  & Webinars</Link>
                </div>

                 <div className="w-[249px] h-[199px] grid pt-5 lg:pt-0 lg:gap-[16px]">
                    <h2 className="font-[Poppins] font-[700] text-[19.2px] ">Social Media</h2>
                    <Link><img className="w-[32px] h-[32px] " src={logo1} alt="linkedin logo" /></Link>
                    <Link><img className="w-[32px] h-[32px]" src={logo2} alt="facebook logo" /></Link>
                    <Link><img className="w-[32px] h-[32px]" src={logo3} alt="instagram logo" /></Link>
                </div>
            </div>
            <div className="lg:w-[1220px] lg:h-[17px] lg:pr-[160px] lg:flex justify-between font-[400] text-[13.33px] ">
                    <p>Copyright ClimateSmart Agro   @ 2025</p>
                    <p>Terms & Condition, Privacy Policy</p>
                </div>

        </footer>
    )
}