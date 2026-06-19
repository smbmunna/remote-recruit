import letsFind from "../assets/lets_find_rectangle.png";
import GruCard from "./reusables/GruCard";
import GruCardLight from "./reusables/GruCardLight";
import TextBlock from "./reusables/TextBlock";
import activeIcon from "../assets/activeIcon.svg";

export default function Fees() {
  return (
    <div className="max-w-[1070px] w-full mx-auto mt-20 md:mt-40 px-4 sm:px-6 lg:px-0 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20 mb-20">
            
      <div className="w-full sm:max-w-xl lg:w-1/2 px-2 sm:px-0">
        <div className="bg-white border border-dashed border-[#F6F4FF] py-8 sm:py-10 rounded-[24px] sm:rounded-[34px] shadow-[14px_41px_100px_0px_rgba(49,89,211,0.15)] sm:shadow-[14px_41px_100px_0px_rgba(49,89,211,0.22)] flex flex-col justify-between p-5 sm:p-8 overflow-visible">
          
          <div>
            <p className="text-[#808191] text-sm">Your Membership Tier</p>
          </div>
          
          <div>
            <h2 className="text-[20px] bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent font-bold mb-6 mt-2">
              Premium
            </h2>
            
            <div>
              <p className="text-[#11142D]/50 font-bold text-[16px]">
                Features
              </p>
              
              <div className="grid gap-4 mt-4">
                {[
                  "Up to 25 active job posts",
                  "Premium Placement & Visibility",
                  "Messaging anyone, unlimited",
                  "Unlimited invites",
                  "View all applicants",
                  "Unlimited invites to jobseekers",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <img className="w-4 h-4" src={activeIcon} alt="icon" />
                    </div>
                    <div>
                      <span className="text-[14px] text-[#323445E6] font-medium">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-10 mt-8 relative pl-6 sm:pl-0">
            <div className="lg:ml-[-100px] md:ml-[-50px] ml-0 transition-all duration-300 relative z-10 max-w-full">
              <GruCard text1="Upcoming Payment In…" text2="14 Days - $79.99" />
            </div>
          </div>

        </div>
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <TextBlock
          badgeText="Actually Fee Free"
          header="Fee-Free Forever"
          body="We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved."
        />
      </div>

    </div>
  );
}