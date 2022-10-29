import { useEffect, useState } from "react";
import {
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  ComposedChart,
  Label,
} from "recharts";

const Preview = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="oil"
          stackId="1"
          stroke="#DC2626"
          fill="#DC2626"
        />
        <Area
          type="monotone"
          dataKey="gas"
          stackId="1"
          stroke="#facc15"
          fill="#facc15"
        />
        <Area
          type="monotone"
          dataKey="solar"
          stackId="1"
          stroke="#65a30d"
          fill="#65a30d"
        />
      <ReferenceLine x="Page B" stroke="white" strokeWidth={3} label=<Label value="Start Time" position="top" fill="#e5e7eb"/> />
      <ReferenceLine x="Page F" stroke="white" strokeWidth={3} label=<Label value="End Time" position="top" fill="#e5e7eb"/> />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Preview;
