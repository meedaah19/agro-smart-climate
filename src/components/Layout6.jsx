export default function Layout6(){
    return(
        <div className="w-full max-w-[1440px] h-auto lg:h-[346px] lg:pr-[160px] lg:pl-[160px] pl-[30px] pr-[30px]  lg:pt-[80px] lg:pb-[80px] pt-[30px] pb-[30px] flex gap-[10px] bg-gradient-to-b from-[#FFFFFF] to-[rgb(198,228,225)]">

            <div className=" lg:w-[1220px] h-auto lg:h-[186px] rounded-[20x] grid gap-[20px] lg:gap-[32px] ">

                <div className=" lg:w-[1120px] lg:h-[93px] grid gap-[4px] ">
                <h1 className=" font-[Poppins] font-[600] text-[28px] lg:text-[39.81px] ">Subscription</h1>
                <p className=" font-[Poppins] font-[400] lg:text-[19.2px] text-[20px] ">Get the latest news, updates, tips and tricks in your inbox.</p>
                </div>

                <div className=" lg:w-[1120px] lg:h-[61px] rounded-[8px] border-[1px] bg-[#FFFFFF] border-[#000000] flex ">
                    <input className="lg:w-[957px] lg:h-[61px] rounded-tl-[8px] rounded-bl-[8px] lg:p-[10px] flex gap-[10px] text-[#443f3f] " type="email" placeholder="Enter your email..." />
                        <button className="font-[Poppins] font-[700] text-[19.2px] bg-[#FF8E28] lg:w-[163px] lg:h-[59px] rounded-tr-[8px] rounded-br-[8px] pt-[16px] pr-[16px] pb-[16px] pl-[40px] flex gap-[10px]">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
