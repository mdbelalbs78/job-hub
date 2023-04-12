import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Reachart = () => {
  const data = [
    {
      name: "assignment 1",
      uv: 60,
    },
    {
      name: "assignment 2",
      uv: 60,
    },
    {
      name: "assignment 3",
      uv: 57,
    },
    {
      name: "assignment 4",
      uv: 59,
    },
    {
      name: "assignment 5",
      uv: 41,
    },
    {
      name: "assignment 6",
      uv: 60,
    },
    {
      name: "assignment 7",
      uv: 60,
    },
  ];

  return (
    <div>
      <ComposedChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Reachart;
