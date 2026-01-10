import { ChevronDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
  return (
    <div className="py-3 pr-6 bg-white rounded-lg">
      <div className="flex justify-between mb-3 pb-1.5 ml-6 border-b border-dark3">
        <h3 className="text-2xl font-bold">Revenue Flow</h3>
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

        {/* date */}
        <div className="bg-dark4 rounded-lg py-2 px-3 cursor-pointer">
          <div>
            <p className="flex items-center gap-1">
              Jan 10 - Jan 16{" "}
              <span>
                {" "}
                <ChevronDown size={16} />
              </span>
            </p>
          </div>
        </div>
      </div>

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
    </div>
  );
}
