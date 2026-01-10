import HomeChartImage from "../../assets/homeChartImage.png";
import MoneyBagImage from "../../assets/moneyBagImage.svg";
import { ArrowUpDown } from "../../Icons";

type Statestic = {
  title: string;
  totalDoller: string;
  growingPercentage: string;
};

type StatesticProps = {
  statestic: Statestic;
};

export default function StatesticTotal({ statestic }: StatesticProps) {
  console.log(statestic);
  return (
    <div className="bg-white rounded-lg p-5 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={MoneyBagImage} alt="" />
          <h3 className="text-lg font-semibold">{statestic?.title}</h3>
        </div>
        <div></div>
      </div>

      <div className="flex justify-between items-end gap-5">
        <div>
          <h3 className="text-[28px] font-bold">{statestic?.totalDoller}</h3>
          <div className="flex gap-1  items-center">
            <ArrowUpDown />
            <p className="text-sm ">
              <span className="text-primary">
                {" "}
                {statestic?.growingPercentage}
              </span>{" "}
              from last week
            </p>
          </div>
        </div>

        <div>
          <img src={HomeChartImage} alt="image" />
        </div>
      </div>
    </div>
  );
}
