import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartComponent from "../Ui/ChartComponent";

const data = [
  { month: "Jan", total: 8 },
  { month: "Feb", total: 12 },
  { month: "Mar", total: 9 },
  { month: "Apr", total: 6 },
  { month: "May", total: 16 },
  { month: "Jun", total: 21, pending: 7, lost: 8, signed: 6 },
  { month: "Jul", total: 20 },
  { month: "Aug", total: 21 },
  { month: "Sep", total: 9 },
  { month: "Oct", total: 12 },
  { month: "Nov", total: 3 },
  { month: "Dec", total: 9 },
];

export default function BarChartSection() {
  const dropdownInfo = [
    {
      data: "Jan 10 - Jan 16",
    },
    {
      data: "Jan 10 - Jan 16",
    },
    {
      data: "Jan 10 - Jan 16",
    },
  ];

  return (
    <ChartComponent
      dropdownInfo={dropdownInfo}
      title="Revenue Flow
"
    >
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart data={data} barCategoryGap={24}>
            <CartesianGrid stroke="#f1f5f9" vertical={false} />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />

            <YAxis
              domain={[0, 25]}
              tickFormatter={(v) => `${v}%`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />

            <Tooltip
              formatter={(v) => `${v}%`}
              cursor={{ fill: "rgba(0,0,0,0.03)" }}
            />

            {/* Background bar */}
            <Bar
              dataKey="total"
              fill="#eef2f7"
              radius={[6, 6, 6, 6]}
              barSize={26}
            />

            {/* Stacked bars */}
            <Bar
              dataKey="pending"
              stackId="a"
              fill="#facc15"
              radius={[0, 0, 0, 0]}
              barSize={26}
            />

            <Bar
              dataKey="lost"
              stackId="a"
              fill="#fb7185"
              radius={[0, 0, 0, 0]}
              barSize={26}
            />

            <Bar
              dataKey="signed"
              stackId="a"
              fill="#22c55e"
              radius={[6, 6, 0, 0]}
              barSize={26}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartComponent>
  );
}
