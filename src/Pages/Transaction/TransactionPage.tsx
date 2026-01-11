import ChattingComponent from "../../Components/Ui/ChattingComponent";
import MyWalletComponent from "../../Components/Ui/MyWalletComponent";
import TableComponent from "../../Components/Ui/TableComponent";
import Customer1 from "../../assets/customer1.png";
import Customer2 from "../../assets/customer2.png";
import Customer3 from "../../assets/customer3.png";

export default function TransactionPage() {
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
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
    },
    {
      name: "Dianne Russell",
      email: "devon@mail.com",
      location: "Philadelphia, USA",
      spent: "$101.00",
      avatar: Customer3,
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
      <div className="col-span-9 space-y-8">
        <TableComponent tableData={tableData} />
      </div>

      {/* right */}
      <div
        className="col-span-3
      "
      >
        <MyWalletComponent />
        <ChattingComponent />
      </div>
    </div>
  );
}
