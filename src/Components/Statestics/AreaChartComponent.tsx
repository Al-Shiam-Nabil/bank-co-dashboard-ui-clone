import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartComponent from "../Ui/ChartComponent";

const data = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 75 },
  { name: "Mar", value: 68 },
  { name: "Apr", value: 55 },
  { name: "May", value: 75 },
  { name: "Jun", value: 58 },
  { name: "Jul", value: 45 },
  { name: "Aug", value: 62 },
  { name: "Sep", value: 75 },
  { name: "Oct", value: 68 },
  { name: "Nov", value: 85 },
  { name: "Dec", value: 76 },
];

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

export default function AreaChartComponent() {
  return (
    <ChartComponent dropdownInfo={dropdownInfo} title="Summary">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
          <Tooltip formatter={(v) => `${v}%`} />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={2}
            fill="url(#greenGradient)"
            dot={false}
            activeDot={{ r: 6, strokeWidth: 2, fill: "#22c55e" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartComponent>
  );
}
