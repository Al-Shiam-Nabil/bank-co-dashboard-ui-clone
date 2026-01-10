import BarChartSection from "../../Components/Home/BarChartSection";
import EffeciencyPiChart from "../../Components/Home/EffeciencyPiChart";
import StatesticTotal from "../../Components/Home/StatesticTotal";
import MyWalletComponent from "../../Components/Ui/MyWalletComponent";
import TableComponent from "../../Components/Ui/TableComponent";

export default function HomePage() {
  const statesticTotalArray = [
    {
      title: "Total earnings",
      totalDoller: "$7,245.00",
      growingPercentage: "+ 3.5%",
    },
    {
      title: "Total Spending",
      totalDoller: "$7,245.00",
      growingPercentage: "+ 3.5%",
    },
    {
      title: "Spending Goal",
      totalDoller: "$7,245.00",
      growingPercentage: "+ 3.5%",
    },
  ];

  const effeciencyObj = {
    arrival: "$5,230",
    spendingDoller: "$6,230",
    goal: "13%",
    spendingPercentage: "28%",
    others: "59%",
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-8 m-12">
        {/* left */}
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-5">
            {statesticTotalArray.map((statestic, index) => (
              <StatesticTotal
                key={index}
                statestic={statestic}
              ></StatesticTotal>
            ))}
          </div>

          {/* rechart */}

          <div className=" grid  grid-cols-3 gap-5 mt-8">
            <div className="col-span-2">
              <BarChartSection />
            </div>
            {/* pi chart */}

            <div className="col-span-1">
              <EffeciencyPiChart effeciencyObj={effeciencyObj} />
            </div>
          </div>

          {/*table */}

          <div className="col-span-full mb-12">
            <TableComponent />
          </div>
        </div>

        {/* right */}
        <div
          className="col-span-3
    "
        >
          <MyWalletComponent />
        </div>
      </div>
    </>
  );
}
