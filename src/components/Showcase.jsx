import TextBlock from "./reusables/TextBlock";
import showcase from "../assets/showcase.png";
import GruCard from "./reusables/GruCard";
import GruCardLight from "./reusables/GruCardLight";
import play from "../assets/play_icon.png";
import TagBadge from "./reusables/TagBadge";

export default function Showcase() {
  return (
    <div className="flex w-[1070px] mx-auto mt-40 items-center gap-20 mb-20">
      <TextBlock
        badgeText="Custom Profile"
        header="Showcase Your Talents"
        body="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
      />

      <div className="w-[355px]">
        <div className="bg-white border border-dashed border-[#F6F4FF] py-10 rounded-[34px] shadow-[14px_41px_100px_0px_rgba(49,89,211,0.22)]  flex flex-col justify-between p-6 ">
          <div className="relative inline-block w-full h-[220px] overflow-hidden rounded-2xl">
            <img src={showcase} alt="lets_find_rectangle" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform">
              <img className="w-[57px]" src={play} alt="play icon" />
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-8">
            <div className="ml-[-100px]">
              <GruCard text1="Python Developer" text2="Felonious Gru" />
            </div>
            <div className="">
              <TagBadge text="Python Dev"/>
              <TagBadge text="JavaScript"/>
              <TagBadge text="Front End"/>
              <TagBadge text="Back End"/>
              <TagBadge text="IOS Development"/>
              <TagBadge text="+12"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
