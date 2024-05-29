/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

interface SignupProps {
  signup: any;
}

const signupTargets: { [key: string]: number } = {
  "Zeraki Analytics": 100,
  "Zeraki Finance": 80,
  "Zeraki Timetable": 60,
};

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Amount ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Targets: React.FC<SignupProps> = ({ signup }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const getDataForChart = (product: string) => {
    const target = signupTargets[product] || 0;
    const achieved = signup[product] || 0;
    return [
      { name: "Achieved", value: achieved },
      { name: "Remaining", value: target - achieved },
    ];
  };

  return (
    <div className="w-full text-center mt-4 bg-white rounded-xl pt-6 px-4">
      <h4 className="text-gray-800 mb-4">Targets Overview</h4>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {Object.keys(signupTargets).map((product) => (
          <div key={product} style={{ marginBottom: "20px" }}>
            <h5>{product}</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={getDataForChart(product)}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                >
                  {getDataForChart(product).map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.name === "Achieved" ? "#82ca9d" : "#8884d8"}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Targets;
