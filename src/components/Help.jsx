import Plan1 from "./reusables/Plan1";
import Plan2 from "./reusables/Plan2";

export default function Help() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center pt-12 md:pt-16 mb-20">
      
      
      <h1 className="text-[#11142D] font-semibold text-2xl sm:text-3xl md:text-[40px] text-center mb-8 md:mb-12 leading-tight">
        Help Is One Click Away
      </h1>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 w-full max-w-md lg:max-w-none">
        <Plan1 />
        <Plan2 />
      </div>

    </div>
  );
}