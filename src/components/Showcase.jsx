import TextBlock from "./reusables/TextBlock";
import showcase from "../assets/showcase.png";
import GruCard from "./reusables/GruCard";
import play from "../assets/play_icon.png";
import TagBadge from "./reusables/TagBadge";

export default function Showcase() {
  return (
    <div className="max-w-[1070px] w-full mx-auto mt-20 md:mt-40 px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mb-20">
      
      
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <TextBlock
          badgeText="Custom Profile"
          header="Showcase Your Talents"
          body="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
        />
      </div>

      
      <div className="w-full sm:max-w-xl lg:w-[455px] px-2 sm:px-0">
        <div className="bg-white border border-dashed border-[#F6F4FF] py-8 sm:py-10 rounded-[24px] sm:rounded-[34px] shadow-[14px_41px_100px_0px_rgba(49,89,211,0.15)] sm:shadow-[14px_41px_100px_0px_rgba(49,89,211,0.22)] flex flex-col justify-between p-4 sm:p-6 overflow-visible">
          
          
          <div className="relative w-full h-[160px] sm:h-[220px] overflow-hidden rounded-2xl bg-slate-100">
            <img 
              src={showcase} 
              alt="showcase mockup" 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform">
              <img className="w-12 sm:w-[57px] h-auto" src={play} alt="play icon" />
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 mt-8 relative pl-6 sm:pl-0">
            
            
            <div className="lg:ml-[-100px] md:ml-[-50px] ml-0 transition-all duration-300 relative z-10 max-w-full">
              <GruCard text1="Python Developer" text2="Felonious Gru" />
            </div>
            
            
            <div className="flex flex-wrap gap-2 pt-2 relative z-10">
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