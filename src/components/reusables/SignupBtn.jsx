import { HiArrowRight } from "react-icons/hi";
export default function SignupBtn() {
  return (
    <button className="inline-flex items-center mt-10 gap-4 pl-2 pr-7 py-2 bg-[#5799EB]/15 hover:bg-[#5799EB]/25 active:scale-[0.98] rounded-full transition-all duration-200 group w-[220px]">
      <div className="w-12 h-12 bg-[#52B4DA] rounded-full flex items-center justify-center text-white shadow-md group-hover:bg-[#3ca0c7] transition-colors duration-200">
        <HiArrowRight className="w-5 h-5 stroke-[2.5]" />
      </div>
      <span className="text-[#1E3E85] text-[16px] font-medium tracking-wide">
        Get Started
      </span>
    </button>
  );
}
