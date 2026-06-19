import activeIcon from "../../assets/activeIcon.svg";
import inactiveIcon from "../../assets/inactiveIcon.png";

export default function Plan2() {
  return (
    <div className="w-[500px] mx-auto border p-6 rounded-b-3xl">
      <div className="flex items-center gap-4">
        <div className="bg-[#ECF2FF] w-[160px] h-[180px] rounded-2xl flex flex-col items-center justify-center ">
          <div className="">
            <div className="font-semibold text-[32px] text-[#52B4DA]">$79.99</div>
            <div className="text-[#11142D65] font-medium text-[20px]">
              Per Month
            </div>
          </div>
        </div>
        {/* list */}
        <div>
          <div className="grid gap-4 items-center">
            <div className="flex items-center gap-4">
              <div>
                <img className="w-4" src={activeIcon} alt="icon" />
              </div>
              <div>
                <span className="text-[14px] text-[#323445E6]">
                  Unlimited Job Posts
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-4" src={activeIcon} alt="icon" />
              </div>
              <div>
                <span className="text-[14px] text-[#323445E6]">
                  Instant Job Post Approval
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-4" src={activeIcon} alt="icon" />
              </div>
              <div>
                <span className="text-[14px] text-[#323445E6]">
                  Premium List Placement
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-4" src={activeIcon} alt="icon" />
              </div>
              <div>
                <span className="text-[14px] text-[#323445E6]">
                 Unlimited Job Applicants
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <button className="bg-[#1E3E85]/90 border-2 border-[#1E3E85] rounded-3xl my-6 w-full py-5 text-white font-semibold text-[20px]">
        Get Started
      </button>
    </div>
  );
}
