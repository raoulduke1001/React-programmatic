import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 700 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 100 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#3F73F9", "#FFB800", "#33D69F", "#FF4C61"];

export default function App() {
  return (
    <PieChart width={250} height={200}>
      <Pie
        data={data}
        cx={125}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={-5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
