import Plan1 from "./reusables/Plan1";
import Plan2 from "./reusables/Plan2";
export default function Help() {
  return (
    <div className="w-7xl mx-auto mb-10">
      <h1 className="text-[#11142D] font-semibold text-[40px] text-center mb-10">
        Help Is One Click Away
      </h1>
      <div className="flex">
        <Plan1 />
        <Plan2 />
      </div>
    </div>
  );
}
