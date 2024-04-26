import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';

type ChartProps = {
    data: any[];
    categoryCharts: { category: string; color: string; name: string }[];
    index: number;
}


const AreACharts: React.FC<ChartProps> = ({ data, categoryCharts, index }) => {

    return (
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                    dataKey={`${categoryCharts[index].category}عدد القضايا`}
                    fill={categoryCharts[index].color}
                    name="عدد القضايا"
                />
                <Area
                    dataKey={`${categoryCharts[index].category}عدد المتابعين`}
                    fill={`${categoryCharts[index].color}80`}
                    name="عدد المتابعين"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreACharts;
