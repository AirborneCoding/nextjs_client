import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';

type ChartProps = {
    data: any[];
    categoryCharts: { category: string; color: string; name: string }[];
    index: number;
}
const BarCharts: React.FC<ChartProps> = ({ data, categoryCharts, index }) => {


    return (
        <ResponsiveContainer>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey={`${categoryCharts[index].category}عدد القضايا`}
                    fill={categoryCharts[index].color}
                    name="عدد القضايا"
                />
                <Bar
                    dataKey={`${categoryCharts[index].category}عدد المتابعين`}
                    fill={`${categoryCharts[index].color}80`}
                    name="عدد المتابعين"
                />
            </BarChart>
        </ResponsiveContainer >

    )
};

export default BarCharts;
