import signupImg from "../assets/signup.png";
import SignupBtn from "./reusables/SignupBtn";

export default function SignUp() {
  return (
    <div className="min-h-[500px] lg:h-[610px] bg-gradient-to-r from-[#5799EB]/20 to-[#9F74FB]/20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 overflow-hidden mb-20 py-12 lg:py-0">
      <div className="w-full lg:w-1/2 flex justify-start order-2 lg:order-1">
        <div className="w-full max-w-[620px] lg:max-w-[681px] pr-3 pt-3 md:mt-70 bg-white md:rounded-r-3xl bg-white rounded-r-3xl shadow-md lg:shadow-none">
          <img
            className="w-full h-[250px] sm:h-[350px] lg:h-auto rounded-r-3xl object-cover"
            src={signupImg}
            alt="Signup preview mockup"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 sm:px-8 lg:px-0 order-1 lg:order-2">
        <p className="text-sm sm:text-[16px] text-[#1E3E85] font-semibold uppercase tracking-wider mb-2">
          Are you ready?
        </p>

        <h2 className="text-[#11142D] font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight max-w-md">
          Help is only a few clicks away!
        </h2>

        <p className="text-[#767784] text-base max-w-[330px] mt-4 lg:mt-8 mb-6 lg:mb-8">
          Click below to get set up super quickly and find help now!
        </p>

        <div className="w-full sm:w-auto flex justify-center lg:justify-start">
          <SignupBtn />
        </div>
      </div>
    </div>
  );
}
