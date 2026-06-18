import gru from "../../assets/gru.png";

export default function GruCard({ text1, text2, imgSrc }) {
  return (
    <div className=" w-88 h-18.25 bg-white border-0 shadow-[14px_13px_20px_0px_rgba(135,129,245,0.22)] flex items-center px-4 rounded-r-full rounded-l-full">
      <div className="flex items-center gap-4 ">
        <div>
          <img
            className="w-21.5 h-21.5 rounded-full border-4 border-amber-400"
            src={gru}
            alt="gru"
          />
        </div>
        <div>
          <div className="text-[12px] text-[#1E3E85] font-semibold">
            {text1}
          </div>
          <div className="text-[17px] font-medium text-[#11142D]">{text2}</div>
        </div>
      </div>
    </div>
  );
}
