import letsFind from "../assets/lets_find_rectangle.png";
import GruCard from "./reusables/GruCard";
import GruCardLight from "./reusables/GruCardLight";

export default function Global() {
  return (
    <div className="flex w-[1070px] mx-auto mt-40 items-center gap-20 mb-20">
      <div className="w-1/2">
        <h2 className="text-[40px]">
          The First Fully Global Job Board, Anywhere, Ever
        </h2>
        <p className="text-[#11142DA4] mt-8">
          RemoteRecruit connects candidates with opportunities around the world.
          With today’s remote-first workforce, you need to be able to find the
          best jobs and the best people for them, wherever they may be.
        </p>
      </div>
      <div className="w-1/2">
        <div className="bg-white border border-dashed border-[#F6F4FF] py-10 rounded-[34px] shadow-[14px_41px_100px_0px_rgba(49,89,211,0.22)]  flex flex-col justify-between p-6">
          <img src={letsFind} alt="lets_find_rectangle" />
          <div className="flex flex-col gap-10 mt-8">
            <div className="ml-[-100px]">
              <GruCard text1="Python Developer" text2="Felonious Gru" />
            </div>
            <div>
              <GruCardLight text1="Frontend Wizard" text2="Mel Muselphiem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
