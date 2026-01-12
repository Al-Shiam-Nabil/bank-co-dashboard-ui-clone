import BarChartSection from "../../Components/Home/BarChartSection";
import EffeciencyPiChart from "../../Components/Home/EffeciencyPiChart";
import TotalBalance from "../../Components/MyWallet/TotalBalance";
import MyWalletComponent from "../../Components/Ui/MyWalletComponent";
import TableComponent from "../../Components/Ui/TableComponent";
import Customer1 from "../../assets/customer1.png";
import Customer2 from "../../assets/customer2.png";
import Customer3 from "../../assets/customer3.png";

export default function MyWallet() {
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

  const tableData = [
    {
      name: "Devon Lane",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer1,
    },
    {
      name: "Bessie Cooper",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer2,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-8 m-12">
      {/* left */}

      <div
        className="col-span-3 space-y-8
        "
      >
        <TotalBalance />
        <MyWalletComponent />
      </div>

      {/* right */}

      <div className="col-span-9 space-y-8">
        {/* rechart */}

        <div className=" grid  grid-cols-3 gap-5 ">
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
          <TableComponent tableData={tableData} />
        </div>
      </div>
    </div>
  );
}
