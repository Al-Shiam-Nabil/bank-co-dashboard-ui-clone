import { ChevronLeft, ChevronRight } from "lucide-react";
import CalenderComponent from "../../Components/Ui/CalenderComponent";
import MyWalletComponent from "../../Components/Ui/MyWalletComponent";

export default function CalenderPage() {
  return (
    <div className="grid grid-cols-12 gap-8 m-12">
      {/* left */}
      <div className="col-span-9 space-y-8">
        <div className="bg-white dark:bg-[#1D1E24] dark:text-white py-5 px-10 rounded-lg ">
          <div className="flex items-center justify-between border-b border-dark3 pb-5">
            <h3 className="text-2xl font-bold">Calender</h3>
            <p className="text-xl font-bold">January 2026</p>
            <div className="flex items-center gap-5">
              {" "}
              <ChevronLeft stroke="gray" /> <ChevronRight stroke="gray" />
            </div>
          </div>

          {/* main calender */}

          <div className="grid grid-cols-7 place-items-center mt-6">
            <div className="calenderStyle text-red-400!">Sat</div>
            <div className="calenderStyle">Sun</div>
            <div className="calenderStyle">Mon</div>
            <div className="calenderStyle">Tues</div>
            <div className="calenderStyle">Wed</div>
            <div className="calenderStyle">Thus</div>
            <div className="calenderStyle text-red-400!">Fri</div>

            {Array.from({ length: 31 }).map((_, index) => (
              <div
                className={`w-full h-30 ${
                  (index === 12 && "border-2 border-green-200 rounded-lg") ||
                  ((index + 1) % 7 === 0 && "text-red-500") ||
                  (index % 7 === 0 && "text-red-500")
                } grid place-items-center text-lg font-medium`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right */}
      <div
        className="col-span-3
        "
      >
        <MyWalletComponent />

        <CalenderComponent />
      </div>
    </div>
  );
}
