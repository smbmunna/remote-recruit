import letsFind from "../assets/lets_find_rectangle.png";
import GruCard from "./reusables/GruCard";
import GruCardLight from "./reusables/GruCardLight";
import TextBlock from "./reusables/TextBlock";
import activeIcon from "../assets/activeIcon.svg";


export default function Fees() {
  return (
    <div className="flex w-[1070px] mx-auto mt-40 items-center gap-20 mb-20">
      <div className="w-1/2">
        <div className="bg-white border border-dashed border-[#F6F4FF] py-10 rounded-[34px] shadow-[14px_41px_100px_0px_rgba(49,89,211,0.22)]  flex flex-col justify-between p-6">
          <div>
            <p className="text-[#808191]">Your Membership Tier</p>
          </div>
          <div>
            <h2 className="text-[20px] bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent font-bold mb-8 mt-4">
              Premium
            </h2>
            <div>
              <p className="text-[#11142D]/50 font-bold text-[16px]">
                Features
              </p>
              {/* list */}
              <div className="grid gap-4 mt-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img className="w-4" src={activeIcon} alt="icon" />
                  </div>
                  <div>
                    <span className="text-[14px] text-[#323445E6]">
                      Up to 25 active job posts
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <img className="w-4" src={activeIcon} alt="icon" />
                  </div>
                  <div>
                    <span className="text-[14px] text-[#323445E6]">
                      Premium Placement & Visibility
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <img className="w-4" src={activeIcon} alt="icon" />
                  </div>
                  <div>
                    <span className="text-[14px] text-[#323445E6]">
                      Messaging anyone, unlimited
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <img className="w-4" src={activeIcon} alt="icon" />
                  </div>
                  <div>
                    <span className="text-[14px] text-[#323445E6]">
                      Unlimited invites
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <img className="w-4" src={activeIcon} alt="icon" />
                  </div>
                  <div>
                    <span className="text-[14px] text-[#323445E6]">
                      View all applicants
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <img className="w-4" src={activeIcon} alt="icon" />
                  </div>
                  <div>
                    <span className="text-[14px] text-[#323445E6]">
                      Unlimited invites to jobseekers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-8">
            <div className="ml-[-100px]">
              <GruCard text1="Upcoming Payment In…" text2="14 Days - $79.99"/>
            </div>
          </div>
        </div>
      </div>
      <TextBlock
        badgeText="Actually Fee Free"
        header="Fee-Free Forever"
        body="We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved."
      />
    </div>
  );
}
