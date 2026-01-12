import { LoopArrow } from "../../Icons";
import GenarelDropdownComponent from "../Ui/GenarelDropdownComponent";

import WorldMap from "../WorldMap";

type DropdownInfoType = {
  data: string;
};

type PropsType = {
  dropdownInfo: DropdownInfoType[];
};

export default function MostLocation({ dropdownInfo }: PropsType) {
  return (
    <div>
      <div className="py-6 pr-6 bg-white dark:bg-[#1D1E24] dark:text-white rounded-lg">
        <div className="flex justify-between mb-3 pb-1.5 ml-6 ">
          <h3 className="text-2xl font-bold">Most locations</h3>
          {/* status */}
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block"></span>{" "}
              Pending
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 block"></span>{" "}
              Signed
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400 block"></span>{" "}
              Last
            </div>
          </div>

          <GenarelDropdownComponent
            dropdownInfo={dropdownInfo}
            title="This year"
          />
        </div>

        {/* content */}

        <div className=" grid grid-cols-6 gap-6 px-6  ">
          {/* left */}
          <div className="col-span-2">
            <div className="space-y-1.5 mb-7">
              <div className="flex items-end gap-3 ">
                <h3 className="text-2xl font-bold">77,723 </h3>
                <div className="flex items-center justify-center gap-1 w-15 h-5.5 bg-primary rounded-full text-xs font-medium text-white">
                  <LoopArrow /> 12.00%
                </div>
              </div>
              <p className="text-sm text-dark2">Compared to last month</p>
            </div>
            {/* location wise data */}
            <div className="text-sm font-medium space-y-2">
              <div className=" flex items-center justify-between bg-dark5 rounded-lg p-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-green-500 rounded-full "></div>
                  <p>United states</p>
                </div>
                <p className="text-dark2">15,732</p>
              </div>

              <div className=" flex items-center justify-between  rounded-lg p-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-yellow-500 rounded-full "></div>
                  <p>California</p>
                </div>
                <p className="text-dark2">15,732</p>
              </div>

              <div className=" flex items-center justify-between bg-dark5 rounded-lg p-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full "></div>
                  <p>Dhaka</p>
                </div>
                <p className="text-dark2">15,732</p>
              </div>

              <div className=" flex items-center justify-between rounded-lg p-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-[#936dff] rounded-full "></div>
                  <p>Los Angels</p>
                </div>
                <p className="text-dark2">15,732</p>
              </div>
            </div>
          </div>

          {/* right map */}
          <div className="col-span-4 border border-dark3 rounded-lg">
            <WorldMap />
          </div>
        </div>
      </div>
    </div>
  );
}
