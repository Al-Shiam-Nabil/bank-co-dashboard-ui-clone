import { LoopArrow } from "../../Icons";

export default function TotalBalance() {
  return (
    <div className="px-7 py-11 bg-white rounded-lg ">
      <div className="border border-dark3 rounded-xl px-8 pt-8 pb-12 relative">
        <p className="text-2xl font-semibold">Total Balance</p>
        <h3 className="text-4xl font-bold mb-3">
          $88,232.00{" "}
          <span className="text-base font-medium text-dark2">USD</span>
        </h3>

        <div className="flex items-center gap-5">
          <p className="text-dark2 font-medium">11 April 2022</p>
          <div className="flex items-center text-primary font-medium ">
            <LoopArrow />
            2,05%
          </div>
        </div>

        <button className="text-dark rounded-lg border border-gray-400 bg-white px-6 py-3 font-medium absolute -bottom-6  left-[50%] -translate-x-[50%] whitespace-nowrap text-dark2 text-sm font-medium">
          Withdraw All Earning
        </button>
      </div>

      <button className="font-bold text-white bg-primary rounded-lg w-full h-14 mt-20 cursor-pointer">
        Add Money
      </button>
    </div>
  );
}
