import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { selectProductsBySchoolType } from "../../redux/api/apiSlice";

const SignupsBarGraph = () => {
  const signupsData = useSelector(selectProductsBySchoolType);
  console.log("Signups Data for Graph:", signupsData);

  const data = [
    {
      product: "Zeraki Analytics",
      Primary: 2,
      Secondary: 20,
      IGCSE: 11,
    },
    {
      product: "Zeraki Finance",
      Primary: 11,
      Secondary: 17,
      IGCSE: 6,
    },
    {
      product: "Zeraki Timetable",
      Primary: 23,
      Secondary: 12,
      IGCSE: 1,
    },
  ];

  return (
    <div>
      <h4>Signups Overview</h4>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Primary" stackId="a" fill="#8884d8" />
          <Bar dataKey="Secondary" stackId="a" fill="#82ca9d" />
          <Bar dataKey="IGCSE" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SignupsBarGraph;
