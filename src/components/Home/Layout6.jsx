export default function Layout6() {
  return (
    <div className="w-full max-w-[1440px] h-auto lg:h-[346px] lg:px-[160px] px-[30px] lg:py-[80px] py-[30px] flex justify-center bg-gradient-to-b from-[#FFFFFF] to-[rgb(198,228,225)]">
      
      <div className="w-full max-w-[1220px] h-auto lg:h-[186px] grid gap-[20px] lg:gap-[32px]">
        
        <div className="w-full grid gap-[4px]">
          <h1 className="font-[Poppins] font-[600] text-[28px] lg:text-[39.81px]">
            Subscription
          </h1>
          <p className="font-[Poppins] font-[400] text-[20px] lg:text-[19.2px]">
            Get the latest news, updates, tips and tricks in your inbox.
          </p>
        </div>

        <div className="w-full rounded-[8px] border border-[#000000] bg-[#FFFFFF] flex flex-col sm:flex-row overflow-hidden">
          <input
            className="flex-1 h-[50px] lg:h-[61px] px-4 text-[#443f3f] outline-none"
            type="email"
            placeholder="Enter your email..."
          />
          <button className="font-[Poppins] font-[700] text-[16px] lg:text-[19.2px] bg-[#FF8E28] w-full sm:w-[163px] h-[50px] lg:h-[61px] flex items-center justify-center">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
