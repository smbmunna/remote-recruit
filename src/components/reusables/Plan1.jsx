import activeIcon from "../../assets/activeIcon.svg";
import inactiveIcon from "../../assets/inactiveIcon.png";

export default function Plan1() {
  return (
    <div className="w-[500px] mx-auto p-6 rounded-b-3xl bg-white">
      <div className="flex items-center gap-4">
        <div className="bg-[#ECF2FF] w-[160px] h-[180px] rounded-2xl flex flex-col items-center justify-center ">
          <div className="">
            <div className="font-semibold text-[32px] text-[#52B4DA]">Free</div>
            <div className="text-[#11142D65] font-medium text-[20px]">
              Basic
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
                  1 Active Job
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-4" src={activeIcon} alt="icon" />
              </div>
              <div>
                <span className="text-[14px] text-[#323445E6]">
                  Basic List Placement
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-4" src={inactiveIcon} alt="icon" />
              </div>
              <div>
                <span className="text-[14px] text-[#323445E6]">
                  Unlimited Job Applicants
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-4" src={inactiveIcon} alt="icon" />
              </div>
              <div>
                <span className="text-[14px] text-[#323445E6]">
                  Invite Anyone to Apply to Your Jobs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <button className="border-2 border-[#1E3E85] rounded-3xl my-6 w-full py-5 text-[#1E3E85] font-semibold text-[20px]">
        Get Started
      </button>
    </div>
  );
}
