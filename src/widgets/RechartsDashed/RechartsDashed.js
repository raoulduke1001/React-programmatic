import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",
    pv: 9800,
    amt: 2500,
  },
  {
    name: "9",
    pv: 4300,
    amt: 2000,
  },
  {
    name: "10",
    pv: 2000,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
//   static demoUrl = "https://codesandbox.io/s/dashed-line-chart-dxwzg";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#3F73F9"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
