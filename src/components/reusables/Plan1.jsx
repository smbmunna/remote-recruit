import activeIcon from "../../assets/activeIcon.svg";
import inactiveIcon from "../../assets/inactiveIcon.png";

export default function Plan1() {
  return (
    <div className="w-full max-w-[500px] mx-auto p-4 sm:p-6 rounded-3xl bg-white shadow-md border border-slate-100">
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-4">
        
        <div className="bg-[#ECF2FF] w-full sm:w-[160px] h-[140px] sm:h-[180px] rounded-2xl flex flex-col items-center justify-center shrink-0">
          <div className="text-center">
            <div className="font-semibold text-3xl sm:text-[32px] text-[#52B4DA]">Free</div>
            <div className="text-[#11142D65] font-medium text-lg sm:text-[20px]">
              Basic
            </div>
          </div>
        </div>
        
        <div className="w-full">
          <div className="grid gap-3.5 sm:gap-4">
            
            <div className="flex items-start sm:items-center gap-4">
              <div className="shrink-0 mt-0.5 sm:mt-0">
                <img className="w-4 h-4" src={activeIcon} alt="active feature icon" />
              </div>
              <span className="text-[14px] text-[#323445E6] leading-tight">
                1 Active Job
              </span>
            </div>
            
            <div className="flex items-start sm:items-center gap-4">
              <div className="shrink-0 mt-0.5 sm:mt-0">
                <img className="w-4 h-4" src={activeIcon} alt="active feature icon" />
              </div>
              <span className="text-[14px] text-[#323445E6] leading-tight">
                Basic List Placement
              </span>
            </div>
            
            <div className="flex items-start sm:items-center gap-4">
              <div className="shrink-0 mt-0.5 sm:mt-0">
                <img className="w-4 h-4" src={inactiveIcon} alt="inactive feature icon" />
              </div>
              <span className="text-[14px] text-[#323445E6] leading-tight">
                Unlimited Job Applicants
              </span>
            </div>
            
            <div className="flex items-start sm:items-center gap-4">
              <div className="shrink-0 mt-0.5 sm:mt-0">
                <img className="w-4 h-4" src={inactiveIcon} alt="inactive feature icon" />
              </div>
              <span className="text-[14px] text-[#323445E6] leading-tight">
                Invite Anyone to Apply to Your Jobs
              </span>
            </div>

          </div>
        </div>

      </div>
            
      <button className="border-2 border-[#1E3E85] rounded-3xl mt-6 sm:my-6 w-full py-4 sm:py-5 text-[#1E3E85] font-semibold text-lg sm:text-[20px] hover:bg-[#1E3E85]/5 active:scale-[0.99] transition-all duration-200 cursor-pointer">
        Get Started
      </button>

    </div>
  );
}