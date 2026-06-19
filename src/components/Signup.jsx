
import signupImg from "../assets/signup.png";
import SignupBtn from "./reusables/SignupBtn";

export default function SignUp() {
  return (
    <div className="h-[610px] bg-linear-to-r from-[#5799EB]/20 to-[#9F74FB]/20 flex items-center justify-between gap-8 overflow-hidden mb-20">
      <div className="w-1/2 flex justify-start">
        <div className="w-[681px] pr-3 pt-3 mt-70 bg-white rounded-r-3xl">
          <img
            className="w-full h-auto rounded-r-3xl object-cover "
            src={signupImg}
            alt="Signup img"
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center">
        <p className="text-[16px] text-[#1E3E85] font-semibold uppercase tracking-wider mb-2">
          Are you ready?
        </p>
        <h2 className="text-[#11142D] font-bold text-[44px] leading-tight max-w-md">
          Help is only a few clicks away!
        </h2>
        <p className="text-[#767784] w-[330px] mt-8">
          Click Below to get set up super quickly and find help now!
        </p>
        <SignupBtn/>
      </div>
    </div>
  );
}
