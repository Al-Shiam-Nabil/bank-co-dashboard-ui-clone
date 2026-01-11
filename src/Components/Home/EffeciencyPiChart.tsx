import { ArrowUpDown } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import GenarelDropdownComponent from "../Ui/GenarelDropdownComponent";

const data = [
  { value: 20, color: "#22c55e" },
  { value: 35, color: "#facc15" },
  { value: 40, color: "#e5e7eb" },
  { value: 15, color: "#0f172a" },
];

const renderInsideLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill="#0f172a"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {`${Math.round(percent * 100)}%`}
    </text>
  );
};

type EffeciencyType = {
  arrival: string;
  spendingDoller: string;
  goal: string;
  spendingPercentage: string;
  others: string;
};

type EffeciencyTypeProps = {
  effeciencyObj: EffeciencyType;
};

export default function EffeciencyPiChart({
  effeciencyObj,
}: EffeciencyTypeProps) {
  const dropdownInfo = [
    {
      data: "January",
    },
    {
      data: "february",
    },
    {
      data: "March",
    },
    {
      data: "April",
    },
  ];
  return (
    <div className="bg-white dark:bg-[#1D1E24] dark:text-white rounded-lg h-full  space-y-3">
      <div className="flex justify-between items-center border-b border-dark3 dark:border-gray-700 py-2 px-5">
        <h3 className="text-xl font-bold">Effeciency</h3>

        {/* <div className="cursor-pointer py-1">
          <p className="flex items-center gap-1 font-semibold">
            Monthly
            <span>
              <ChevronDown size={16} />
            </span>
          </p>
        </div> */}

        <GenarelDropdownComponent
          dropdownInfo={dropdownInfo}
          title="Monthly"
          titleClass=" font-semibold "
        />
      </div>

      <div className="flex items-center gap-10 py-3 px-8">
        <div>
          <div style={{ width: 180, height: 180 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={90}
                  dataKey="value"
                  paddingAngle={0}
                  label={renderInsideLabel}
                  labelLine={false}
                >
                  {data.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="flex items-center text-lg font-bold text-primary gap-1">
              {effeciencyObj?.arrival} <ArrowUpDown size={16} />
            </h3>
            <p className="text-dark2 font-medium">Arraival</p>
          </div>

          <div>
            <h3 className="flex items-center text-lg font-bold gap-1">
              {effeciencyObj?.spendingDoller}{" "}
              <ArrowUpDown size={16} stroke="gray" />
            </h3>
            <p className="text-dark2 font-medium">Spending</p>
          </div>
        </div>
      </div>

      <div className="text-sm space-y-3  py-3 px-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full block bg-green-400"></span>{" "}
            <p className="text-dark2 dark:text-white font-semibold">Goal</p>
          </div>
          <p className="font-bold">{effeciencyObj?.goal}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full block bg-yellow-400"></span>{" "}
            <p className="text-dark2 dark:text-white font-semibold">Spending</p>
          </div>
          <p className="font-bold">{effeciencyObj?.spendingPercentage}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full block bg-dark3"></span>{" "}
            <p className="text-dark2 dark:text-white font-semibold">Others</p>
          </div>
          <p className="font-bold">{effeciencyObj?.others}</p>
        </div>
      </div>
    </div>
  );
}
