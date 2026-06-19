import letsFind from "../assets/lets_find_rectangle.png";
import GruCard from "./reusables/GruCard";
import GruCardLight from "./reusables/GruCardLight";
import TextBlock from "./reusables/TextBlock";

export default function Global() {
  return (
    <div className="max-w-[1070px] w-full mx-auto mt-20 md:mt-40 px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
      
      
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <TextBlock
          badgeText="Global Reach"
          header="The First Fully Global Job Board, Anywhere, Ever"
          body="RemoteRecruit connects candidates with opportunities around the world.
          With today’s remote-first workforce, you need to be able to find the
          best jobs and the best people for them, wherever they may be."
        />
      </div>

      <div className="w-full sm:max-w-xl lg:w-1/2 px-4 sm:px-0">
        <div className="bg-white border border-dashed border-[#F6F4FF] py-8 sm:py-10 rounded-[24px] sm:rounded-[34px] shadow-[14px_41px_100px_0px_rgba(49,89,211,0.15)] sm:shadow-[14px_41px_100px_0px_rgba(49,89,211,0.22)] flex flex-col justify-between p-4 sm:p-6 overflow-visible">
          
          
          <img src={letsFind} alt="lets_find_rectangle" className="w-full h-auto object-contain" />
          
          
          <div className="flex flex-col gap-6 sm:gap-10 mt-8 relative pl-6 sm:pl-0">
            
            
            <div className="lg:ml-[-100px] md:ml-[-50px] ml-0 transition-all duration-300 relative z-10 max-w-full">
              <GruCard text1="Python Developer" text2="Felonious Gru" />
            </div>
            
            
            <div className="relative z-10 max-w-full">
              <GruCardLight text1="Frontend Wizard" text2="Mel Muselphiem" />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}