import Badge from "./Badge";

export default function TextBlock({ badgeText, header, body }) {
  return (    
    <div className="w-full flex flex-col items-center lg:items-start">
      
      <div className="mb-6 md:mb-8">
        <Badge text={badgeText} />
      </div>
      
      <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#11142D] leading-tight tracking-tight">
        {header}
      </h2>
      
      <p className="text-[#11142DA4] text-base md:text-[17px] mt-6 leading-relaxed max-w-xl">
        {body}
      </p>

    </div>
  );
}