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
  Legend,
} from "recharts";

const predictScheduledDate = (data) => {
  if (!data || data.length === 0) { return {time: undefined}}

  return data.reduce((acc, next) => {
    const prevAll = acc.Renewable + acc["Fossil Fuels"] + acc.Nuclear;
    const nextAll = next.Renewable + next["Fossil Fuels"] + next.Nuclear;

    return (next.Renewable/nextAll > acc.Renewable/prevAll) ? next : acc
  } , data[0])
}

const Preview = ({data}) => (
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
          <XAxis dataKey="time" tickFormatter={(elem) => new Date(elem).toDateString()} interval='preserveStartEnd'/>
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Renewable"
            stackId="1"
            stroke="#65a30d"
            fill="#65a30d"
          />
          <Area
            type="monotone"
            dataKey="Nuclear"
            stackId="1"
            stroke="#facc15"
            fill="#facc15"
          />
          <Area
            type="monotone"
            dataKey="Fossil Fuels"
            stackId="1"
            stroke="#DC2626"
            fill="#DC2626"
          />
        <ReferenceLine x={predictScheduledDate(data).time} stroke="white" strokeWidth={3} label=<Label value="Predicted execution time" position="top" fill="#e5e7eb"/> />
        <ReferenceLine x="Page F" stroke="white" strokeWidth={3} label=<Label value="End Time" position="top" fill="#e5e7eb"/> />
        </ComposedChart>
      </ResponsiveContainer>
);

export default Preview;
