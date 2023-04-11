import React from 'react';
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
  } from 'recharts';
  




const Reachart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 60,
         
        },
        {
          name: 'Page B',
          uv: 60,
          
        },
        {
          name: 'Page C',
          uv: 57,
          
        },
        {
          name: 'Page D',
          uv: 59,
          
        },
        {
          name: 'Page E',
          uv: 41,
          
        },
        {
          name: 'Page F',
          uv: 60,
        },
      ];
      
    return (
        <div>
            <ComposedChart
          width={500}
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