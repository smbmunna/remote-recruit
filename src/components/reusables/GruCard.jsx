import gru from "../../assets/gru.png";

export default function GruCard({ text1, text2, imgSrc }) {
  return (
    
    <div className="w-full max-w-[320px] sm:max-w-[352px] h-16 sm:h-[73px] bg-white border-0 shadow-[14px_13px_20px_0px_rgba(135,129,245,0.22)] flex items-center px-3 sm:px-4 rounded-full">
      <div className="flex items-center gap-3 sm:gap-4 w-full">
        
        
        <div className="flex-shrink-0">
          <img
            className="w-14 h-14 sm:w-[76px] sm:h-[76px] rounded-full border-2 sm:border-4 border-amber-400 object-cover"
            src={imgSrc || gru} 
            alt={text2 || "profile"}
          />
        </div>
                
        <div className="min-w-0">
          <div className="text-[10px] sm:text-[12px] text-[#1E3E85] font-semibold tracking-wide truncate">
            {text1}
          </div>
          <div className="text-[14px] sm:text-[17px] font-medium text-[#11142D] leading-tight truncate">
            {text2}
          </div>
        </div>

      </div>
    </div>
  );
}